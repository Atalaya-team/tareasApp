$(document).ready(function() {
  console.log("fuciona JQuery");
  let editar=false;

  $("#tarearesul").hide();
   listar();
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
                       
                       <li><a href="" ">${tarea.nonbre} </a>: ${tarea.descripcion}</li>
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
      id: $("#id").val(),
      name: $("#name").val(),
      descripcion: $("#descripcion").val()
    };

    let url= editar == false ? 'agtarea.php':'edtarea.php';

    $.post(url, postData, function(response) {
      listar();
      
      $("#tarea-form").trigger("reset");
    });
    e.preventDefault();
    
  });

  function listar() {
    $.get("listarTarea.php", 
      function (response) {
        
          let lista= JSON.parse(response);
          let plantilla ='';
          
          lista.forEach(tarea => {
            plantilla += `
                       <tr tid=${tarea.id}>
                       <td>${tarea.id}</td>
                       <td><a href="" class="item-t">${tarea.nonbre}</a></td>
                       <td>${tarea.descripcion}</td>
                       <td>
                       <button class=" borrar btn btn-danger">BORRAR</button>
                       </td>
                       </tr>
                      `;
            
          });
          $("#tareas").html(plantilla);
        editar= false;  
      }
    );
  }

  $(document).on('click','.borrar' ,function () {
   if (confirm('DESEA BORRAR LA TAREA')) {
    let elemento= $(this)[0].parentElement.parentElement;
    let id= $(elemento).attr('tid');
    
$.post("borrart.php", {id},
  function (response) {
        listar();
  }
);
     
   }
  });
  

  $(document).on('click','.item-t', function () {
    let elemento= $(this)[0].parentElement.parentElement;
    let id= $(elemento).attr('tid');
    $.post("selectarea.php", {id},
      function (response) {
        const tarea =JSON.parse(response)
          $('#name').val(tarea.nonbre);
          $('#descripcion').val(tarea.descripcion);
          $('#id').val(tarea.id);
          
          editar=true;
      }
    );
  });
  
});
