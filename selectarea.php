<?php

 include('bd.php');
 $id= $_POST["id"];
      $q="SELECT * FROM tareas WHERE id =$id";
     $r= mysqli_query($conex,$q);
     if(!$r){
         die('Error sentencia'.mysqli_error($conex));
     }
     $json=array();
  while ($row =mysqli_fetch_array($r)) {
    $json[]=array( 'nonbre'=>$row['nombre'],'descripcion'=>$row['descripcion'],'id'=>$row['id']);
}
$jsonstring=json_encode($json[0]);
echo $jsonstring;




  
        
       
        

?>