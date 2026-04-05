document.addEventListener("DOMContentLoaded", () => {
  // =========================================
  // PAGE FADE IN
  // =========================================
  requestAnimationFrame(() => {
    document.body.style.opacity = "1";
  });

  // =========================================
  // INDEX PAGE INTRO
  // =========================================
  const introScreen = document.getElementById("intro-screen");
  const homeEnterBtn = document.getElementById("homeEnterBtn");

  if (introScreen && homeEnterBtn) {
    homeEnterBtn.addEventListener("click", () => {
      if (homeEnterBtn.dataset.clicked === "true") return;
      homeEnterBtn.dataset.clicked = "true";

      introScreen.classList.add("hidden");

      setTimeout(() => {
        introScreen.style.display = "none";
      }, 850);
    });
  }

  // =========================================
  // STORY PAGE INTRO + TUNNEL
  // =========================================
  const intro = document.getElementById("intro");
  const enterBtn = document.getElementById("enterBtn");
  const tunnel = document.getElementById("tunnel");
  const ring = document.querySelector(".tunnel-ring");
  const music = document.getElementById("bgMusic");

  if (intro && enterBtn) {
    enterBtn.addEventListener("click", () => {
      if (enterBtn.dataset.clicked === "true") return;
      enterBtn.dataset.clicked = "true";

      // Prevent repeated clicks visually
      enterBtn.style.pointerEvents = "none";
      enterBtn.style.opacity = "0.7";

      // Play music (user gesture allows autoplay)
      if (music) {
        music.volume = 0.3;
        music.play().catch(() => {});
      }

      // Activate tunnel
      if (tunnel) {
        tunnel.classList.add("active");
      }

      // Animate ring
      if (ring) {
        setTimeout(() => {
          ring.style.transform = "scale(28)";
          ring.style.opacity = "0";
        }, 80);
      }

      // Fade out intro
      intro.classList.add("hidden");

      // Remove intro from layout
      setTimeout(() => {
        intro.style.display = "none";
      }, 850);

      // Fade tunnel away after animation
      if (tunnel) {
        setTimeout(() => {
          tunnel.classList.remove("active");
        }, 1700);
      }
    });
  }

  // =========================================
  // SCROLL REVEAL (FOR .scene and .fade-section)
  // =========================================
  const revealItems = document.querySelectorAll(".scene, .fade-section");

  if (revealItems.length > 0) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target); // reveal once only
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealItems.forEach((item) => observer.observe(item));
  }

  // =========================================
  // SMOOTH INTERNAL PAGE TRANSITION
  // =========================================
  const links = document.querySelectorAll("a[href]");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      const isInternal =
        href &&
        !href.startsWith("#") &&
        !href.startsWith("http") &&
        !href.startsWith("mailto:") &&
        !href.startsWith("tel:") &&
        !this.hasAttribute("target");

      if (!isInternal) return;

      e.preventDefault();

      document.body.style.opacity = "0";

      setTimeout(() => {
        window.location.href = href;
      }, 450);
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
  const finalLines = document.querySelectorAll(".final-line");
  const finalSign = document.querySelector(".final-sign");
  const finalBtn = document.querySelector(".final-btn");

  if (finalLines.length > 0) {
    finalLines.forEach((line, index) => {
      setTimeout(() => {
        line.classList.add("show");
      }, index * 2200);
    });

    setTimeout(() => {
      if (finalSign) finalSign.classList.add("show");
    }, finalLines.length * 2200 + 800);

    setTimeout(() => {
      if (finalBtn) finalBtn.classList.add("show");
    }, finalLines.length * 2200 + 1800);
  }
});
});

