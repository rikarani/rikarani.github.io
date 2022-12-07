// Toggle Hamburger Menu
const hamburgerToggle = document.getElementById("hamburger-toggle");

hamburgerToggle.addEventListener("click", () => {
  const navbar = document.getElementById("nav-wrapper");

  hamburgerToggle.classList.toggle("is-active");
  navbar.classList.toggle("hidden");
});
