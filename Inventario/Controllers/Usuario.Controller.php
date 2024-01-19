<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}

require_once('../Models/Usuario.model.php');
$stocks = new Clase_Usuario;
switch ($_GET["op"]) {

    case "login":
        $correo = $_POST["correo"]; //defino una variable para almacenar el id del usuario, la variable se obtiene mediante POST
        $contrasenia = $_POST["contrasenia"];
        $datos = array(); //defino un arreglo
        $datos = $stocks->login($correo, $contrasenia); //llamo al modelo de usuarios e invoco al procedimiento uno y almaceno en una variable
        $uno = mysqli_fetch_assoc($datos); //recorro el arreglo de datos
        echo json_encode($uno); //devuelvo el arreglo en formato json
        break;
}
