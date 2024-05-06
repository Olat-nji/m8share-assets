let lng = 0;
let lat = 0;

function initialize() {
  // initer();
  var input = document.getElementById('searchTextField');
  var options = {
    componentRestrictions: { country: 'gb' } // Restrict results to United Kingdom (GB)
    // types: ['geocode'] 
  };
  var autocomplete = new google.maps.places.Autocomplete(input, options);
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    var place = autocomplete.getPlace();
    let city = '';
    let street = '';
    let postcode = '';

    place.address_components.forEach((address) => {
      if (address.types.includes('postal_code')) {
        postcode = address.long_name;
      }

      if (address.types.includes('route')) {
        street = address.long_name;
      }

      if (address.types.includes('sublocality')) {
        city = address.long_name;
      }

      if (!city) {
        if (address.types.includes('locality')) {
          city = address.long_name;
        }
        if (address.types.includes('postal_town')) {
          city = address.long_name;
        }
      }
    });

    // if postcode is still an empty string, check for a subpostal_code
    if (!postcode) {
      place.address_components.forEach((address) => {
        if (address.types.includes('subpostal_code')) {
          postcode = address.long_name;
        }
      });
    }

    

    

   
    if (!postcode) {
      document.getElementById('latitude').value = '';
document.getElementById('longitude').value = '';

      new swal({
        title: "Please select a more specific address",
        icon: "error",
        dangerMode: true})

    }else{
      $('#address_text').text(place.formatted_address);
      document.getElementById('latitude').value = place.geometry.location.lat();
      lat = place.geometry.location.lat();
      document.getElementById('longitude').value = place.geometry.location.lng();
      lng = place.geometry.location.lng();

    Livewire.emit('step_1', {
      address: place.formatted_address
      , street: street
      , city: city
      , postal_code: postcode
      , latitude: place.geometry.location.lat()
      , longitude: place.geometry.location.lng()
    });

  }

    initMap();
  });
}

function initMap(latitude = null, longitude = null) {
  myLoc = {
    lat: latitude ? latitude : lat
    , lng: longitude ? longitude : lng
  };

  const map = new google.maps.Map(document.getElementById("map-container"), {
    center: myLoc
    , zoom: 18.9
    , mapTypeId: "satellite"
  });

  marker = new google.maps.Marker({
    map
    , draggable: true
    , position: myLoc
  });

  new google.maps.event.addListener(map, 'drag', function() {
    marker.setPosition(map.getCenter());
    lat = marker.getPosition().lat();
    lng = marker.getPosition().lng();
    
  });

  new google.maps.event.addListener(map, 'dragend', function() {
    Livewire.emit('step_2', {
      latitude: lat
      , longitude: lng
    });
  });

  map.setTilt(45);

  $('#map-container').show();
}

window.initMap = initMap;
