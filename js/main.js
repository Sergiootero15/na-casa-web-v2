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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("[data-contact-form]");

  if (!form) {
    return;
  }

  const submitButton = form.querySelector('button[type="submit"]');
  const status = form.querySelector(".contact-form__status");

  if (!submitButton || !status) {
    return;
  }

  const successMessage =
    "Gracias por escribirnos. Hemos recibido vuestro mensaje y nos pondremos en contacto con vosotros lo antes posible.";
  const errorMessage =
    "No hemos podido enviar el mensaje. Inténtalo de nuevo dentro de unos minutos.";
  const networkErrorMessage =
    "No hemos podido conectar con el servicio de envío. Comprueba tu conexión e inténtalo de nuevo.";
  const rateLimitMessage =
    "Se han realizado demasiados intentos. Espera unos minutos antes de volver a enviarlo.";
  const originalButtonText = submitButton.textContent;
  let isSubmitting = false;

  const showStatus = (message, state) => {
    status.textContent = message;
    status.dataset.state = state;
  };

  const getResponseError = async (response) => {
    if (response.status === 429) {
      return rateLimitMessage;
    }

    const data = await response.json().catch(() => null);
    const responseErrors = Array.isArray(data?.errors) ? data.errors : [];
    const details = responseErrors
      .map((error) => error?.message)
      .filter((message) => typeof message === "string" && message.trim())
      .join(" ");

    return details ? `${errorMessage} ${details}` : errorMessage;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    isSubmitting = true;
    submitButton.disabled = true;
    submitButton.textContent = "Enviando…";
    status.textContent = "";
    delete status.dataset.state;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        showStatus(await getResponseError(response), "error");
        return;
      }

      form.reset();
      showStatus(successMessage, "success");
    } catch {
      showStatus(networkErrorMessage, "error");
    } finally {
      isSubmitting = false;
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
});
