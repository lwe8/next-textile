const el = document.documentElement;
const storageKey = "theme-preference";
const lightBtn = document.getElementById("light");
const darkBtn = document.getElementById("dark");
const systemBtn = document.getElementById("system");
const localStorageTheme = localStorage.getItem(storageKey);
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
localStorage.setItem(storageKey, systemTheme);
let currentTheme = localStorageTheme;

el.setAttribute("data-theme", currentTheme);
const addevent = (btn, theme) => {
  const _theme = theme === "system" ? systemTheme : theme;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    el.setAttribute("data-theme", _theme);
    localStorage.setItem(storageKey, _theme);
    currentTheme = _theme;
  });
};
addevent(lightBtn, "light");
addevent(darkBtn, "dark");
addevent(systemBtn, "system");
