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