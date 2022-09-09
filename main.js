$(document).ready(function () {
  $("#loginModal").modal("show");
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-items");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
