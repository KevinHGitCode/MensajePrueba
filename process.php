<?php
// process.php
header('Content-Type: application/json');

// Generar aleatoriamente true o false
$result = (bool) random_int(0, 1);

// Retornar el resultado en formato JSON
echo json_encode(["success" => $result]);
?>
