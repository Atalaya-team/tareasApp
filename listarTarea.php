<?php

include('bd.php');

$q="SELECT * FROM tareas";
$r= mysqli_query($conex,$q);

if (!$r) {
   die('Error de sentencia');
}
$json=array();

while ($row=mysqli_fetch_array($r)) {
    $json[]=array( 'nonbre'=>$row['nombre'],'descripcion'=>$row['descripcion'],'id'=>$row['id']);
}
$jsonstring=json_encode($json);
echo $jsonstring;

?>