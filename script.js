const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelectorAll(
  "#menu-close-button, .nav-link ",
);

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.forEach((button) => {
  button.addEventListener("click", () => menuOpenButton.click());
});

// Initialize Swiper
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
