// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

const hamburger = document.getElementById("hamburger-menu");
hamburger.onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchBtn = document.getElementById("search-button");

searchBtn.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const ShoppingCartBtn = document.getElementById("shopping-cart-button");
const ShoppingCart = document.querySelector(".shopping-cart");

ShoppingCartBtn.onclick = (e) => {
  ShoppingCart.classList.toggle("active");
  e.preventDefault();
};

// klik di luar elemen
document.addEventListener("click", function (e) {
  if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!ShoppingCartBtn.contains(e.target) && !ShoppingCart.contains(e.target)) {
    ShoppingCart.classList.remove("active");
  }
});
