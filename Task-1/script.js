// Header Background Color Change on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 200) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    } else {
        header.style.backgroundColor = '#000b3f';
    }
});

// Slider Logic
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = '0';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.opacity = '1';
    setTimeout(showSlides, 1800); // Change slide every 3 seconds
}
showSlides();

// Typing Effect for Hero Section
const typingText = document.getElementById('typing-text');
const phrases = ["Welcome to My Awesome Fun Zone!", "Play. Experience. Compete.", "Your Adventure Awaits!"];
let currentPhraseIndex = 0;
let currentCharacterIndex = 0;

function typePhrase() {
    const currentPhrase = phrases[currentPhraseIndex];
    typingText.textContent = currentPhrase.slice(0, currentCharacterIndex);

    if (currentCharacterIndex < currentPhrase.length) {
        currentCharacterIndex++;
        setTimeout(typePhrase, 100);
    } else {
        setTimeout(() => {
            currentCharacterIndex = 0;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            typePhrase();
        }, 2000);
    }
}
typePhrase();


// Function to check if an element is in the viewport
function isInViewport(feature) {
    const rect = feature.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.feature.clientHeight) &&
        rect.bottom >= 100
    );
}

// Function to handle scroll event and apply animations
function handleScroll() {
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        if (isInViewport(feature)) {
            feature.classList.add('visible');
        } else {
            feature.classList.remove('visible');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check in case elements are already in the viewport on load
document.addEventListener('DOMContentLoaded', handleScroll);



// Bending Effect for Feature Cards
document.querySelectorAll('.feature').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        
        const xCenter = rect.width / 2;
        const yCenter = rect.height / 2;
        
        const rotateX = (yCenter - y) / 10; // Adjust the divisor for sensitivity
        const rotateY = (xCenter - x) / 10; // Adjust the divisor for sensitivity
        
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateX(0) rotateY(0)`;
    });
});



document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        showAlert('Please fill in all fields.');
        return;
    }

    showAlert('Thank you for your message!');
    
    document.getElementById('contact-form').reset(); // Reset the form
});



function showAlert(message) {
    const alertBox = document.getElementById('custom-alert');
    document.getElementById('alert-message').innerText = message;
    alertBox.style.boxShadow = ' 0px 100px 1400px 800px rgba(0,0,0,0.75)';
    alertBox.style.display = 'block';
    
}

function closeAlert() {
    const alertBox = document.getElementById('custom-alert');
    alertBox.style.display = 'none';
}

