$('#full').click(() => {
    $('#webprojet').fadeOut();
    $('#mobileprojet').fadeOut();
    $('#fullproject').fadeIn();
  });
  
  $('#web').click(() => {
    $('#fullproject').fadeOut();
    $('#mobileprojet').fadeOut();
    $('#webprojet').fadeIn();
  });
  
  $('#mobile').click(() => {
    $('#fullproject').fadeOut();
    $('#webprojet').fadeOut();
    $('#mobileprojet').fadeIn();
  });
  