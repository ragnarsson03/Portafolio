// Animaciones para el portafolio
document.addEventListener('DOMContentLoaded', function() {
    // Animación de entrada para secciones
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const sectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.classList.add('section-hidden');
        sectionObserver.observe(section);
    });
    
    // Animaciones para tarjetas de habilidades
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('skill-card-hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('skill-card-hover');
        });
    });
    
    // Animación para el hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('hero-visible');
        }, 300);
    }
});

// Juego de búsqueda
function iniciarJuegoBusqueda() {
    // Definir sections antes de usarlo
    const sections = document.querySelectorAll('section');
    
    // Crear un elemento oculto en una posición aleatoria
    const tesoroOculto = document.createElement('div');
    tesoroOculto.id = 'tesoro-oculto';
    tesoroOculto.style.position = 'absolute';
    tesoroOculto.style.width = '30px';
    tesoroOculto.style.height = '30px';
    tesoroOculto.style.cursor = 'pointer';
    tesoroOculto.style.zIndex = '1000';
    tesoroOculto.style.opacity = '0.1';
    tesoroOculto.style.borderRadius = '50%';
    tesoroOculto.style.backgroundColor = '#ff9900';
    
    // Posición aleatoria
    const randomSection = Math.floor(Math.random() * sections.length);
    const section = sections[randomSection];
    const sectionRect = section.getBoundingClientRect();
    
    const maxX = sectionRect.width - 30;
    const maxY = sectionRect.height - 30;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    tesoroOculto.style.left = `${randomX}px`;
    tesoroOculto.style.top = `${randomY}px`;
    
    section.style.position = 'relative';
    section.appendChild(tesoroOculto);
    
    // Evento al encontrar el tesoro
    tesoroOculto.addEventListener('click', function() {
        alert('¡Felicidades! Has encontrado el tesoro oculto. Eres un buen explorador.');
        this.remove();
    });
    
    // Pista en la consola
    console.log('Hay un tesoro oculto en alguna parte de esta página. ¿Puedes encontrarlo?');
}

// Iniciar el juego después de 5 segundos
setTimeout(iniciarJuegoBusqueda, 5000);


// Implementación de modo oscuro/claro
function configurarModoOscuro() {
    const botonModo = document.createElement('button');
    botonModo.id = 'modo-toggle';
    botonModo.innerHTML = '<i class="fas fa-moon"></i>';
    botonModo.title = 'Cambiar modo oscuro/claro';
    
    document.body.appendChild(botonModo);
    
    // Verificar preferencia guardada
    const modoOscuroGuardado = localStorage.getItem('modoOscuro') === 'true';
    
    if (modoOscuroGuardado) {
        document.body.classList.add('dark-mode');
        botonModo.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    botonModo.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const esModoOscuro = document.body.classList.contains('dark-mode');
        
        // Guardar preferencia
        localStorage.setItem('modoOscuro', esModoOscuro);
        
        // Cambiar icono
        if (esModoOscuro) {
            this.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            this.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}

configurarModoOscuro();