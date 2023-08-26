import { getElement } from "./utils.js";

const closeBtn = getElement(".close-btn");
const sidebar = getElement(".sidebar-wrapper");
const toggleBtn = getElement(".toggle-btn");

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

// closes sidebar if resolution is matched
const maxWidth = window.matchMedia("(min-width: 772px)");
maxWidth.addEventListener("change", () => {
  if (sidebar.classList.contains("show")) {
    sidebar.classList.remove("show");
  }
});
