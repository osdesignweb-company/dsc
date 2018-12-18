# coding=utf-8
from django.contrib import admin
from .models import (AuthUser, Personas, Usuarios,
					 Departamentos, DirectorioPersonas,
					 DjangoAdminLog,Municipio,Paises)
# Register your models here.

admin.site.register(AuthUser)
admin.site.register(Personas)
admin.site.register(Usuarios)
admin.site.register(Departamentos)
admin.site.register(DirectorioPersonas)
admin.site.register(DjangoAdminLog)
admin.site.register(Municipio)
admin.site.register(Paises)
