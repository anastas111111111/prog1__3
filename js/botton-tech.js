const buttonTechique = document.querySelector(".button-arrow-scroll");
const listTechique = document.querySelector(".technique-main-menu");

buttonTechique.addEventListener("click", function (event) {
  listTechique.classList.toggle("technique-main-menu--height");
  buttonTechique.classList.toggle('button-arrow-scroll--inverted');

  if (listTechique.classList.contains("technique-main-menu--height")) {
    buttonTechique.textContent = "Скрыть все";
  } else {
    buttonTechique.textContent = "Показать все";
  }
});