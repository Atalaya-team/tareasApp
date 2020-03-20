$(document).ready(function () {
    console.log('fuciona JQuery');
    

    $('#buscar').keyup(function() {
        if($('#buscar').val()) {
          let buscar = $('#buscar').val();
          $.ajax({
            url: 'tareab.php',
            data: {buscar:buscar},
            type: 'POST',
            success: function (response) {
         console.log(response);
            } 
          })
        }
      });







});