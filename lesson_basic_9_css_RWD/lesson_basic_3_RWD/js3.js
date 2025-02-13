const menuIcons = document.querySelector(".menu-icon");
const headerLinks = document.querySelector(".header-links");
menuIcons.addEventListener("click",() => {
  headerLinks.classList.toggle("active")
})