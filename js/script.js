// 1. Prendo tutti gli elementi con classe "slide" da Html
const slideElements = document.getElementsByClassName('slide');
console.log(slideElements);

// 2. Serve un indice di riferimento per tenere traccia della Slide Attiva
let indexCurrentSlide = 0;

// 3. Recupero i gli elementi "pulsanti freccia"

const leftBtnArrow = document.getElementById('arrow-left');
const rightBtnArrow = document.getElementById('arrow-right');
console.log(leftBtnArrow,rightBtnArrow);

// 4. Creo evento sul "pulsante freccia destro": scorrere le immagini al "click"
rightBtnArrow.addEventListener('click', function(){

  // if (indexCurrentSlide < slideElements.length){

  // 4.1 - Recupero Slide Corrente e tolgo la classe "active"
  let currentSlide = slideElements[indexCurrentSlide];
  currentSlide.classList.remove('active');
  console.log("Slide Attiva: " + indexCurrentSlide);

  // 4.2 - Incremento Indice per trovare Slide Successiva
  indexCurrentSlide = indexCurrentSlide + 1;

  // 4.3 - Recupero Slide Successiva e aggiungo la classe "active"
  let nextSlide = slideElements[indexCurrentSlide];
  nextSlide.classList.add('active');
  console.log("Slide Successiva: " + indexCurrentSlide);

  // }

});
