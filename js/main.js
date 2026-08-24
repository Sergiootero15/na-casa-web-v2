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

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector("[data-experiences-carousel]");

  if (!carousel) {
    return;
  }

  const track = carousel.querySelector("[data-experiences-track]");
  const controls = document.querySelector("[data-experiences-controls]");
  const previousButton = controls?.querySelector("[data-experiences-previous]");
  const nextButton = controls?.querySelector("[data-experiences-next]");

  if (!track || !controls || !previousButton || !nextButton) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let updateFrame = null;

  const getScrollStep = () => {
    const firstCard = track.querySelector(".experience-card");
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;

    return firstCard ? firstCard.getBoundingClientRect().width + gap : track.clientWidth;
  };

  const updateControls = () => {
    const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
    const hasOverflow = maxScrollLeft > 2;

    controls.hidden = !hasOverflow;
    previousButton.disabled = !hasOverflow || track.scrollLeft <= 2;
    nextButton.disabled = !hasOverflow || track.scrollLeft >= maxScrollLeft - 2;
  };

  const queueControlUpdate = () => {
    if (updateFrame !== null) {
      return;
    }

    updateFrame = window.requestAnimationFrame(() => {
      updateFrame = null;
      updateControls();
    });
  };

  const moveCarousel = (direction) => {
    track.scrollBy({
      left: direction * getScrollStep(),
      behavior: reducedMotion.matches ? "auto" : "smooth",
    });
  };

  previousButton.addEventListener("click", () => moveCarousel(-1));
  nextButton.addEventListener("click", () => moveCarousel(1));
  track.addEventListener("scroll", queueControlUpdate, { passive: true });
  window.addEventListener("resize", queueControlUpdate);

  updateControls();
});
