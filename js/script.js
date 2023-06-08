"use strict"
const slides = document.querySelectorAll('.offer__slide'),
      prev = document.querySelector('.offer__slider-prev'),
      next = document.querySelector('.offer__slider-next');
let slideIndex = 1;
showSlides(slideIndex);
function showSlides(n){
    if(n>slides.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex = slides.length;
    }
    slides.forEach(item => item.style.display='none');
    slides[slideIndex -1].style.display='block'
}
function plusSlides(n){
    showSlides(slideIndex+=n);
}
prev.addEventListener('click',()=>{
    plusSlides(-1)
});
next.addEventListener('click',()=>{
    plusSlides(1)
});

function openPage(){
    window.open('price.html');
}

const btn = document.querySelector('.btn');
const zabor = document.querySelector('.zabor');
const plitka = document.querySelector('.product2');
const vorota = document.querySelector('.product3');
const burg = document.querySelector('.burg')
btn.addEventListener('click', ()=>{
    openPage()
});
burg.addEventListener('click',()=>{
    openPage()
})
zabor.addEventListener('click',()=>{   
    openPage()
});

plitka.addEventListener('click',()=>{
    openPage()
});

vorota.addEventListener('click',()=>{
    openPage()
});