// 1. Menú Móvil (Solo funciona si el botón es visible en CSS)
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav-links');

if(menuBtn) {
    menuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });
}

// Cerrar menú al hacer clic en un enlace en móvil
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

// 2. Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-hidden').forEach((el) => observer.observe(el));

// 3. Navbar Active Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href').includes(current) && current !== "") {
             li.classList.add('active');
        }
    });
});