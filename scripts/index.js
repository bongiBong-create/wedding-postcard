const slider = document.querySelector(".slider-container");
const slide = document.querySelector(".place-slide");
const pagination = document.querySelector(".pagination");
const preloader = document.querySelector(".preloader");
const content = document.querySelector(".main");

let currentSLide = 1;
const slideWidth = slide.clientWidth;
pagination.textContent = "Рис. 1/3";

const loader = () => {
  setTimeout(() => {
    preloader.style.display = "none";
    preloader.style.opacity = "0";
    content.style.opacity = "1";
  }, 2000);
};

const move = (e) => {
  console.log(e.target.alt);
  if (e.target.alt === "three") {
    currentSLide = 1;
    slider.style.transform = `translateX(${0}px)`;
  } else {
    slider.style.transform = `translateX(${-slideWidth * currentSLide}px)`;
    currentSLide = currentSLide + 1;
  }

  pagination.textContent = `Рис. ${currentSLide}/3`;
};

window.addEventListener("load", loader);
slider.addEventListener("mouseup", move);
