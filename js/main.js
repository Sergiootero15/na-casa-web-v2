document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const links = document.querySelectorAll('.main-nav a[href^="#"]');

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = "0 12px 30px rgba(76, 47, 36, 0.08)";
    } else {
      header.style.boxShadow = "none";
    }
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href");
      const target = document.querySelector(href);
      if (target) {
        setTimeout(() => {
          target.blur?.();
        }, 200);
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
  const sections = document.querySelectorAll("main section[id]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = "0 12px 30px rgba(76, 47, 36, 0.08)";
    } else {
      header.style.boxShadow = "none";
    }

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
});