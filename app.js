$(document).ready(function () {
    console.log('fuciona JQuery');
     $('#tarearesul').hide();

     $('#buscar').keyup(function() {
      if($('#buscar').val()) {
        let buscar = $('#buscar').val();
        $.ajax({
          url: 'tareab.php',
          data: {buscar},
          type: 'POST',
          success: function (response) {
            if(!response.error) {
              let tareas =JSON.parse(response);
              let plantilla = '';
              tareas.forEach(tarea => {
                console.log(tarea);
                plantilla += `
                       <li><a href="#" ">${tarea.nonbre}</a></li>
                      ` 
              });
              $('#tarearesul').show();
              $('#contenedor').html(plantilla);
            }
          } 
        })
      }
      $('#tarearesul').hide();
    });







});