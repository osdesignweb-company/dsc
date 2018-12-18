/**
 * Created by Yalile Bermudes on 4/08/16.
 */
function initMap() {
    var posicionInicial =  posicion ;
    var myLatLng = {lat: posicionInicial[0], lng: posicionInicial[1] };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLatLng
    });

    var informacion = "";
    informacion += '\
            <div class="row">\
                <div class="col-sm-12 col-md-12">\
                    <b>Municipio:</b> '+municipio+'\
                </div>\
            </div>'
            +'<div class="row">\
                <div class="col-sm-12 col-md-12">\
                    <b>Dirección:</b> '+direccion+'\
                </div>\
            </div>'
            +'<div class="row">\
                <div class="col-sm-12 col-md-12">\
                    <b>Grupo:</b> '+grupo+'\
                </div>\
            </div>'

            +'<div class="row">\
                <div class="col-sm-12 col-md-12">\
                    <b>Tipo:</b> '+tipo_grupo+'\
                </div>\
            </div>'
            +'<div class="row">\
                <div class="col-sm-12 col-md-12">\
                    <b>Ámbito:</b> '+ambito+'\
                </div>\
            </div>';

    var ventana = new google.maps.InfoWindow({
        content:
                '<div class="col-md-4">\
                    <img src="'+foto+'" alt="imagen" style="width:100%;height:100%">\
                </div>\
                <div class="col-md-8">\
                    '+informacion+'\
                </div>'
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: municipio
    });

    marker.addListener('click', function() {
        ventana.open(map, marker);
    });
}