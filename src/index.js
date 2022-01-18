const dropdown = document.getElementById("dropdown");
const list = document.querySelector(".dropdown-menu");

dropdown.addEventListener("click", () => {
  list.classList.toggle("display")
});