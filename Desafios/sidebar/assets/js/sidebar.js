// Steps
/*
- Expandir
    Ao clicar no hamburguer a navegação deve expandir e a logo aparecer
    1 - Add da nav a classe active
    2- Add a brand a classe active
- Retrair
    Ao clicar no hamburguer a navegação retrai e a logo desaparece
    1 - Remover da nav a classe active
    2 - Remover da brand a classe active
*/

const hamburguer = document.querySelector(".menu-hamburguer");
const brand = document.querySelector(".brand ");
const nav = document.querySelector(".nav-sidebar");
const itemText = document.querySelectorAll(".nav-sidebar__icon-text");
const user = document.querySelector(".user__profile");

hamburguer.addEventListener("click", () => {
  nav.classList.toggle("active");
  brand.classList.toggle("active");
  user.classList.toggle("active");
  hamburguer.classList.toggle("center");
  itemText.forEach((e) => {
    e.classList.toggle("active");
  });
});
