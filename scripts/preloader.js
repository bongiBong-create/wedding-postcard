const content = document.querySelector(".main");
const preloaderElements = document.querySelectorAll(".preloader-el");
const preloader = document.querySelector(".preloader");
let delay = 1000;

preloaderElements.forEach((el) => {
  setTimeout(() => {
    el.classList.add("visible");
  }, delay);
  delay += 1000;
});

export const loader = () => {
  setTimeout(() => {
    preloader.style.display = "none";
    preloader.style.opacity = "0";
    content.style.opacity = "1";
    document.body.style.overflow = "auto";
  }, 6000);
};
