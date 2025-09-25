// Crear partículas mágicas
function crearParticulas() {
    const contenedor = document.getElementById('particulas');
    const numParticulas = 50;
    
    for (let i = 0; i < numParticulas; i++) {
        const particula = document.createElement('div');
        particula.classList.add('particula');
        
        // Tamaño aleatorio
        const tamaño = Math.random() * 5 + 2;
        particula.style.width = `${tamaño}px`;
        particula.style.height = `${tamaño}px`;
        
        // Posición inicial aleatoria
        particula.style.left = `${Math.random() * 100}vw`;
        
        // Duración de animación aleatoria
        const duracion = Math.random() * 10 + 5;
        particula.style.animationDuration = `${duracion}s`;
        
        // Retardo aleatorio
        particula.style.animationDelay = `${Math.random() * 5}s`;
        
        contenedor.appendChild(particula);
    }
}

// Crear hojas flotantes
function crearHojas() {
    const contenedor = document.getElementById('hojas');
    const numHojas = 15;
    
    for (let i = 0; i < numHojas; i++) {
        const hoja = document.createElement('div');
        hoja.classList.add('hoja');
        
        // Posición inicial aleatoria
        hoja.style.left = `${Math.random() * 100}vw`;
        
        // Duración de animación aleatoria
        const duracion = Math.random() * 10 + 15;
        hoja.style.animationDuration = `${duracion}s`;
        
        // Retardo aleatorio
        hoja.style.animationDelay = `${Math.random() * 10}s`;
        
        contenedor.appendChild(hoja);
    }
}

// Suavizar el scroll al hacer clic en los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Efecto de brillo aleatorio en elementos
function efectoBrillo() {
    const elementos = document.querySelectorAll('.producto, .btn');
    
    elementos.forEach(elemento => {
        setInterval(() => {
            elemento.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px rgba(212, 175, 55, ${Math.random() * 0.3 + 0.2})`;
        }, 2000);
    });
}

// Inicializar efectos cuando la página cargue
window.addEventListener('load', () => {
    crearParticulas();
    crearHojas();
    efectoBrillo();
});