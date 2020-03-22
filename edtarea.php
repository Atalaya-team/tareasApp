<?php
include('bd.php');


    $id= $_POST['id'];
    $name= $_POST['name'];
    $descripcion= $_POST['descripcion'];
    $q="UPDATE  tareas SET nombre = '$name' ,descripcion = '$descripcion' WHERE id =$id " ;
    $r= mysqli_query($conex,$q);
    if (!$r) {
        die('Error de sentencia');
    }
  echo "Tarea editada Satisfactoriamente";



?>