form = "#form-campista";
fields = {
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
            },
            email:{
              validators: {
                  notEmpty:{
                      message: 'Por favor ingrese un correo electrónico'
                  },
                  emailAddress: {
                      message: 'El valor ingresado no es un correo electrónico válido'
                  }
              }
            },
            nivel: {
                validators: {
                    notEmpty: {
                        message: 'Por favor escoja un nivel nacional'
                    }
                }
            },
            municipio: {
                validators: {
                    notEmpty: {
                        message: 'Por favor escoja un municipio'
                    }
                }
            },
            fecha_ingreso: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese una fecha de ingreso'
                    }
                }
            },
            numero_carne: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese un número de carné'
                    }
                }
            },
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
            archivo_identificacion: {
                validators: {
                    file: {
                        extension: 'png,jpg,jpeg,svg',
                        message: 'Seleccione un archivo con alguno de los siguientes formatos (png, jpg, jpeg, svg) cuyo tamaño sea menor a 5MB',
                        maxSize: 5242880 // 5MB: http://www.beesky.com/newsite/bit_byte.htm
                    },
                    notEmpty: {
                        message: 'Por favor escoja un archivo'
                    }
                }
            },
            institucion_educativa: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese una institución educativa'
                    }
                }
            },
            modalidad: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese una modalidad'
                    }
                }
            },
            grado: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese un grado/semestre'
                    }
                }
            },
            jornada: {
                validators: {
                    notEmpty: {
                        message: 'Por favor escoja una jornada'
                    }
                }
            },
            eps: {
                validators: {
                    notEmpty: {
                        message: 'Por favor escoja una EPS'
                    }
                }
            },
            tipo_sangre: {
                validators: {
                    notEmpty: {
                        message: 'Por favor escoja un tipo de sangre'
                    }
                }
            },
            talla: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese una talla'
                    }
                }
            },
            peso: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese un peso'
                    }
                }
            },
            enfermedades: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese sus enfermedades'
                    }
                }
            },
            alergias: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese sus alergias'
                    }
                }
            },
            tratamiento_medico: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese sus tratamientos medicos'
                    }
                }
            },
            archivo_documento_salud: {
                validators: {
                    file: {
                        extension: 'png,jpg,jpeg,svg',
                        message: 'Seleccione un archivo con alguno de los siguientes formatos (png, jpg, jpeg, svg) cuyo tamaño sea menor a 5MB',
                        maxSize: 5242880, // 5MB: http://www.beesky.com/newsite/bit_byte.htm
                    }
                }
            },
            identificacion_padre: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese la identificación del padre'
                    }
                }
            },
            nombres_padre: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese los nombres del padre'
                    }
                }
            },
            apellidos_padre: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese los apellidos del padre'
                    }
                }
            },
            nombres_madre: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese los nombres de la madre'
                    }
                }
            },
            identificacion_madre: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese la identificación de la madre'
                    }
                }
            },
            apellidos_madre: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese los apellidos de la madre'
                    }
                }
            }

        };

//Revalidar campos al ser actualizados
    $("#id_fecha_nacimiento").on('change',function(e){
        $(form).formValidation('revalidateField', 'fecha_nacimiento');
    });
    $("#id_fecha_ingreso").on('change',function(e){
        $(form).formValidation('revalidateField', 'fecha_ingreso');
    });
$.getScript(base+"js/validaciones/validations-base.js");