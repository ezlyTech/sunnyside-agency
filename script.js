const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-mobile");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("activeMenu");
    navMenu.classList.toggle("activeMenu");
}