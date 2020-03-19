$(function() {

    $("#buscar").keyup(function(e) {
    let buscar = $("#buscar").val();
    $.ajax({
        type: 'POST',
        url: '../php/tarea-busquedad.php',
        data: {buscar},
        success: function (response) {
         console.log(response);   
        }
    });
  });

});