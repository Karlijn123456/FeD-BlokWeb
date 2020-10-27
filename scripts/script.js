// JavaScript Document

// Hamburgermenu micro-interaction
var hamburgerMenu = document.querySelector(".hamburgermenu-section");
var hamburgerMenuButton = document.querySelector(".hamburgericon");
var hamburgerMenuIcon = document.querySelector(".hamburgermenuicon");
var toggle = true;

function hamburgerMenuExpands() {
  hamburgerMenu.classList.toggle("showmenu");
  if (toggle === true) {
    hamburgerMenuIcon.src = "images/close.svg";
  } else {
    hamburgerMenuIcon.src = "images/hamburgericon.svg";
  }
  toggle = !toggle;
}

hamburgerMenuButton.addEventListener("click", hamburgerMenuExpands);
// Hamburgermenu micro-interaction

// Brosemenu micro-interaction
var browseButton = document.querySelector(".browse-button");
var browseSection = document.querySelector(".browse-section");

function toggleBrowseSection() {
  browseSection.classList.toggle("showmenu");
  browseButton.style.color = "#08FE84";
}

browseButton.addEventListener("click", toggleBrowseSection);
