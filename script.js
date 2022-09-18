"use strict"
const btnEl = document.querySelector(".btn");
const btnXEl = document.querySelector(".btn-x");

// Random Color
btnEl.addEventListener("click", function () {
  const a = Math.trunc(Math.random() * 255) + 1;
  const b = Math.trunc(Math.random() * 255) + 1;
  const c = Math.trunc(Math.random() * 255) + 1;
  document.body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
});

// Resetting the app
btnXEl.addEventListener("click", function () {
  document.body.style.backgroundColor = "rgb(255,255,255)";
})
