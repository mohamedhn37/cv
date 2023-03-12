$(document).ready(function() {
    $('#navbar-toggler').click(function(){
        $('#navbarNav').addClass('d-none');
    });

    $('#full').click(function(){
      $('#fullproject').addClass('animate');
      $('#mobileprojet').removeClass('d-none animate');
      $('#webprojet').removeClass('d-none animate');
    });
    $('#web').click(function(){
      $('#fullproject').removeClass('animate');
      $('#mobileprojet').addClass('d-none').removeClass('animate');
      $('#webprojet').removeClass('d-none').addClass('animate');
    });
    $('#mobile').click(function(){
      $('#fullproject').removeClass('animate');
      $('#mobileprojet').removeClass('d-none').addClass('animate');
      $('#webprojet').addClass('d-none').removeClass('animate');
    });
});
  