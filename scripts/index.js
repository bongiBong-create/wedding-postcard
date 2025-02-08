import { loader } from "./preloader.js";
import { move } from "./slider.js";
const slider = document.querySelector(".slider-container");

window.addEventListener("load", loader);
slider.addEventListener("mouseup", move);
