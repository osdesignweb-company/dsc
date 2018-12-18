from django import forms
from .models import Personas,Usuarios


class PersonasFormularios(forms.ModelForm):
	class Meta:
		model = Personas
		fields = ('id_persona', 'tipo_documento',
					'nombre','primer_apellido',
					'segundo_apellido','fecha_nacimiento','sexo','pais_nacimiento')
		widgets = {
			'nombre':forms.Textarea(attrs={'cols':50,'rows':1}),
			'primer_apellido':forms.Textarea(attrs={'cols':50,'rows':1}),
			'segundo_apellido':forms.Textarea(attrs={'cols':50,'rows':1}),
		}
		


class UsuariosFormularios(forms.ModelForm):
	class Meta:
		model = Usuarios
		fields = ('id_usuarios','id_persona','password','rol','activo')

		widgets = {
			'password':forms.Textarea(attrs={'cols':50,'rows':1}),
			'rol':forms.Textarea(attrs={'cols':50,'rows':1}),
			#'activo':forms.Textarea(attrs={'cols':50,'rows':1}),
			
		}