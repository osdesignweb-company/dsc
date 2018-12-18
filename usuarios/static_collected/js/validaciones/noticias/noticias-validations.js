form = "#form-noticia";

var init_date;
fields = {
    titulo: {
        validators: {
            notEmpty: {
                message: "El título de la noticia no puede ser vacío"
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
    cuerpo_noticia: {
        validators: {
            notEmpty: {
                message: "El cuerpo de la noticia no puede ser vacío"
            },
            stringLength:{
                message: "El tamaño del cuerpo de la noticia debe ser menor a 3 MB",
                max: 3000000
            }
        }
    },
    foto: {
        validators: {
            file: {
                extension: 'jpeg,jpg,png,svg',
                maxSize: 5242880,
                message: 'Seleccione una imagen con alguno de los siguientes formatos (png, jpg, jpeg, svg) y con tamaño menor a 5MB'
            }
        }
    },
    fecha_inicio: {
        validators: {
            notEmpty: {
                message: 'La fecha de inicio de la noticia no puede ser vacía'
            },
            date: {
                message: 'El valor ingresado debe ser mayor o igual que hoy y menor que la fecha de expiración',
                format: 'YYYY-MM-DD',
                max: 'fecha_expiracion',
                min: ($.datepicker.formatDate('yy-mm-dd', new Date())).toString()
            }
        }
    },
    fecha_expiracion: {
        validators: {
            notEmpty: {
                message: 'La fecha de finalización de la noticia no puede ser vacía'
            },
            date: {
                message: 'La fecha de finalización debe ser mayor a la de inicio',
                format: 'YYYY-MM-DD',
                min: 'fecha_inicio'
            }
        }
    }
};

var form = $("#form-noticia");

//Revalidar campos al ser actualizados
$("#id_fecha_inicio").on('change',function(e){
    form.formValidation('revalidateField', 'fecha_expiracion');
    form.formValidation('revalidateField', 'fecha_inicio');

});

$("#id_fecha_expiracion").on('change',function(e){
    form.formValidation('revalidateField', 'fecha_expiracion');
    form.formValidation('revalidateField', 'fecha_inicio');
});


$.getScript(base+"js/validaciones/validations-base.js");


$(document).ready(function(){
    init_date = $("input#id_fecha_inicio").val();
    $("#id_cuerpo_noticia")
        .ckeditor({
            language: 'es'
        })
            .editor
                // To use the 'change' event, use CKEditor 4.2 or later
                .on('change', function(evt) {
                    // Revalidate the bio field
                    $('#form-noticia').bootstrapValidator('revalidateField', 'cuerpo_noticia');
                    CKEDITOR.instances.id_cuerpo_noticia.updateElement();
                    var str = CKEDITOR.instances.id_cuerpo_noticia.document.getBody().getText();
                    var $prev = $("#previsualizacion");
                    if(str.length <= 150){
                        $prev.val(str);
                    }else {
                        $prev.val(str.substring(0, 150));
                    }
                });
});