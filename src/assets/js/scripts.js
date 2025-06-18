document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const name = form.querySelector('input[name="name"]');
            const email = form.querySelector('input[name="email"]');
            if (!name.value || !email.value) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    }

    // Image gallery animation
    const images = document.querySelectorAll('.gallery img');
    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        image.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});