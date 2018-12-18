form = "#form-actividad";

$.getScript(base+"plugins/moment/moment.min.js");
fields = {
    titulo: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            }
        }
    },
    descripcion: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            }
        }
    },
    dia_actividad: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            },
            date: {
                message: 'El valor ingresado no es una fecha válida',
                format: 'YYYY-MM-DD'
            },
            callback:{
                message: "El valor ingresado debe estar entre las fechas del campamento: "+fecha_in+" - "+fecha_fn,
                callback: function(field, validator){
                    var momento = new moment(field, 'YYYY-MM-DD', true);
                    if (!momento.isValid()) {
                        return false;
                    }
                    return (momento.isSame(fecha_in) || momento.isAfter(fecha_in)) && (momento.isSame(fecha_fn) || momento.isBefore(fecha_fn));
                }
            }
        }
    },
    hora_inicio: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            }
        }
    },
    hora_fin: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            },
            callback:{
                message: "El valor ingresado no es una hora válida, debe ser mayor a la hora de inicio",
                callback: function(field, validator){
                    var inicio = $("input#id_hora_inicio").val();
                    var momento = new moment(field, 'HH:mm', true);
                    var momentInit = new moment(inicio, 'HH:mm', true);
                    if (!momento.isValid()) {
                        return false;
                    }
                    return momento.isAfter(momentInit);
                }
            }
        }
    }
};

$form_e = $(form);

//Revalidar campos al ser actualizados
$("#id_dia_actividad").on('change',function(e){
    $form_e.formValidation('revalidateField', 'dia_actividad');
});
$("#id_hora_inicio").on('change',function(e){
    $form_e.formValidation('revalidateField', 'hora_inicio');
    $form_e.formValidation('revalidateField', 'hora_fin');
});
$("#id_hora_fin").on('change',function(e){
    $form_e.formValidation('revalidateField', 'hora_inicio');
    $form_e.formValidation('revalidateField', 'hora_fin');
});

$.getScript(base+"js/validaciones/validations-base.js");