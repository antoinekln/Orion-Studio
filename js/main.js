// Reveal elements on scroll
const revealOnScroll = () => {
    const revealElements = document.querySelectorAll('[data-reveal]');
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 50;
        
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
};

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
