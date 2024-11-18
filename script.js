document.getElementById("startButton").addEventListener("click", () => {
    // Realizar una solicitud al servidor
    fetch("process.php")
        .then(response => response.json())
        .then(data => {
            // Crear un nuevo modal dinámico
            const modalId = `modal-${Date.now()}`;
            const modalType = data.success ? "modal-success" : "modal-fail";
            const modalTitle = data.success ? "¡Éxito!" : "Error";
            const modalMessage = data.success
                ? "¡El proceso fue exitoso! 😃"
                : "El proceso falló. 😞";

            // Estructura del modal
            const modalHtml = `
                <div class="modal fade ${modalType}" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}-label" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="${modalId}-label">${modalTitle}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ${modalMessage}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Agregar el modal al DOM
            document.body.insertAdjacentHTML("beforeend", modalHtml);

            // Mostrar el modal
            const modal = new bootstrap.Modal(document.getElementById(modalId));
            modal.show();
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Hubo un problema con la solicitud.");
        });
});
