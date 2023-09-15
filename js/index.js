document.getElementById("learn-more").addEventListener("click", function() {
    alert("Thanks for your interest! Scroll down to explore my projects.");
});

const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

hamburgerMenu.addEventListener("click", function() {
    navLinks.classList.toggle("show");
});
