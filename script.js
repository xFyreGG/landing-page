const card = document.querySelector(".profile-image");
const hoverArea = document.querySelector(".profile-hover-area");

let targetRotateX = 0;
let targetRotateY = 0;
let currentRotateX = 0;
let currentRotateY = 0;

if (card && hoverArea) {
  hoverArea.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    targetRotateX = -(y - centerY) / 18;
    targetRotateY = (x - centerX) / 18;
  });

  hoverArea.addEventListener("mouseleave", () => {
    targetRotateX = 0;
    targetRotateY = 0;
  });

  function animateTilt() {
    currentRotateX += (targetRotateX - currentRotateX) * 0.12;
    currentRotateY += (targetRotateY - currentRotateY) * 0.12;

    const isActive =
      Math.abs(currentRotateX) > 0.05 || Math.abs(currentRotateY) > 0.05;

    card.style.transform = `perspective(1000px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) scale(${isActive ? 1.03 : 1})`;
    card.style.boxShadow = isActive
      ? "0 12px 30px rgba(255, 72, 0, 0.18)"
      : "none";

    requestAnimationFrame(animateTilt);
  }

  animateTilt();
}

const heroItems = document.querySelectorAll(".hero .reveal");
const projectItems = document.querySelectorAll(".projects .reveal");

window.addEventListener("load", () => {
  heroItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("is-visible");
    }, 180 * index);
  });

  const heroDelay = heroItems.length * 180 + 200;

  projectItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("is-visible");
    }, heroDelay + index * 120);
  });
});