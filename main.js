const observerOptions = { threshold: 0.2, rootMargin: "0px" };

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("animate");
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  // ====== Observe elements ======
  [
    ".about-badge", ".about-title", ".about-subtitle", ".campaign-image",
    ".serving-badge", ".serving-title", ".serving-subtitle",
    ".endorsed-badge", ".endorsed-title", ".endorsed-subtitle",
    ".vision-badge", ".vision-title", ".vision-subtitle", ".vision-image",
    ".agenda-badge", ".agenda-title", ".agenda-subtitle",
    ".philosophy-badge", ".philosophy-title",
    ".highlights-badge", ".highlights-title", ".highlights-description", ".highlights-video",
    ".quote-icon", ".quote-text", ".quote-divider", ".quote-author", ".quote-title",
    ".cta-title", ".cta-subtitle", ".cta-buttons",
    ".footer-brand", ".footer-links", ".footer-contact", ".footer-bottom"
  ].forEach(sel => {
    const el = document.querySelector(sel);
    if (el) observer.observe(el);
  });

  document.querySelectorAll(".candidate-item, .serving-card, .vision-item, .agenda-item, .philosophy-card")
    .forEach(el => observer.observe(el));

  // ====== Video control (ONLY ONCE) ======
  const video = document.getElementById("campaignVideo");
  const controlBtn = document.getElementById("videoControlBtn");

  if (video && controlBtn) {
    const playIcon = controlBtn.querySelector(".play-icon");
    const pauseIcon = controlBtn.querySelector(".pause-icon");

    controlBtn.addEventListener("click", async () => {
      if (video.paused) {
        try {
          await video.play();
          if (playIcon) playIcon.style.display = "none";
          if (pauseIcon) pauseIcon.style.display = "block";
          controlBtn.classList.add("playing");
        } catch (e) {
          console.log("Video play blocked:", e);
        }
      } else {
        video.pause();
        if (playIcon) playIcon.style.display = "block";
        if (pauseIcon) pauseIcon.style.display = "none";
        controlBtn.classList.remove("playing");
      }
    });

    video.addEventListener("pause", () => {
      controlBtn.classList.remove("playing");
      if (playIcon) playIcon.style.display = "block";
      if (pauseIcon) pauseIcon.style.display = "none";
    });

    video.addEventListener("play", () => controlBtn.classList.add("playing"));
    video.addEventListener("click", () => controlBtn.click());
  }

  // ====== Mobile menu ======
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  const overlay = document.createElement("div");
  overlay.className = "mobile-overlay";
  document.body.appendChild(overlay);

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "";
    });

    overlay.addEventListener("click", () => {
      mobileMenuToggle.classList.remove("active");
      navMenu.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuToggle.classList.remove("active");
        navMenu.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }
});
