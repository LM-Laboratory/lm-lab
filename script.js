window.addEventListener('load', function() {
  var nav = document.querySelector('nav');
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});

const button = document.querySelector('.square-button');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    button.classList.add('visible');
  } else {
    button.classList.remove('visible');
  }
});

button.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const scrollButton = document.querySelector('.secondary-button');

scrollButton.addEventListener('click', (event) => {
  event.preventDefault();
  const targetId = "#skills";
  const targetSection = document.querySelector(targetId);
  targetSection.scrollIntoView({ behavior: 'smooth' });
});

const words = ["UX", "Product","Design", "Interface","UX", "UI","UX", "UI","UX", "UI","UX", "UI","UX", "UI","UX", "UI","UX", "UI",];

const ul = document.querySelector(".word-carousel ul");

words.forEach((word) => {
  const li = document.createElement("li");
  li.textContent = word;
  ul.appendChild(li);
});

const toggleButton = document.querySelector('.toggle-button');

// Écouteur d'événement pour le clic sur le bouton toggle
toggleButton.addEventListener('click', () => {
  // Changement du mode sombre et clair du body
  document.body.classList.toggle('dark-mode');
  
  // Changement du texte du bouton toggle
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Mode clair';
  } else {
    toggleButton.textContent = 'Mode sombre';
  }
});

const navLinks = document.querySelector('nav ul');
const menuHamburger = document.querySelector(".menuHamburger");

menuHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
});

const navLinksItems = document.querySelectorAll('nav ul li a');
navLinksItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('mobile-menu');
  });
});




