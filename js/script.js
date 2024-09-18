const navbar = document.querySelector(".navbar");
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");
hamburger.onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !navbar.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!shoppingButton.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Bagian Search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const sb = document.querySelector("#search-btn");

sb.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//Bagian Shopping Cart
const shoppingCart = document.querySelector(".shopping-cart");
const shoppingButton = document.querySelector("#shopping-cart-btn");

shoppingButton.onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};
