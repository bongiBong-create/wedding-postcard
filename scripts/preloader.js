const content = document.querySelector(".main");
const preloaderElements = document.querySelectorAll(".preloader-el");
const preloader = document.querySelector(".preloader");

let delay = 1000;

preloaderElements.forEach((el, index) => {
  setTimeout(() => {
    el.classList.add("visible");
  }, delay * (index + 1));
});

export const loader = () => {
  setTimeout(() => {
    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.style.display = "none";
      content.style.opacity = "1";
      document.body.style.overflow = "auto";
    }, 300);
  }, delay * preloaderElements.length + 1000);
};
