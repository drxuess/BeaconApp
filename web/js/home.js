(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

function searchArea(){
  var postCode = $("#postcode").val()
  window.location.href = "/fireinfo?postcode=" + postCode
}

function registerNumber(){
  var number = $('#number').val()
  var postcode = $('#postcode').val()
  window.location.href = "/register?number=" + number + "&postcode=" + postcode
}

function renderMap() {
  var location =  {lat: parseFloat($('#latitude').val()), lng: parseFloat($('#longitude').val())}
  var fire = {lat: parseFloat($('#flatitude').val()), lng: parseFloat($('#flongitude').val())}

  var bounds = new google.maps.LatLngBounds()
  var mapOptions = {
      mapTypeId: google.maps.MapTypeId.HYBRID,
      optimized: false,
      disableDefaultUI: true
  }
  bounds.extend(location)
  bounds.extend(fire)
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  var marker = new google.maps.Marker({
    position: fire,
    map: map,
    title: 'Fire',
    status: 'active',
    optimized: false
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'You',
    status: 'active',
    optimized: false
  });
  map.fitBounds(bounds)
  map.panToBounds(bounds)
}