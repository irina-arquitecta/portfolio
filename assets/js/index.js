
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

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulate form submission
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...';

    setTimeout(function () {
        submitButton.innerHTML = '<i class="fas fa-check"></i> Mensagem Enviada!';

        // Reset form
        contactForm.reset();

        // Reset button after 3 seconds
        setTimeout(function () {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }, 3000);
    }, 1500);


    // Here you would typically send the form data to a server
    // using fetch() or XMLHttpRequest
});

// Portfolio item animation
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.querySelector('.portfolio-img').style.transform = 'scale(1.1)';
        this.querySelector('.portfolio-overlay').style.opacity = '1';
    });

    item.addEventListener('mouseleave', function () {
        this.querySelector('.portfolio-img').style.transform = 'scale(1)';
        this.querySelector('.portfolio-overlay').style.opacity = '0';
    });
});
