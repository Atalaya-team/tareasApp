<?php
    
//CREACION DEL OBJETO CONEXION

    class conexion {

        function conectar(){
        $host="mysql:host=localhost";
        $db="dbname=tareasbd";
        $user="root";
        $pass="";
            try {				    	
         $conex= new PDO($host.";".$db,$user,$pass);					    
         $conex->exec("SET CHARACTER SET utf8");
         
         } catch (Exception $e) {
            echo 'error en la conexion';
                     
                 }
                 return $conex;
        }
    }

//DECLARACION DEL OBJETO CONEXION    
$con = new conexion();
        $conex     = $con->conectar();


?>