const toggleButton = document.getElementById('mobileMenu');
const mobileNavbar = document.querySelector('.mobile-navbar');
const navbar = document.querySelector(".navbar");
const navItems = document.querySelectorAll('ul li a');

function toggleMenu() {
  const isOpen = toggleButton.src.includes('icon-hamburger.svg');
  
  toggleButton.src = isOpen 
    ? 'images/icon-close.svg' 
    : 'images/icon-hamburger.svg';

  if(isOpen){
    mobileNavbar.style.opacity = '1';
  } else{
    mobileNavbar.style.opacity = '0';
  }
}

function hideMenu(){
    toggleMenu();
}

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const threshold = window.innerHeight; 

  if (scrollY > threshold) {
    navbar.style.backgroundColor = "#000";  
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});


navItems.forEach(item => {
    item.addEventListener('click', hideMenu);
});
toggleButton.addEventListener('click', toggleMenu);