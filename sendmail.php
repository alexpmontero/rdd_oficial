<?php

// Contact form by 

$mensaje.= "\n--------------\n";
$mensaje.= "\nDe: ". $_POST['nombre'];
$mensaje.= "\nE-mail: ".$_POST['correo'];
$mensaje.= "\nTeléfono: ".$_POST['tel'];
$mensaje.= "\nAsunto: ".$_POST['asunto'];
$mensaje.= "\nComentarios: ".$_POST['comentarios'];


// $destino= "hello@joininglanguages.com";
$destino= "apemontero@hotmail.com";
$remitente = $_POST['correo'];
$asunto = "Mensaje enviado por: ".$_POST['nombre'];

mail($destino,$asunto,$mensaje,"FROM: $remitente");

print("Su mensaje ha sido enviado correctamente.");

?>