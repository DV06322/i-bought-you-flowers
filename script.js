document.getElementById("start-btn").addEventListener("click", function () {
  document.getElementById("start-menu").classList.add("hidden");
  document.getElementById("animation").classList.remove("hidden");
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);
});