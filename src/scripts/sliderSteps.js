const SLIDER = document.querySelector(".section-steps__steps");

const BTN_PREVIOUS = document.querySelector(".steps-control .button-previous");
const BTN_NEXT = document.querySelector(".steps-control .button-next");

const STEPS_CONTROL_CIRCLES = document.querySelector(
  ".steps-control .contents"
);

const WIDTH_TO_SLIDE = 365;
const CARD_WIDTH = 300;

const COUNT_OF_CARDS = SLIDER.children.length;
let countOfInvisibleCards = 0;

let countsSlider = 0;
let currentTranslate = 0;

let sliderWidth;
let countVisibleCards;

// console.log(COUNT_OF_CARDS);

function watchSliderSteps() {
  sliderWidth = window
    .getComputedStyle(SLIDER)
    .getPropertyValue("width")
    .replace("px", "");
  countVisibleCards = Number.parseInt(sliderWidth) / CARD_WIDTH;
  countOfInvisibleCards = Number.parseInt(COUNT_OF_CARDS - countVisibleCards);

  let circleElement = `<div class="circle"></div>`;
  STEPS_CONTROL_CIRCLES.innerHTML = circleElement.repeat(countOfInvisibleCards);
  let CONTROL_CIRCLES = Array.from(STEPS_CONTROL_CIRCLES.children);
  CONTROL_CIRCLES[0].classList.add("active-circle");
}

window.addEventListener("resize", watchSliderSteps);
window.addEventListener("DOMContentLoaded", watchSliderSteps);

function watchBtnNext() {
  currentTranslate += WIDTH_TO_SLIDE;
  ++countsSlider;
  console.log(countsSlider);
  CONTROL_CIRCLES = Array.from(STEPS_CONTROL_CIRCLES.children);
  if (countsSlider == 0) {
    BTN_PREVIOUS.classList.add("disabled");
  } else {
    BTN_PREVIOUS.classList.remove("disabled");
  }

  if (
    !CONTROL_CIRCLES[CONTROL_CIRCLES.length - 1].classList.contains(
      "active-circle"
    )
  ) {
    SLIDER.style.transform = `translate(-${currentTranslate}px)`;

    for (let i = 0; i < CONTROL_CIRCLES.length; i++) {
      CONTROL_CIRCLES[countsSlider - 1].classList.remove("active-circle");
      CONTROL_CIRCLES[countsSlider].classList.add("active-circle");
    }
  } else {
    BTN_NEXT.classList.add("disabled");
    countsSlider = countOfInvisibleCards - 2;
    return;
  }
}

BTN_NEXT.addEventListener("click", watchBtnNext);

function watchBtnPrev() {
  currentTranslate -= WIDTH_TO_SLIDE;
  --countsSlider;
  console.log(countsSlider);
  CONTROL_CIRCLES = Array.from(STEPS_CONTROL_CIRCLES.children);
  if (!CONTROL_CIRCLES[0].classList.contains("active-circle")) {
    SLIDER.style.transform = `translate(-${currentTranslate}px)`;

    for (let i = 0; i < CONTROL_CIRCLES.length; i++) {
      CONTROL_CIRCLES[countsSlider + 1].classList.remove("active-circle");
      CONTROL_CIRCLES[countsSlider].classList.add("active-circle");
    }
  } else {
    BTN_PREVIOUS.classList.add("disabled");
    countsSlider = countOfInvisibleCards;
    return;
  }
}

BTN_PREVIOUS.addEventListener("click", watchBtnPrev);
