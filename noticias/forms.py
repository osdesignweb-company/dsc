import datetime
from django import forms
from noticias.models import Noticia
from dsc.utilities import MyDateWidget




class NoticiaCreateForm(forms.ModelForm):
    required_css_class = 'required'

    def __init__(self, *args, **kwargs):
        super(NoticiaCreateForm, self).__init__(*args, **kwargs)
        self.fields['fecha_inicio'].widget = MyDateWidget()
        self.fields['fecha_expiracion'].widget = MyDateWidget()

    class Meta:
        model = Noticia
        fields = ['titulo', 'fecha_inicio', 'fecha_expiracion', 'autor', 'video', 'foto', 'cuerpo_noticia', 'etiquetas']

    def clean(self):
        cleaned_data = super(NoticiaCreateForm, self).clean()
        if not self._errors:
            try:
                fecha_inicio = cleaned_data.get('fecha_inicio')
                fecha_fin = cleaned_data.get('fecha_expiracion')
            except Exception:
                fecha_inicio = None
                fecha_fin = None

            if fecha_inicio and fecha_fin:
                if fecha_inicio > fecha_fin:
                    mensaje = 'La fecha de inicio no puede ser mayor a la fecha de expiración'
                    self.add_error('fecha_inicio', mensaje)

        return cleaned_data


class NoticiaUpdateForm(forms.ModelForm):
    required_css_class = 'required'

    def __init__(self, *args, **kwargs):
        super(NoticiaUpdateForm, self).__init__(*args, **kwargs)
        self.fields['fecha_inicio'].widget = MyDateWidget()
        self.fields['fecha_expiracion'].widget = MyDateWidget()
        self.fields['video'].initial = self.instance.video

    class Meta:
        model = Noticia
        fields = ['titulo', 'fecha_inicio', 'fecha_expiracion', 'autor', 'video', 'foto', 'cuerpo_noticia', 'etiquetas']

    def clean(self):
        cleaned_data = super(NoticiaUpdateForm, self).clean()
        if not self._errors:
            try:
                fecha_inicio = cleaned_data.get('fecha_inicio')
                fecha_fin = cleaned_data.get('fecha_expiracion')
            except Exception:
                fecha_inicio = None
                fecha_fin = None

            if fecha_inicio and fecha_fin:
                if fecha_inicio > fecha_fin:
                    mensaje = 'La fecha de inicio no puede ser mayor a la fecha de expiración'
                    self.add_error('fecha_inicio', mensaje)

        return cleaned_data
