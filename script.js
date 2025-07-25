const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("mode", isDark ? "dark" : "light");
});

if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark");
}
