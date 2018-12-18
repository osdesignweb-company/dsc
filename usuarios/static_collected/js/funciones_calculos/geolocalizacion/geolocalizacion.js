/**
 * Created by yalilebs on 8/09/16.
 */
var autocomplete, infowindow, marker, map;


function initAutocomplete() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        posicionInicial = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }

    if(edicion) {
        map = new google.maps.Map(document.getElementById('map'), {
          center: posicionInicial,
          zoom: 15
        });
    }else {
        map = new google.maps.Map(document.getElementById('map'), {
          center: posicionInicial,
          zoom: 8
        });
    }

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('id_direccion'));
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('id_direccion')),
        {types: ['geocode']}
    );
    autocomplete.bindTo('bounds', map);

    infowindow = new google.maps.InfoWindow();
    marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });
    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
}

// [START region_fillform]
function fillInAddress() {
    // Get the place details from the autocomplete object.
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();

    console.log(place.address_components);

    document.getElementById(camposFormulario.latitud).value = place.geometry.location.lat();
    document.getElementById(camposFormulario.longitud).value = place.geometry.location.lng();



    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
    /*for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (camposFormulario[addressType]) {
        var valor = place.address_components[i][camposFormulario[addressType]];
        document.getElementById(addressType).value = valor;
      }
    }*/

    //Marcar en el mapa
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(15);  // Why 17? Because it looks good.
    }
    marker.setIcon(/** @type {google.maps.Icon} */({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }));
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open(map, marker);
}
      // [END region_fillform]
