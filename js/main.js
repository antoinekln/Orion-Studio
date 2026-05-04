// Reveal elements on scroll
const revealOnScroll = () => {
    const revealElements = document.querySelectorAll('[data-reveal]');
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
};

// Navbar scroll effect
const handleNavbar = () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
        
        // Detect if we are over a light section
        const lightSection = document.querySelector('.section-light');
        if (lightSection) {
            const rect = lightSection.getBoundingClientRect();
            if (rect.top <= 80 && rect.bottom >= 80) {
                nav.classList.add('light-nav');
            } else {
                nav.classList.remove('light-nav');
            }
        }
    } else {
        nav.classList.remove('scrolled');
        nav.classList.remove('light-nav');
    }
};

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    revealOnScroll();
    handleNavbar();
});

window.addEventListener('load', () => {
    revealOnScroll();
    handleNavbar();
});
