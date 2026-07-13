document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");

  if (!header) {
    return;
  }

  const updateHeaderShadow = () => {
    header.style.boxShadow =
      window.scrollY > 20
        ? "0 12px 30px rgba(76, 47, 36, 0.08)"
        : "none";
  };

  updateHeaderShadow();
  window.addEventListener("scroll", updateHeaderShadow, { passive: true });
});
