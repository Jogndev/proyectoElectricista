function submitForm() {
    // Obtener los valores del formulario
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Validar que los campos no estén vacíos
    if (name === "" || email === "" || message === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Construir el objeto de datos a enviar al servidor
    var formData = {
        name: name,
        email: email,
        message: message
    };

    // Realizar la solicitud al servidor backend
    fetch('/enviar-formulario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Mostrar una alerta de éxito basada en la respuesta del servidor
        alert(data.message);

        // Limpiar el formulario después del envío (opcional)
        document.getElementById("contactForm").reset();
    })
    .catch(error => {
        console.error('Error al enviar el formulario:', error);
        alert('Error al enviar el formulario');
    });
}