form = "#password-reset-change";

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
    old_password: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            }
        }
    },
    new_password1: {
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
        }

    },
    new_password2: {
        validators: {
            notEmpty: {
                message: MENSAJE_VACIO
            },
            identical: {
                field: 'new_password',
                message: 'Las contraseñas no coinciden entre si'
            }
        }
    }
};

$.getScript(base+"js/validaciones/validations-base.js");