<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Experimento - Toast</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .toast-success {
            border-left: 5px solid #198754; /* Verde para éxito */
        }
        .toast-fail {
            border-left: 5px solid #dc3545; /* Rojo para fallo */
        }
        .toast-container {
            position: fixed;
            top: 1rem;
            right: 1rem;
            z-index: 1050;
        }
    </style>
</head>
<body>
    <div class="container mt-5 text-center">
        <h1>Mini Experimento - Toast</h1>
        <button id="startButton" class="btn btn-primary mt-4">Presionar</button>
    </div>

    <!-- Contenedor de Toasts -->
    <div id="toastContainer" class="toast-container"></div>

    <!-- Bootstrap JS + Popper.js -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
