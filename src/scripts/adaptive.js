const NEEDLE_TITLE = document.querySelector(".section-lesson__subtitle");
const PARENT_COMMON = document.querySelector(
  ".section-lesson .section__top-content"
);
const PARENT_TITLE = document.querySelector(".title-subtitle");

function watchHeaderTitle() {
  if (window.innerWidth < 971) {
    NEEDLE_TITLE.remove();
    PARENT_COMMON.append(NEEDLE_TITLE);
  } else {
    NEEDLE_TITLE.remove();
    PARENT_TITLE.append(NEEDLE_TITLE);
  }
}

window.addEventListener("DOMContentLoaded", watchHeaderTitle);
window.addEventListener("resize", watchHeaderTitle);
