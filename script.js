const toggleBtn = document.getElementById("toggle-btn");

const currentMode = localStorage.getItem("mode");
if (currentMode === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "🌞 Chế độ sáng";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  toggleBtn.textContent = isDark ? "🌞 Chế độ sáng" : "🌓 Chế độ tối";
  localStorage.setItem("mode", isDark ? "dark" : "light");
});
