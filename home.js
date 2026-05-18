// ===== TYPING EFFECT =====
const typingText = document.querySelector(".highlight");

const words = [
    "Sourabh Chetan",
    "Full Stack Developer",
    "AI & ML Enthusiast",
    "MCA Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {
        typingText.textContent =
            currentWord.substring(0, charIndex--);
    } else {
        typingText.textContent =
            currentWord.substring(0, charIndex++);
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentWord.length) {
        speed = 1500;
        deleting = true;
    }

    else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===== FLOATING PROFILE IMAGE =====
const profileImage = document.querySelector(".photo img");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    profileImage.style.transform =
        `translate(${x}px, ${y}px) scale(1.03)`;

});


