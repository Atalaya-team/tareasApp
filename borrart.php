<?php

include ('bd.php');

if (isset($_POST['id'])) {
    $id = $_POST['id'];

    $q="DELETE FROM tareas WHERE id= $id ";
    $r=mysqli_query($conex,$q);
    if (!$r) {
        die('Error de sentencia');
     }
echo'tarea borrada';
}




?>