<?php
 require 'conexion.php';
  
 $id = $_POST['idname']
 $FirstName  = $_POST['fname'];
 $LastName  = $_POST['lname'];
 $Email = $_POST['email'];
 $Phone = $_POST['phone'];
 $Message = $_POST['message'];

$insertar = "INSERT INTO usuarios VALUES ('$ID','$FirstName','$LastName''$Email','$Phone','$Message') ";

$query = mysqli_query($conectar, $insertar);

if($query){

   echo "<script> alert('correcto');
    location.href = '../indexxo.html';
   </script>";

}else{
    echo "<script> alert('incorrecto');
    location.href = '../indexxo.html';
    </script>";
}






?>