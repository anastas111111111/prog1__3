"use strict";

const buttonBrands = document.querySelector(".button-arrow-scroll");
const listBrands = document.querySelector(".brand-main-menu");

console.dir(buttonBrands);
console.dir(listBrands);

buttonBrands.addEventListener("click", function (event) {
  listBrands.classList.toggle("brand-main-menu--height");
  buttonBrands.classList.toggle('button--inverted');

  if (listBrands.classList.contains("brand-main-menu--height")) {
    buttonBrands.textContent = "Скрыть все";
  } else {
    buttonBrands.textContent = "Показать все";
  }
});
