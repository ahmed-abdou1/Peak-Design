'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    if (goTopBtn) {
      goTopBtn.classList.add("active");
    }
  } else {
    header.classList.remove("active");
    if (goTopBtn) {
      goTopBtn.classList.remove("active");
    }
  }
});

const cursor = document.querySelector('.cursor');
// let hiddenMessage = document.getElementsByClassName("hidden-message-div");
document.addEventListener('mousemove', (e) => {
  if (cursor) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  }
})


// Code starts here for pop up

const openpopupButtons = document.querySelectorAll('[data-popup-target]');
const closepopupButtons = document.querySelectorAll('[data-close-button]');
const overwindow = document.getElementById('popup-overlay');
let bodyOverflow = document.getElementById('top');

openpopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popup = document.querySelector(button.dataset.popupTarget);
    bodyOverflow.style.overflow = 'hidden';
    openpopup(popup);
  })
})
if (overwindow) {
  overwindow.addEventListener('click', () => {
    const popup = document.querySelectorAll('.popup.active');
    bodyOverflow.style.overflow = 'visible';
    popup.forEach(popup => {
      closepopup(popup)
    })
  })
}

closepopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    bodyOverflow.style.overflow = 'visible';
    const popup = button.closest('.popup')
    closepopup(popup)
  })
})

function openpopup(popup) {
  if (popup == null) return
  popup.classList.add('active')
  overwindow.classList.add('active')
}

function closepopup(popup) {
  if (popup == null) return
  popup.classList.remove('active')
  overwindow.classList.remove('active')
}

// drop down menu for services


document.addEventListener("mouseover", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
})