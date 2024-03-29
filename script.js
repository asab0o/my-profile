// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic year for the footer
    const yearSpan = document.querySelector('footer p');
    yearSpan.textContent = yearSpan.textContent.replace('2023', new Date().getFullYear());
});
