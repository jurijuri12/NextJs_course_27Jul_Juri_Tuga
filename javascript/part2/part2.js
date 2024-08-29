document.addEventListener('DOMContentLoaded', () => {
    const hamburg = document.querySelector('.hamburg');
    const closeIcon = document.querySelector('.close');
    const dropdown = document.querySelector('.dropdown');
    const navLinks = document.querySelector('.nav-container .links');

    hamburg.addEventListener('click', () => {
        dropdown.style.transform = 'translateY(0)';
        hamburg.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', () => {
        dropdown.style.transform = 'translateY(-500px)';
        closeIcon.style.display = 'none';
        hamburg.style.display = 'block';
    });
});

const texts = [
    "Developer",
    "Finance Specialist"
];

const speed = 110;
const textElement = document.querySelector('.typewriter-text');

let textIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 60);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;

document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
    } else {
        document.getElementById('popup').style.display = 'flex';
    }
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
});
