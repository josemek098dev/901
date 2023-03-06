

// Cargamos los archivos de sonido
const sonido1 = new Audio('sonido1.mp3');
const sonido2 = new Audio('sonido2.mp3');
const sonido3 = new Audio('sonido3.mp3');
const sonido4 = new Audio('sonido4.mp3');
const sonido5 = new Audio('sonido5.mp3');

// Función para reproducir el sonido correspondiente
function reproducirSonido(sonido) {
    sonido.currentTime = 0; // Reiniciamos el sonido si ya se estaba reproduciendo
    sonido.play();
}

// Asignamos la función a cada botón
document.getElementById('boton1').addEventListener('click', function() {
    reproducirSonido(sonido1);
});

document.getElementById('boton2').addEventListener('click', function() {
    reproducirSonido(sonido2);
});

document.getElementById('boton3').addEventListener('click', function() {
    reproducirSonido(sonido3);
});

document.getElementById('boton4').addEventListener('click', function() {
    reproducirSonido(sonido4);
});

document.getElementById('boton5').addEventListener('click', function() {
    reproducirSonido(sonido5);
});
