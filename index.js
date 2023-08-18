const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar-wrapper");
const toggleBtn = document.querySelector(".toggle-btn");
closeBtn.addEventListener("click", () => {
  if (sidebar.classList.contains("show")) {
    sidebar.classList.remove("show");
  }
});
toggleBtn.addEventListener("click", () => {
  if (!sidebar.classList.contains("show")) {
    sidebar.classList.add("show");
  }
});
