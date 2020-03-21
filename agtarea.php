<?php
include('bd.php');

if (isset($_POST['name'])) {
    $name= $_POST['name'];
    $descripcion= $_POST['descripcion'];
    $q="INSERT into tareas(nombre,descripcion) VALUES ('$name','$descripcion')";
    $r= mysqli_query($conex,$q);
    if (!$r) {
        die('Error de sentencia');
    }
  echo "Tarea Agregada Satisfactoriamente";
}


?>