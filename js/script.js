const navLink = document.querySelectorAll(".navigation__link");
const checkBox = document.querySelector(".navigation__toggle");



navLink.forEach((link) =>
  link.addEventListener("click", () => {
    console.log("hh")
    checkBox.checked = false;
  })
);
