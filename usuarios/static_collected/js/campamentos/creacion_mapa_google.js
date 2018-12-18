/**
 * Created by Yalile Bermudes on 9/09/16.
 */

var datosMostrar = datos_Mostrar;
var posicionInicial = posicion_Inicial;


function informacion(ventana ,marker, map){
    marker.addListener('click', function() {
        ventana.open(map, marker);
    });
}

function initMap() {
    var myLatLng = {lat: posicionInicial[0], lng: posicionInicial[1] };
    var map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 8,
        center: myLatLng
    });
    for (i in datosMostrar) {
        var datos = datosMostrar[i];
        console.log(datos);


        var descripcion = "";
        var posicion = datos[0];
        descripcion += '\
            <div class="row">\
                <div class="col-sm-12 col-md-12">\
                    <b>Municipio:</b> ' + datos[3] + '\
                </div>\
            </div>'
            + '<div class="row">\
                <div class="col-sm-12 col-md-12">\
                    <b>Dirección:</b> ' + datos[4] + '\
                </div>\
            </div>'
            + '<div class="row">\
                <div class="col-sm-12 col-md-12">\
                    <b>Grupo:</b> ' + datos[1] + '\
                </div>\
            </div>'

            + '<div class="row">\
                <div class="col-sm-12 col-md-12">\
                    <b>Tipo:</b> ' + datos[2] + '\
                </div>\
            </div>'
            + '<div class="row">\
                <div class="col-sm-12 col-md-12">\
                    <b>Ámbito:</b> ' + datos[5] + '\
                </div>\
            </div>';

        var ventana = new google.maps.InfoWindow({
            content: ' <div class="col-md-12">\
                    ' + descripcion + '\
                </div>'
        });

        var marker = new google.maps.Marker({
            position: {lat: posicion[0], lng:posicion[1]},
            map: map,
            title: datos[1]
        });

        informacion(ventana, marker, map);
    }
}