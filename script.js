/*function toggleMenu() {
  const menu = document.querySelector (".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
/*
const hamburger = document.querySelector('.hamburger-icon');
const menuLinks = document.querySelector('.menu-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');  // animate hamburger icon
  menuLinks.classList.toggle('open');  // open/close menu links
});*/

// Function for hamburger icon click (should NOT be changed)
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.remove('instant-close'); 
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Link Click Handler (The Fix for Navigation)
document.querySelectorAll('#hamburger-nav .menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        
        if (menu.classList.contains('open')) {
             // 1. Apply instant close class
             menu.classList.add('instant-close');
        }

        // 2. Schedule the closure immediately after the click registers
        setTimeout(() => {
            if (menu.classList.contains('open')) {
                 menu.classList.remove("open");
                 icon.classList.remove("open");
                 // Crucial: Remove the instant-close class after the closure
                 menu.classList.remove('instant-close');
            }
        }, 0); 
    });
});