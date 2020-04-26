/* ================================= 
 welcome banner
==================================== */

const welcomeMessage = document.querySelector('div.banner');

welcomeMessage.addEventListener('click', () => {
    welcomeMessage.innerHTML = "<h1>Have a Good Time!</h1>";
  });
  
/* ================================= 
 nav bar
==================================== */
const navbar = document.querySelector('.icon');
const mainNav = document.querySelector('.main-nav');


function myFunction() {
    mainNav.className = "menu";
    navbar.style.display = "none";
    
    }
function closemenu() {
    
    mainNav.className = 'main-nav';
    navbar.style.display = "block";   
}

/* ================================= 
 hidden content
==================================== */

const hiddenContent = document.querySelectorAll('.below');
const show = document.querySelector('.show');

show.addEventListener('click', () => {
    for (let i = 0; i< hiddenContent.length; i++)
    hiddenContent[i].style.display = "flex";
  });