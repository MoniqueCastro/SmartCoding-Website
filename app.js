const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const link = document.querySelector(".nav-links li");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    console.log("click")
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});





