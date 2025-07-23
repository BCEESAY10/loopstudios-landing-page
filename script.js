const toggleButton = document.getElementById('mobileMenu');
const mobileNavbar = document.querySelector('.mobile-navbar');

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


toggleButton.addEventListener('click', toggleMenu);