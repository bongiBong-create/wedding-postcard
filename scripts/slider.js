const slider = document.querySelector(".slider-container");
const slide = document.querySelector(".place-slide");
const pagination = document.querySelector(".pagination");

let currentSLide = 1;
const slideWidth = slide.clientWidth;
pagination.textContent = "Рис. 1/3";

export const move = (e) => {
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
