// MENU TOGGLE FUNCTIONALITY
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-icon'); // renamed from 'hamburger'
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // TYPING TEXT ANIMATION
    const typingElement = document.getElementById('typing');
    const words = ["CSE Student", "Web Developer", "UI/UX Designer", "Designer", "Tech Enthusiast"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = '';
    let currentLetters = '';
    let isDeleting = false;

    function type() {
        if (isDeleting) {
            currentLetters = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            currentLetters = currentWord.substring(0, letterIndex + 1);
            letterIndex++;
        }

        typingElement.innerHTML = currentLetters;

        let typeSpeed = 200;
        if (isDeleting) {
            typeSpeed /= 2;
        }

        if (!isDeleting && letterIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex++;
            if (wordIndex === words.length) {
                wordIndex = 0;
            }
            currentWord = words[wordIndex];
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    currentWord = words[wordIndex];
    type();
});
