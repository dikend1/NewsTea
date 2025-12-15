const menuBtn = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
  });