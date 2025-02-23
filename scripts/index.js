import { loader } from "./preloader.js";

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  on: {
    init: function () {
      const paginationEl = document.querySelector(".swiper-pagination");
      paginationEl.innerHTML =
        `<span class="pagination-text">Илл.</span>  ` + paginationEl.innerHTML;
    },
  },
});

window.addEventListener("load", loader);
