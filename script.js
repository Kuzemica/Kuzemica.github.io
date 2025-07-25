const toggleBtn = document.getElementById("toggle-btn");

// Kiểm tra chế độ đã lưu
const currentMode = localStorage.getItem("mode");
if (currentMode === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "🌞 Chế độ sáng";
}

// Bắt sự kiện khi click
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  toggleBtn.textContent = isDark ? "🌞 Chế độ sáng" : "🌓 Chế độ tối";

  // Lưu lại chế độ
  localStorage.setItem("mode", isDark ? "dark" : "light");
});
