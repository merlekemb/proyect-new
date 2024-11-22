function mostrarPassword() {
    let input = document.getElementById('claveF');
    if (input.type === 'password') {
        input.type = 'text';  // Cambiar el tipo a texto para mostrar la contraseña
    } else {
        input.type = 'password';  // Volver a ocultar la contraseña
    }
}

function mostrarPassword2() {
    let input = document.getElementById('claveCorreo');
    if (input.type === 'password') {
        input.type = 'text';  // Cambiar el tipo a texto para mostrar la contraseña
    } else {
        input.type = 'password';  // Volver a ocultar la contraseña
    }
}