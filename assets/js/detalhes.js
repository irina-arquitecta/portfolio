// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Back to top button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

backToTopButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Gallery lightbox functionality
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function () {
        // In a real implementation, you would open a lightbox here
        // This is just a placeholder for the functionality
        console.log('Opening image in lightbox');
    });
});

// Image hover effects
const projectImages = document.querySelectorAll('.project-image img');

projectImages.forEach(img => {
    img.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.03)';
    });

    img.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});