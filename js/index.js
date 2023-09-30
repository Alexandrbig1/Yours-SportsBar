const elements = {
  onModalOpenBtn: document.querySelector("[data-modal-open]"),
  onModalCloseBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
  burgerBtn: document.querySelector(".btn-mobile-nav"),
  headerEl: document.querySelector(".header-container"),
  header: document.querySelector(".header-menu"),
};

const { onModalOpenBtn, onModalCloseBtn, modal, burgerBtn, headerEl, header } =
  elements;

// Modal Window
onModalOpenBtn.addEventListener("click", toggleModalWindow);
onModalCloseBtn.addEventListener("click", toggleModalWindow);

function toggleModalWindow() {
  modal.classList.toggle("is-hidden");
}

// Burger Menu
burgerBtn.addEventListener("click", onBtnMenuClick);

function onBtnMenuClick() {
  headerEl.classList.toggle("header-open-js");
}

header.addEventListener("click", (e) => {
  if (e.target.tagName !== "A") {
    return;
  }
  // Close mobile navigation
  headerEl.classList.toggle("header-open-js");
});
