const nav = document.getElementById("navBar");
const btn = document.getElementById("themeBtn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className === "topnav";
  }
});
