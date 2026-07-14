document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");

  if (!header) {
    return;
  }

  const updateHeaderShadow = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  updateHeaderShadow();
  window.addEventListener("scroll", updateHeaderShadow, { passive: true });
});
