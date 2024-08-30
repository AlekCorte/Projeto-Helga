// script.js
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.scroll-container');

    window.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            container.scrollBy({ left: 200, behavior: 'smooth' });
        } else if (event.key === 'ArrowLeft') {
            container.scrollBy({ left: -200, behavior: 'smooth' });
        }
    });

});