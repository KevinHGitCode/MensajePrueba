document.getElementById("startButton").addEventListener("click", () => {
    // Realizar una solicitud al servidor
    fetch("process.php")
        .then(response => response.json())
        .then(data => {
            // Crear un nuevo toast dinámico
            const toastId = `toast-${Date.now()}`;
            const toastType = data.success ? "toast-success" : "toast-fail";
            const toastTitle = data.success ? "¡Éxito!" : "Error";
            const toastMessage = data.success
                ? "¡El proceso fue exitoso! 😃"
                : "El proceso falló. 😞";

            // Estructura del toast
            const toastHtml = `
                <div id="${toastId}" class="toast ${toastType} align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            <strong>${toastTitle}</strong>: ${toastMessage}
                        </div>
                        <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                </div>
            `;

            // Agregar el toast al contenedor
            const toastContainer = document.getElementById("toastContainer");
            toastContainer.insertAdjacentHTML("beforeend", toastHtml);

            // Mostrar el toast
            const toastElement = document.getElementById(toastId);
            const toast = new bootstrap.Toast(toastElement);
            toast.show();
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Hubo un problema con la solicitud.");
        });
});
