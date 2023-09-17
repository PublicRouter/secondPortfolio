document.getElementById("learn-more").addEventListener("click", function () {
    alert("Thanks for your interest! Scroll down to explore my projects.");
});

const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

hamburgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

let projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(function (card) {
    let button = card.querySelector('button');
    let image = card.querySelector('img');

    button.addEventListener('mouseover', function () {
        image.style.borderColor = '#6729969c'; // Desired hover color
    });

    button.addEventListener('mouseout', function () {
        image.style.borderColor = '#f19813'; // Reset to initial color
    });
});

//listen for the hashchange event and then adjust the scroll position of the page accordingly
window.addEventListener('hashchange', function () {
    const targetElement = document.getElementById(location.hash.substring(1));

    if (targetElement) {
        const viewportHeight = window.innerHeight;
        const elementTop = targetElement.getBoundingClientRect().top;

        // Calculate the scroll position to center the target element
        const scrollPosition = window.scrollY + elementTop - (viewportHeight / 2) + (targetElement.offsetHeight / 2);
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
});

// prevent the default behavior of jumping immediately to the target section
document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Manually set the URL hash without triggering the default jump
        history.pushState(null, null, link.href);
        window.dispatchEvent(new HashChangeEvent('hashchange'));
    });
});

//typewriter animation
const typedTextSpan = document.getElementById("typed-text");
const phrases = ["Software Developer", "Web Developer", "Tech Enthusiast"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    if (charIndex < phrases[phraseIndex].length && !isDeleting) {
        typedTextSpan.textContent += phrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 200);
    } else if (isDeleting && charIndex > 0) {
        typedTextSpan.textContent = typedTextSpan.textContent.slice(0, charIndex - 1);
        charIndex--;
        setTimeout(type, 100);
    } else if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);  // Adding a pause before starting to type again
    } else {
        isDeleting = true;
        setTimeout(type, 2000);  // Wait a second before starting to delete
    }
}

type();

//skills rotater
function rotateSkills() {
    const container = document.getElementById('skills-badge-container');
    const lastSkill = container.lastChild;

    // Insert the last child to the beginning, effectively moving it to the first position
    container.insertBefore(lastSkill, container.firstChild);
}

// Call rotateSkills every 5 seconds
setInterval(rotateSkills, 2000);












