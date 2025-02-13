document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelector(".nav-links");
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.addEventListener("click", function () {
      navLinks.classList.toggle("active");
  });
});