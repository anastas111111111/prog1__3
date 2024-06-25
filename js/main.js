const windowInnerWidth = window.innerWidth;

if (windowInnerWidth < 768) {
  new Swiper(".brand-main-menu", {
    // отображение слайда - заполнение дост пространства
    slidesPerView: "auto",

    // обертка для слайдера
    wrapperClass: "brand-main-menu__list",

    // класс слайда
    slideClass: "brand-main-menu__item",
    // расстояние между слайдами
    spaceBetween: 16,

    pagination: {
      el: ".pagination-slider",
      clickable: true,
    },
  });
}



