<?php 

class auto{

 public $ruedas ="4";
 public $peso ='40';

 public function getrueda (){
  
    return $this -> ruedas;

 }
}

 $dina = new auto();

 echo  $dina -> getrueda();
?>