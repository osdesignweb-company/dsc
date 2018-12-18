form = "#usuario-form";
fields = Object.assign(fields,{
            username: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese un nombre de usuario'
                    },
                    regexp: {
                        message: "Introduce un nombre de usuario válido. Este valor puede contener sólo letras, números y los caracteres @.+-_.",
                        regexp: /^[\w@.+_-]*$/
                    }
                }
            },
            first_name: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese sus nombres'
                    }
                }
            },
            last_name: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese sus apellidos'
                    }
                }
            },
            email:{
              validators: {
                  emailAddress: {
                      message: 'El valor ingresado no es un correo electrónico válido'
                  },
                  notEmpty:{
                      message: 'Por favor ingrese un correo electrónico'
                  }

              }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese su contraseña'
                    }
                },
                identical: {
                    field: 'confirm_password',
                    message: 'Las contraseñas no coinciden entre si'
                }

            },
            confirm_password: {
                validators: {
                    notEmpty: {
                        message: 'Por favor confirme la contraseña ingresada'
                    },
                    identical: {
                        field: 'password',
                        message: 'Las contraseñas no coinciden entre si'
                    }
                }
            },
            tipo_id: {
                validators: {
                    notEmpty: {
                        message: 'Por favor escoja un tipo de identificación'
                    }
                }
            },
            identificacion: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese su número de identificación'
                    }
                }
            },
            fecha_nacimiento: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese su fecha de nacimiento'
                    },
                    date: {
					    message: 'El valor ingresado no es una fecha válida',
                        format: 'YYYY-MM-DD',
                        message: 'La fecha de nacimiento no puede ser mayor al día de hoy',
                        max: ($.datepicker.formatDate('yy-mm-dd', new Date())).toString()

				    }
                }
            },
            foto: {
                validators: {
                    file: {
                        extension: 'png,jpg,jpeg,svg',
                        message: 'Seleccione una imagen con alguno de los siguientes formatos (png, jpg, jpeg, svg) cuyo tamaño sea menor a 5MB',
                        maxSize: 5242880, // 5MB: http://www.beesky.com/newsite/bit_byte.htm
                    }
                }
            }
        });

//Revalidar campos al ser actualizados
    $("#id_fecha_nacimiento").on('change',function(e){
        $(form).formValidation('revalidateField', 'fecha_nacimiento');
    });
$.getScript(base+"js/validaciones/validations-base.js");