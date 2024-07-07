// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu diklik
const hamburger = document.getElementById("hamburger-menu");
hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
