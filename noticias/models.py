# coding=utf-8
from __future__ import unicode_literals
from django.db import models
# Create your models here.

import unicodedata
from django.core.urlresolvers import reverse


def file_name(instance, filename):
    """
    Se implementa funcion encargada de eliminar tildes de nombres
    :param filename: nombre del archivo
    :return: ruta del archivo sin tildes
    """
    ruta = 'usuarios/' + ''.join(
        (c for c in unicodedata.normalize('NFD', filename) if unicodedata.category(c) != 'Mn'))
    return ruta


class Noticia(models.Model):

	foto = models.ImageField(upload_to=file_name, null=True, blank=True)
	titulo = models.CharField(max_length=255, verbose_name="Título de la noticia")
	fecha_inicio = models.DateField(verbose_name="Fecha de inicio")
	fecha_expiracion = models.DateField(verbose_name="Fecha de finalización")
	autor = models.CharField(max_length=100)
	cuerpo_noticia = models.TextField(verbose_name="Cuerpo de la noticia")
	previsualizacion = models.TextField()
	etiquetas = models.CharField(max_length=255, null=True, blank=True)
	video = models.CharField(max_length=255, null=True, blank=True)
	estado = models.IntegerField(default=1)

	def get_absolute_url(self):
		return reverse('noticias:listar')

	def __str__(self):
		return self.titulo

	def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None):
		self.etiquetas = self.etiquetas.upper()
		return super(Noticia, self).save(force_insert, force_update, using, update_fields)

	class Meta:
		permissions = (
		("list_noticia", "Puede listar noticias"),
        )


