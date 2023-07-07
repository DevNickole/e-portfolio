let burger = document.querySelector(".burger");
let dropdownmenu = document.querySelector(".dropdownmenu");
let listofli = document.querySelectorAll(".dropdownmenu>ul>li");

burger.addEventListener("click", () => {
  dropdownmenu.classList.toggle("dropdownmenuactive");
});
listofli.forEach((element) => {
  element.addEventListener("click", () => {
    dropdownmenu.classList.toggle("dropdownmenuactive");
  });
});
