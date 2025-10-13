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

// Función para mejorar enlaces de Facebook en móviles
function mejorarEnlacesFacebook() {
    const enlacesFacebook = document.querySelectorAll('a[href*="facebook.com"]');
    
    enlacesFacebook.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            // Detectar si es un dispositivo móvil
            const esMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            if (esMobile) {
                e.preventDefault();
                const fbId = '100076123205310';
                
                // Intentar abrir la app de Facebook primero
                const appUrl = `fb://profile/${fbId}`;
                const webUrl = `https://facebook.com/profile.php?id=${fbId}`;
                
                // Crear un enlace temporal para intentar abrir la app
                const tempLink = document.createElement('a');
                tempLink.href = appUrl;
                tempLink.style.display = 'none';
                document.body.appendChild(tempLink);
                
                // Intentar abrir la app, si falla abrir en navegador
                setTimeout(() => {
                    window.open(webUrl, '_blank');
                    document.body.removeChild(tempLink);
                }, 500);
                
                tempLink.click();
            }
        });
    });
}

// Inicializar efectos cuando la página cargue
window.addEventListener('load', () => {
    crearParticulas();
    crearHojas();
    efectoBrillo();
    mejorarEnlacesFacebook();
});