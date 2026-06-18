<?php

$servidorname = "localhost";
$nomeusuario = "root";
$senha = "";
$nomedobanco = "onefit";

$conn = new mysqli($servidorname, $nomeusuario, $senha, $nomedobanco);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

?>