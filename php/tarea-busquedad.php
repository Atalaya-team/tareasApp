<?php
 
 include_once('db.php');

 $buscar=$_POST['buscar'];
 
 if (!empty($buscar)) {
     $q="SELECT * FROM tareas WHERE nombre LIKE '$search%'";
     
 }


  
        
       
        

?>