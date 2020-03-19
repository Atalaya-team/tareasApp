<?php
    
    $conex= mysqli_connect('localhost','root','','tareasbd');

    if ($conex) {
        echo 'BD Conectada ';
    }

?>