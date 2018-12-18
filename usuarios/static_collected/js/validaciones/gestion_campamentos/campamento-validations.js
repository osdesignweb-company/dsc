/**
 * Created by Diego Monsalve on 4/10/16.
 */

form = "#campamento-form";

function get_fecha_actual(){
    return ($.datepicker.formatDate('yy-mm-dd', new Date())).toString();
}

fields = {
    nombre: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            }
        }
    },
    tipo_campamento: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            }
        }
    },
    correo: {
        validators: {
            emailAddress: {
                message: MENSAJE_CORREO
            }
        }
    },
    creado_por: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            }
        }
    },
    nombre_lugar:{
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            }
        }
    },
    direccion: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            }
        }
    },
    nombre_lugar: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            }
        }
    },
    cupos: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            },
            integer: {
                message: "Por favor ingrese un valor entero"
            },
            greaterThan: {
                value: 1,
                message: "Por favor ingrese un valor mayor a cero"
            }
        }
    },
    video: {
        validators:{
            callback:{
                message: "Ingrese una url valida, por ejemplo https://www.youtube.com/watch?v=YYW7klRKl_g",
                callback: function(value, validator){
                    var re = value.match(/^https:\/\/(?:www\.)?youtube.com\/watch\?(?=.*v=\w+)(?:\S+)?$/);
                    return re != null || value =="" ? true : false;
                }
            }

        }
    },
    imagen: {
        validators: {
            file: {
                message: "Por favor seleccione un archivo de imagen jpg, jpeg, png, válido cuyo tamaño sea menor a 5mb",
                extension: "jpg,png,jpeg",
                type: "image/jpeg,image/png",
                maxSize: 5242880// 5MB: http://www.beesky.com/newsite/bit_byte.htm
            }
        }
    },
    municipio: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            }
        }
    },
    costo_entrada: {
        validators: {
            greaterThan: {
                value: 0,
                message: 'El costo de la entrada del campamento debe ser mayor a 0'
            }
        }
    },
    descripcion: {
        validators: {
            stringLength: {
                max: 500,
                message: 'La descripción no debe superar los 500 caracteres'
            }
        }
    },
    fecha_inicio: {
        validators: {
            notEmpty: {
                message: 'La fecha de inicio del campamento no puede ser vacía'
            },
            date: {
                message: 'El valor ingresado no es una fecha válida',
                format: 'YYYY-MM-DD'
            },
            callback:{
                message: "La fecha de inicio debe ser mayor o igual a la fecha actual y menor a la fecha de finalización",
                callback: function(value, validator){
                    var fecha_actual = new Date();
                    fecha_actual.setHours(0, 0, 0, 0);
                    var fecha_fin = new Date($("#id_fecha_fin input").val());
                    fecha_fin.setHours(0, 0, 0, 0);
                    fecha_fin.setDate(fecha_fin.getDate() + 1);
                    var fecha_inicio = new Date(value);
                    fecha_inicio.setHours(0, 0, 0, 0);
                    fecha_inicio.setDate(fecha_inicio.getDate() + 1);
                    if(fecha_inicio >= fecha_fin){
                        return false;
                    }
                    if(fecha_inicio < fecha_actual){
                        return false;
                    }
                    return true;
                }
            }
        }
    },
    fecha_fin: {
        validators: {
            notEmpty: {
                message: 'La fecha de finalización del campamento no puede ser vacía'
            },
            date: {
                message: 'El valor ingresado no es una fecha válida',
                format: 'YYYY-MM-DD',
                message: "La fecha de finalización no puede ser menor a la fecha de inicio",
                min: 'fecha_inicio'
            }
        }
    },
    fecha_inicio_preinscripcion: {
        validators: {
            notEmpty: {
                message: 'La fecha de inicio de la preinscripción del campamento no puede ser vacía'
            },
            date: {
                message: 'El valor ingresado no es una fecha válida',
                format: 'YYYY-MM-DD',
            },
            callback:{
                message: "La fecha de inicio de las preinscripciones debe ser mayor o igual a la fecha actual y menor a la fecha de finalización de las preinscripciones",
                callback: function(value, validator){
                    var fecha_actual = new Date();
                    fecha_actual.setHours(0, 0, 0, 0);
                    var fecha_fin = new Date($("#id_fecha_fin_preinscripcion input").val());
                    fecha_fin.setHours(0, 0, 0, 0);
                    fecha_fin.setDate(fecha_fin.getDate() + 1);
                    var fecha_inicio = new Date(value);
                    fecha_inicio.setHours(0, 0, 0, 0);
                    fecha_inicio.setDate(fecha_inicio.getDate() + 1);
                    if(fecha_inicio >= fecha_fin){
                        return false;
                    }
                    if(fecha_inicio < fecha_actual){
                        return false;
                    }
                    return true;
                }
            }
        }
    },
    fecha_fin_preinscripcion: {
        validators: {
            notEmpty: {
                message: 'La fecha de finalización de la preinscripción del campamento no puede ser vacía'
            },
            date: {
                message: 'El valor ingresado no es una fecha válida',
                format: 'YYYY-MM-DD',
            },
            callback:{
                message: "La fecha de finalización de las preinscripciones debe ser mayor a la fecha de inicio de las preinscripciones y menor a la fecha de inicio del campamento",
                callback: function(value, validator){
                    var fecha_inicio_preinscripcion = new Date($("#id_fecha_inicio_preinscripcion input").val());
                    fecha_inicio_preinscripcion.setHours(0, 0, 0, 0);
                    fecha_inicio_preinscripcion.setDate(fecha_inicio_preinscripcion.getDate() + 1);
                    var fecha_inicio_campamento = new Date($("#id_fecha_inicio input").val());
                    fecha_inicio_campamento.setHours(0, 0, 0, 0);
                    fecha_inicio_campamento.setDate(fecha_inicio_campamento.getDate() + 1);
                    var fecha_fin_preinscripcion = new Date(value);
                    fecha_fin_preinscripcion.setHours(0, 0, 0, 0);
                    fecha_fin_preinscripcion.setDate(fecha_fin_preinscripcion.getDate() + 1);
                    if(fecha_fin_preinscripcion <= fecha_inicio_preinscripcion){
                        return false;
                    }
                    if(fecha_fin_preinscripcion >= fecha_inicio_campamento){
                        return false;
                    }
                    return true;
                }
            }
        }
    }
};

var $form_campamento = $("#campamento-form");

$("#id_fecha_inicio").on('change',function(e){
    $form_campamento.formValidation('revalidateField', 'fecha_inicio');
    $form_campamento.formValidation('revalidateField', 'fecha_fin');
    $form_campamento.formValidation('revalidateField', 'fecha_inicio_preinscripcion');
    $form_campamento.formValidation('revalidateField', 'fecha_fin_preinscripcion');
});

$("#id_fecha_fin").on('change',function(e){
    $form_campamento.formValidation('revalidateField', 'fecha_inicio');
    $form_campamento.formValidation('revalidateField', 'fecha_fin');
    $form_campamento.formValidation('revalidateField', 'fecha_inicio_preinscripcion');
    $form_campamento.formValidation('revalidateField', 'fecha_fin_preinscripcion');
});

$("#id_fecha_inicio_preinscripcion").on('change',function(e){
    $form_campamento.formValidation('revalidateField', 'fecha_inicio_preinscripcion');
    $form_campamento.formValidation('revalidateField', 'fecha_fin_preinscripcion');
    $form_campamento.formValidation('revalidateField', 'fecha_inicio');
    $form_campamento.formValidation('revalidateField', 'fecha_fin');
});

$("#id_fecha_fin_preinscripcion").on('change',function(e){
    $form_campamento.formValidation('revalidateField', 'fecha_fin_preinscripcion');
    $form_campamento.formValidation('revalidateField', 'fecha_inicio_preinscripcion');
    $form_campamento.formValidation('revalidateField', 'fecha_inicio');
    $form_campamento.formValidation('revalidateField', 'fecha_fin');
});

$.getScript(base+"js/validaciones/validations-base.js");

