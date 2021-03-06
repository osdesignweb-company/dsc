# -*- coding: utf-8 -*-
# Generated by Django 1.9.10 on 2018-12-16 16:41
from __future__ import unicode_literals

from django.db import migrations, models
import noticias.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Noticia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('foto', models.ImageField(blank=True, null=True, upload_to=noticias.models.file_name)),
                ('titulo', models.CharField(max_length=255, verbose_name='T\xedtulo de la noticia')),
                ('fecha_inicio', models.DateField(verbose_name='Fecha de inicio')),
                ('fecha_expiracion', models.DateField(verbose_name='Fecha de finalizaci\xf3n')),
                ('autor', models.CharField(max_length=100)),
                ('cuerpo_noticia', models.TextField(verbose_name='Cuerpo de la noticia')),
                ('previsualizacion', models.TextField()),
                ('etiquetas', models.CharField(blank=True, max_length=255, null=True)),
                ('video', models.CharField(blank=True, max_length=255, null=True)),
                ('estado', models.IntegerField(default=1)),
            ],
            options={
                'permissions': (('list_noticia', 'Puede listar noticias'),),
            },
        ),
    ]
