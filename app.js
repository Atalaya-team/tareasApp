$(document).ready(function() {
  console.log("fuciona JQuery");
  $("#tarearesul").hide();

  //busqueda tarea
  $("#buscar").keyup(function() {
    // capturamos el evento de tipado en el elemento con keyup
    if ($("#buscar").val()) {
      // coprobacion si esta vacio
      let buscar = $("#buscar").val(); // capturalos el valor en una variable
      $.ajax({
        // declaramos el ajax
        url: "tareab.php", // asignamos la ruta del servidor
        data: { buscar }, // peticion a enviar
        type: "POST", // metodo de envio
        success: function(response) {
          // buscam
          if (!response.error) {
            let tareas = JSON.parse(response);
            let plantilla = "";
            tareas.forEach(tarea => {
              console.log(tarea);
              plantilla += `
                       <li><a href="#" ">${tarea.nonbre}</a></li>
                      `;
            });
            $("#tarearesul").show();
            $("#contenedor").html(plantilla);
          }
        }
      });
    }
    $("#tarearesul").hide();
  });

  //agregar tarea
  $("#tarea-form").submit(function(e) {
    const postData = {
      name: $("#name").val(),
      descripcion: $("#descripcion").val()
    };
    $.post("agtarea.php", postData, function(response) {
      $("#tarea-form").trigger("reset");
    });
    e.preventDefault();
  });
});
