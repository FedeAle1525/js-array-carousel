// 1.1 Prendo tutti gli elementi con classe "slide" da Html
// const slideElements = document.getElementsByClassName('slide');
// console.log(slideElements);

// 1. Creo un Array di immagini
const arrayImg = ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg", "./img/04.jpg", "./img/05.jpg"];
console.log(arrayImg);

// 2. Serve un indice di riferimento per tenere traccia della Slide Attiva
let indexCurrentSlide = 0;

// 3. Recupero i gli elementi "pulsanti freccia"
const leftBtnArrow = document.getElementById('arrow-left');
const rightBtnArrow = document.getElementById('arrow-right');
console.log(leftBtnArrow,rightBtnArrow);

// 4. Creo elemento HTML (div) per contenere la Prima Slide
const slideActive = document.createElement('div');
slideActive.classList.add('slide','active');
console.log(slideActive);
// 4.1 - Aggiungo elemento "div" alla pagina HTML dentro elemento (carousel)
document.getElementById("carousel").prepend(slideActive);

// 5. Creo elemento HTML (img) che rappresenta la Prima Slide da visualizzare
const firstSlide = document.createElement("img");
firstSlide.src = arrayImg[0];
console.log(firstSlide);
// 5.1 - Aggiungo elemento HTML (img) dentro elemento HTML (div) creato al punto 4
document.querySelector(".slide.active").append(firstSlide);

// 6. Creo evento sul "pulsante freccia destro": scorrere le immagini al "click"
rightBtnArrow.addEventListener('click', function(){

  // 6.1 - Aggiungo Controllo per evitare errore e fermare l'azione all'Ultima Slide Possibile
  if (indexCurrentSlide < arrayImg.length - 1){

  // 6.2 - Recupero Slide Attiva e tolgo la classe "active"
  let activeSlide = document.querySelector(".slide.active");
  activeSlide.classList.remove('active');
  console.log("Slide Attiva: " + indexCurrentSlide);

  // 6.3 - Recupero immagine dentro Slide Attiva per rimuoverla
  let activeSlideImg = document.querySelector(".slide img");
  activeSlideImg.remove();

  // 6.4 - Incremento Indice per trovare Slide Successiva
  indexCurrentSlide = indexCurrentSlide + 1;

  // 6.5 - Creo elemento HTML (img) che rappresenta la Slide Corrente da visualizzare
  const currentSlide = document.createElement("img");
  currentSlide.src = arrayImg[indexCurrentSlide];

  // 6.6 - Recupero Slide Successiva e aggiungo la classe "active"
  let nextSlide = document.querySelector(".slide");
  nextSlide.classList.add('active');
  console.log("Slide Successiva: " + indexCurrentSlide);

  // 6.7 - Inserisco elemento HTML (img) all'interno dell'elemento che rappresenta la Slide Successiva
  document.querySelector(".slide.active").append(currentSlide);
  }

});

// 7. Creo evento sul "pulsante freccia sinistro": scorrere le immagini al click
leftBtnArrow.addEventListener('click', function(){

  // 7.4 - Aggiungo Controllo per evitare errore e fermare l'azione alla Prima Slide Possibile
  if (indexCurrentSlide > 0){

  // 7.1 - Recupero Slide Corrente e tolgo la classe "active"
  let currentSlide = slideElements[indexCurrentSlide];
  currentSlide.classList.remove('active');
  console.log("Slide Attiva: " + indexCurrentSlide);

  // 7.2 - Decremento Indice per trovare Slide Precedente
  indexCurrentSlide = indexCurrentSlide - 1;

  // 7.3 - Recupero Slide Precedente e aggiungo la classe "active"
  prevSlide = slideElements[indexCurrentSlide];
  prevSlide.classList.add('active');
  console.log("Slide Precedente: " + indexCurrentSlide);

  }

});
