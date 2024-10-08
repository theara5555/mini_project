AOS.init({
  duration: 1000, // Duration of animation
  once: true, // Animation happens only once
});
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000, // Adjust the duration for the animation
    once: true, // Ensures animation only happens once per element
  });
});
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  });
