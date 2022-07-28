'use strict';

const leftArrow = document.querySelector('.arrow__left');
const rightArrow = document.querySelector('.arrow__right');
const carousel = document.querySelector('.teach__list');
const carouselWidth = window.getComputedStyle(carousel).width;

for (let item of carousel.children) {
  item.style.left = '0%';
}

leftArrow.addEventListener('click', e => {
  if (parseInt(carousel.children[0].style.left) < 0)
    for (let item of carousel.children) {
      item.style.left = (parseInt(item.style.left) + 105) + '%';
    }
});

rightArrow.addEventListener('click', e => {
  if (parseInt(carousel.children[0].style.left) > -210)
    for (let item of carousel.children) {
      item.style.left = (parseInt(item.style.left) - 105) + '%';
    }
});