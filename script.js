// script.js
document.getElementById("startButton").addEventListener("click", () => {
    // Realizar una solicitud al servidor
    fetch("process.php")
        .then(response => response.json())
        .then(data => {
            // Mostrar ventana emergente con el resultado
            if (data.success) {
                alert("¡El proceso fue exitoso! 😃");
            } else {
                alert("El proceso falló. 😞");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Hubo un problema con la solicitud.");
        });
});
