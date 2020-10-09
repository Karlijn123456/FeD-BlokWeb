// JavaScript Document
var hamburgerMenuButton = document.querySelector(".hamburgericon");
var hamburgerMenu = document.querySelector(".hamburgermenu-section");

function hamburgerMenuExpands() {
  hamburgerMenu.classList.toggle("showmenu");
}

hamburgerMenuButton.addEventListener("click", hamburgerMenuExpands);
