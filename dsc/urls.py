"""dsc URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
# coding=utf-8
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin
from django.views.generic import RedirectView
from django.conf import settings 
from django.contrib.auth import views as auth_views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^usuarios/', include('usuarios.urls',namespace='usuarios')),
    url(r'^usuarios/login$', auth_views.login,{'template_name':'/usuarios/templates/login.html'} ,name='login'),
    url(r'^noticias/',include('noticias.urls',namespace='noticias'))
    #url('', RedirectView.as_view(url='usuarios',permanent=True)),
]

urlpatterns+=static(settings.STATIC_URL,document_root=settings.STATIC_ROOT)


admin.site.site_header = 'Deporte Social Comunitario Administracion'
admin.site.site_title = 'Deporte Social Comunitario Administracion'




