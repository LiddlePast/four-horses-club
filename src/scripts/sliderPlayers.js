const PLAYERS_CARDS = document.getElementById("playersCards");
const CARDS_COUNT = PLAYERS_CARDS.children.length;

let currentText = document.querySelector(".contents span.current");
let commonText = document.querySelector(".contents span.common");

let PLAYERS_SLIDER_WIDTH;
let visibleCardsCount = 2;
let invisibleCardsCount;

let width;
let changeWidth;

function watchWidth() {
  if (window.innerWidth > 1280) {
    width = 450;
    changeWidth = 450;
  } else if (window.innerWidth <= 1280) {
    width = 350;
    changeWidth = 350;
  }
  PLAYERS_SLIDER_WIDTH = Number.parseInt(
    window
      .getComputedStyle(PLAYERS_CARDS)
      .getPropertyValue("width")
      .replace("px", "")
  );
  visibleCardsCount = Number.parseInt(PLAYERS_SLIDER_WIDTH / width) + 1;
  console.log(visibleCardsCount);
  if (window.innerWidth > 1280) {
    commonText.textContent = " / " + (CARDS_COUNT - visibleCardsCount + 1);
  } else if (window.innerWidth <= 1280) {
    commonText.textContent = " / " + (CARDS_COUNT - visibleCardsCount + 1);
  }
}

window.addEventListener("resize", watchWidth);
window.addEventListener("DOMContentLoaded", watchWidth);

let maxCount = visibleCardsCount;
if (window.innerWidth < 760) {
  maxCount += 1;
} else {
  maxCount -= 1;
}
let n = 0;
let transformSlider;
transformSlider = setInterval(function () {
  if (n <= maxCount + 1) {
    PLAYERS_CARDS.style.transform = `translateX(-${width}px)`;
    width += changeWidth;
    n += 1;
    currentText.textContent = n + 1;
  } else {
    PLAYERS_CARDS.style.transform = `translateX(0px)`;
    width = changeWidth;
    n = 0;
    currentText.textContent = n + 1;
  }
}, 2000);
