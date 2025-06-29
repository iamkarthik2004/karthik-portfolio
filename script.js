// MENU TOGGLE
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-icon');
    const navBar = document.querySelector('nav');

    menuBtn.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });

    // TYPING TEXT EFFECT
    const typing = document.getElementById('typing');
    const roles = ["CSE Student", "Web Developer", "UI/UX Designer", "Graphic Designer", "Tech Enthusiast"];
    
    let roleIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function typeEffect() {
        currentText = roles[roleIndex];
        
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typing.innerHTML = currentText.substring(0, charIndex);

        let speed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentText.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
});
