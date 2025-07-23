const toggleButton = document.getElementById('mobileMenu');

function toggleMenu() {
  const isOpen = toggleButton.src.includes('icon-hamburger.svg');
  
  toggleButton.src = isOpen 
    ? 'images/icon-close.svg' 
    : 'images/icon-hamburger.svg';
}


toggleButton.addEventListener('click', toggleMenu);