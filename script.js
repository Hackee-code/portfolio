// Typing effect for the home section
const typingText = document.getElementById("typing");
const phrases = ["Web Developer", "Tech Enthusiast", "Lifelong Learner"];
let index = 0;
let charIndex = 0;

function type() {
    if (charIndex < phrases[index].length) {
        typingText.textContent += phrases[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(deleteText, 1000);
    }
}

function deleteText() {
    if (charIndex > 0) {
        typingText.textContent = phrases[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 100);
    } else {
        index = (index + 1) % phrases.length;
        setTimeout(type, 1000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});