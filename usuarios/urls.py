from django.conf.urls import url 
from . import views
from django.contrib.auth.views import login, logout

urlpatterns =[
	url(r'^$',views.index, name = 'index'),
	url(r'^login/$',login,{'template_name':'login.html'},name='Login'),
	url(r'^logout/$',logout,{'template_name':'login.html'}),
	url(r'^Personas/$',views.Personas_view,name='Personas'),
	url(r'^Usuarios/$',views.Usuarios_view,name='Personas'),

	#url('usuarios/Municipio/',views.Municipio_new, name = 'Municipio'),
	#url('usuarios/Perfil_usuario/',views.PerfilUsuario_view, name = 'Perfil_usuario'),
]