# coding=utf-8
from django.shortcuts import render

# Create your views here.
import operator
from django.shortcuts import get_object_or_404, redirect
from django.contrib.auth.mixins import PermissionRequiredMixin
from django.views.generic import CreateView, UpdateView, DetailView, View
from django.contrib import messages
from noticias.models import Noticia
from noticias.forms import NoticiaCreateForm, NoticiaUpdateForm
from dsc.utilities import DatatablesListView


class NoticiaCreateView(PermissionRequiredMixin, CreateView):
    model = Noticia
    form_class = NoticiaCreateForm
    permission_required = 'noticias.add_noticia'

    def form_valid(self, form):
        noticia = form.save(commit=False)
        if noticia.video:
            noticia.video = noticia.video.replace("watch?v=", "embed/")
        noticia.previsualizacion = self.request.POST.get("previsualizacion")
        messages.success(self.request, "Noticia registrada correctamente.")
        return super(NoticiaCreateView, self).form_valid(form)


class NoticiaListView(DatatablesListView):
    model = Noticia
    template_name = 'noticias/noticia_list.html'
    fields = ['titulo', 'fecha_inicio', 'fecha_expiracion', 'etiquetas']
    column_names_and_defs = ['Título', 'Fecha de publicación', 'Fecha de expiración', 'Palabras clave']
    options_list = [
        {
            'label_opcion': 'Ver más',
            'url_opcion': 'noticias:detalles',
            'parametros_url': ['id'],
            'icono': 'fa-eye',

        },
        {
            'label_opcion': 'Editar',
            'url_opcion': 'noticias:editar',
            'parametros_url': ['id'],
            'icono': 'fa-edit',
            'permissions': ['noticias.change_noticia'],
            'conditions': [{
                'campo': 'estado',
                'valores_verificar': 1,
                'lambda_evaluacion': lambda x, y: operator.eq(x, y)
            }]

        },
        {
            'label_opcion': ' A/I',
            'url_opcion': 'noticias:cambiar_estado',
            'parametros_url': ['id'],
            'icono': 'fa-ban',
            'confirm_modal': True,
            'tooltip': 'Activar / Inactivar',
            'permissions': ['noticias.change_noticia'],
        },

    ]

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated():
            if 'estado' not in self.fields:
                self.fields.append('estado')
                self.column_names_and_defs.append('Estado')
        else:
            try:
                self.fields.remove('estado')
                self.column_names_and_defs.remove('Estado')
            except:
                print('Usuario publico no muestra campos estado')
        return super(NoticiaListView, self).dispatch(request, *args, **kwargs)

    def get_rendered_html_value(self, field, value, object):
        html_value = super(NoticiaListView, self).get_rendered_html_value(field, value, object)
        if field.name == 'estado':
            html_value = 'ACTIVO' if value else 'INACTIVO'
        return html_value


class NoticiaDetailView(DetailView):
    model = Noticia


class NoticiaUpdateView(PermissionRequiredMixin, UpdateView):
    model = Noticia
    form_class = NoticiaUpdateForm
    permission_required = 'noticias.change_noticia'

    def get_form(self, form_class=None):
        self.object.video = self.object.video.replace("embed/", "watch?v=")
        return self.form_class(**self.get_form_kwargs())

    def form_valid(self, form):
        noticia = form.save(commit=False)
        if noticia.video:
            noticia.video = noticia.video.replace("watch?v=", "embed/")
        noticia.previsualizacion = self.request.POST.get("previsualizacion")
        if form.has_changed():
            messages.success(self.request, "Noticia editada correctamente.")

        return super(NoticiaUpdateView, self).form_valid(form)

    def get_context_data(self, **kwargs):
        context = super(NoticiaUpdateView, self).get_context_data(**kwargs)
        ruta_foto = self.object.foto
        if ruta_foto:
            context['foto'] = ruta_foto
        return context


class NoticiaCambioEstadoView(PermissionRequiredMixin, View):

    model = Noticia
    permission_required = 'noticias.change_noticia'

    def get(self, *args, **kwargs):
        noticia = get_object_or_404(self.model, pk=kwargs['pk'])
        noticia.estado = not noticia.estado
        noticia.save()
        if noticia.estado:
            messages.success(self.request, 'Noticia activada correctamente')
        else:
            messages.success(self.request, 'Noticia desactivada correctamente')
        return redirect(noticia.get_absolute_url())
