// ---------------------------------------------
//               Global Variables
// ---------------------------------------------



// ---------------------------------------------
//               Global Functions
// ---------------------------------------------



// ---------------------------------------------
//            Global Event listeners
// ---------------------------------------------



// ---------------------------------------------
//                  Main Code
// ---------------------------------------------

console.log('Front-End script loaded successfully.');

window.addEventListener('DOMContentLoaded', () => { // DOM Carregado completamente
  console.log('DOM fully loaded and parsed');
    
  const cardElement = window.document.querySelector('.card');

  cardElement.addEventListener('mouseenter', () => {
    cardElement.style.transform = 'rotateY(180deg)';
  });
  cardElement.addEventListener('mouseleave', () => { 
    cardElement.style.transform = 'rotateY(0deg)';
  });
});