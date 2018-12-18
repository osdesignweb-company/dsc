# coding=utf-8

# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.

from __future__ import unicode_literals
from django.db import models
from datetime import datetime



TIPO_IDENTIDAD = (
    (0,'Cédula de ciudadanía'),
    (1,'Cédula Extranjera'),
    (2, 'Pasaporte'),
    (3, 'Tarjeta de ideantidad'),
    )

TIPO_GENERO = (
    (1, 'Femenino'),
    (2, 'Masculino'))


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=80)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=30)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Departamentos(models.Model):
    id_departamento = models.TextField(primary_key=True)
    id_pais = models.TextField()
    departamento = models.TextField()

    class Meta:
        managed = False
        db_table = 'departamentos'


class DirectorioPersonas(models.Model):
    id_directorio = models.AutoField(primary_key=True)
    id_persona = models.ForeignKey('Personas', models.DO_NOTHING, db_column='id_persona')
    imagen = models.TextField(blank=True, null=True)
    correo = models.TextField(blank=True, null=True)
    direccion = models.TextField(blank=True, null=True)
    celular = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    telefono_fijo = models.DecimalField(db_column='telefono fijo', max_digits=65535, decimal_places=65535, blank=True, null=True)  # Field renamed to remove unsuitable characters.
    extension = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'directorio_personas	'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Municipio(models.Model):
    id_municipio = models.TextField(primary_key=True)
    id_departamento = models.ForeignKey(Departamentos, models.DO_NOTHING, db_column='id_departamento')
    municipio = models.TextField()

    class Meta:
        managed = False
        db_table = 'municipio'


class Paises(models.Model):
    id_pais = models.TextField(primary_key=True)
    pais = models.TextField()

    class Meta:
        managed = False
        db_table = 'paises'


class Personas(models.Model):
    id_persona = models.BigIntegerField(primary_key=True)
    tipo_documento = models.SmallIntegerField(choices=TIPO_IDENTIDAD)
    nombre = models.TextField(max_length=25)
    primer_apellido = models.TextField()
    segundo_apellido = models.TextField()
    fecha_nacimiento = models.DateField(blank = False)
    sexo = models.SmallIntegerField(choices=TIPO_GENERO)
    creado = models.DateTimeField(blank = False)
    pais_nacimiento = models.ForeignKey(Paises, models.DO_NOTHING, db_column='pais_nacimiento')

    class Meta:
        #managed = False
        db_table = 'personas'


class Usuarios(models.Model):
    id_usuarios = models.AutoField(primary_key=True)
    id_persona = models.ForeignKey(Personas, models.DO_NOTHING, db_column='id_persona')
    password = models.TextField()
    rol = models.TextField()
    activo = models.BooleanField()

    class Meta:
        managed = False
        db_table = 'usuarios	'


