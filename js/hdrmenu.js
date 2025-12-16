const menuBtn = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const mainbody = document.getElementById("mainbody");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    mainbody.classList.toggle("hidden");
  });