// Frases románticas personalizadas
const frases = [
    "🌷 Mi amor, eres mi guía hacia un mejor camino.",
    "💖 Tu sonrisa hermosa ilumina mis días.",
    "✨ Tu carisma y encanto hacen mi vida especial.",
    "🌸 Eres mi dirección, mi norte, mi paz.",
    "💫 Gracias por ser tan maravillosa conmigo.",
    "🥰 Tu personalidad agradable enamora cada instante.",
    "🌺 Eres la mujer que me inspira a ser mejor.",
    "💞 ¡Feliz Día de la Mujer, mi vida!",
    "💗 Te amo más de lo que las nubes pueden expresar."
];

const boton = document.getElementById('botonMagico');
const contenedorNubes = document.getElementById('nubesMensaje');

function mostrarNubes() {
    contenedorNubes.innerHTML = '';
    frases.forEach(frase => {
        const nube = document.createElement('div');
        nube.classList.add('nube');
        nube.textContent = frase;
        contenedorNubes.appendChild(nube);
    });
    contenedorNubes.style.display = 'flex';
}

boton.addEventListener('click', mostrarNubes);