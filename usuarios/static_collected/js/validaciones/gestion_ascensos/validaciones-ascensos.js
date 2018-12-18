/**
 * Created by Diego Monsalve on 10/11/16.
 */

form = "#form-ascenso";
MENSAJE_REQUISITO = 'El campista debe cumplir con este requisito';

fields = {
    capacitacion: {
        validators: {
            notEmpty: {
                message: MENSAJE_REQUISITO
            }
        }
    },
    voluntariado: {
        validators: {
            notEmpty: {
                message: MENSAJE_REQUISITO
            }
        }
    },
    examen: {
        validators: {
            notEmpty: {
                message: MENSAJE_REQUISITO
            }
        }
    },
    permanencia: {
        validators: {
            notEmpty: {
                message: MENSAJE_REQUISITO
            }
        }
    },
    investigacion: {
        validators: {
            notEmpty: {
                message: MENSAJE_REQUISITO
            }
        }
    },
    proyecto: {
        validators: {
            notEmpty: {
                message: MENSAJE_REQUISITO
            }
        }
    },
    estudios: {
        validators: {
            notEmpty: {
                message: MENSAJE_REQUISITO
            }
        }
    },
    municipal: {
        validators: {
            notEmpty: {
                message: MENSAJE_REQUISITO
            }
        }
    },
    departamental: {
        validators: {
            notEmpty: {
                message: MENSAJE_REQUISITO
            }
        }
    },
    nacional: {
        validators: {
            notEmpty: {
                message: MENSAJE_REQUISITO
            }
        }
    },
    terreno: {
        validators: {
            notEmpty: {
                message: MENSAJE_REQUISITO
            }
        }
    }
};

$.getScript(base+"js/validaciones/validations-base.js");
