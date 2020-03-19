<?php
 
 include('db.php');

 $buscar=$_POST['buscar'];
 
 if (!empty($buscar)) {
     $q="SELECT * FROM tareas WHERE nombre LIKE '$search%'";
     $r= mysqli_query($conex,$q);
     if(!$r){
         die('Error sentencia'.mysqli_error($conex));
     }
     $json=array();
  while ($row =mysqli_fetch_array($r)) {
     
  }

 }


  
        
       
        

?>