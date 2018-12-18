from django.conf.urls import include, url
from .views import  NoticiaCreateView,NoticiaDetailView,NoticiaUpdateView,NoticiaCambioEstadoView,NoticiaListView



urlpatterns =[
	url(r'^registrar$', NoticiaCreateView.as_view(), name='registrar'),
    url(r'^listar$', NoticiaListView.as_view(), name='listar'),
    url(r'^detalles/(?P<pk>\d+)/$', NoticiaDetailView.as_view(), name='detalles'),
    url(r'^editar/(?P<pk>\d+)/$', NoticiaUpdateView.as_view(), name='editar'),
    url(r'^cambiar_estado/(?P<pk>\d+)/$', NoticiaCambioEstadoView.as_view(), name='cambiar_estado'),

]