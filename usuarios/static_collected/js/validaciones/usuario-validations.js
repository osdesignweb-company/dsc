/**
 * Created by Diego Monsalve on 3/10/16.
 */

form = "#usuario-form";

function getPasswordStrength(H){
    var D=(H.length);
    if(D>5){
        D=5
    }
    var F=H.replace(/[0-9]/g,"");
    var G=(H.length-F.length);
    if(G>3){G=3}
    var A=H.replace(/\W/g,"");
    var C=(H.length-A.length);
    if(C>3){C=3}
    var B=H.replace(/[A-Z]/g,"");
    var I=(H.length-B.length);
    if(I>3){I=3}
    var E=((D*10)-20)+(G*10)+(C*15)+(I*10);
    if(E<0){E=0}
    if(E>100){E=100}
    return E
}

fields = {
    username: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
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
                message: MENSAJE_VACIO
            },
            callback: {
                message: "La contraseña no es segura. Utilice una combinación de letras, números y/o símbolos.",
                callback: function(field, validator){
                    if(field==""){
                        return true;
                    }
                    var $div = $("#passwordStrengthDiv");
                    var strength = getPasswordStrength(field);
                    return strength >= 50;
                }

            }
        },
        identical: {
            field: 'confirm_password',
            message: 'Las contraseñas no coinciden entre si'
        },
    },
    confirm_password: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            },
            identical: {
                field: 'password',
                message: 'Las contraseñas no coinciden entre si'
            }
        }
    },
    email: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            },
            emailAddress: {
                message: MENSAJE_CORREO
            }
        }
    },
    tipo_id: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            }
        }
    },
    identificacion: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            }
        }
    },
    first_name: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            }
        }
    },
    last_name: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            }
        }
    },
    fecha_nacimiento: {
        validators: {
            date: {
                message: 'El valor ingresado no es una fecha válida, debe ser menor a la fecha actual',
                format: 'YYYY-MM-DD',
                max: function (field, validator) {
                    var d = new Date();
                    var curr_date = d.getDate();
                    var curr_month = d.getMonth() + 1;
                    var curr_year = d.getFullYear();
                    return curr_year + "-" + curr_month + "-" + curr_date;
                }
            }
        }
    },
    genero: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            }
        }
    },
    foto: {
        validators: {
            file: {
                message: "Por favor seleccione un archivo de imagen jpg, jpeg, png, válido cuyo tamaño sea menor a 5mb",
                extension: "jpg,png,jpeg",
                type: "image/jpeg,image/png",
                maxSize: 5242880// 5MB: http://www.beesky.com/newsite/bit_byte.htm
            }
        }
    }
};

$("#id_fecha_nacimiento").on('change',function(e){
    $("#usuario-form").bootstrapValidator('revalidateField', 'fecha_nacimiento');
});
$.getScript(base+"js/validaciones/validations-base.js");