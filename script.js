// Hamburger Menu Toggle
const sideNav = document.getElementById('sideNav');
const openNav = document.getElementById('openNav');
const closeNav = document.getElementById('closeNav');

openNav.addEventListener('click', () => {
    sideNav.classList.add('active');
});

closeNav.addEventListener('click', () => {
    sideNav.classList.remove('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!sideNav.contains(e.target) && !openNav.contains(e.target)) {
        sideNav.classList.remove('active');
    }
});

// Smooth scroll for nav items
document.querySelectorAll('.nav-list a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
        sideNav.classList.remove('active');
    });
});

// Lightbox functionality
const qrImage = document.querySelector('.qr-image');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

qrImage.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = qrImage.src;
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('close-lightbox')) {
        lightbox.style.display = 'none';
    }
});

// Close lightbox with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        lightbox.style.display = 'none';
    }
});
