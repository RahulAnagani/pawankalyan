document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('hearts-container');

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animation = `fall ${Math.random() * 5 + 3}s linear forwards`;
        container.appendChild(heart);

        // Remove the heart from the DOM after animation ends
        heart.addEventListener('animationend', () => {
            container.removeChild(heart);
        });
    }

    // Create hearts periodically
    setInterval(createHeart, 300);
});
