$(document).ready(function() {
    $('#full').click(()=> {
        $('#fullproject').addClass('animate');
        $('#mobileprojet').removeClass('d-none animate');
        $('#webprojet').removeClass('d-none animate');
    });
    $('#web').click(()=> {
        $('#fullproject').removeClass('animate');
        $('#mobileprojet').addClass('d-none').removeClass('animate');
        $('#webprojet').removeClass('d-none').addClass('animate');
    });
      
    $('#mobile').click(()=> {
        $('#fullproject').removeClass('animate');
        $('#mobileprojet').removeClass('d-none').addClass('animate');
        $('#webprojet').addClass('d-none').removeClass('animate');
    });
});



