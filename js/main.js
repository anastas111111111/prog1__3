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

if (windowInnerWidth < 768) {
  new Swiper(".technique-main-menu", {
    // отображение слайда - заполнение дост пространства
    slidesPerView: "auto",

    // обертка для слайдера
    wrapperClass: "technique-main-menu__list",

    // класс слайда

    slideClass: "technique-main-menu__item",

    // расстояние между слайдами
    spaceBetween: 16,

    pagination: {
      el: ".pagination-slider",
      clickable: true,
    },
  });
}

if (windowInnerWidth < 768) {
  new Swiper(".price-main-menu__table", {
    // отображение слайда - заполнение дост пространства
    slidesPerView: "auto",

    // обертка для слайдера
    wrapperClass: "price-main-menu__body",

    // класс слайда

    slideClass: "price-main-menu__row",

    // расстояние между слайдами
    spaceBetween: 16,

    pagination: {
      el: ".pagination-slider",
      clickable: true,
    },
  });
}
