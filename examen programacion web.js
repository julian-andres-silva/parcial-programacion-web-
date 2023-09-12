$(document).ready(function cambiarcontenido() {
  var carouselItems = $('.carousel-item');
  var intervalos = [5000, 3000, 7000]; 
  var currentIndex = 0;
  
  function showNextItem() {
    carouselItems.eq(currentIndex).removeClass('active');
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems.eq(currentIndex).addClass('active');
    setTimeout(showNextItem, intervalos[currentIndex]);
  }
  
  carouselItems.eq(currentIndex).addClass('active');
  setTimeout(showNextItem, intervalos[currentIndex]);
}); 
var boton = document.getElementById('boton');
var texto = document.getElementById('texto');
boton.addEventListener('click', function() {
    texto.innerHTML = 'GOKU LE GANA';
});
var button = document.getElementById('button');
boton.addEventListener('click', function cambiarcolordepagina() {
  
    var body = document.body;
    body.classList.toggle('estilo-alternativo');
});



