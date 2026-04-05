document.addEventListener("DOMContentLoaded", () => {
  // =========================================
  // PAGE FADE IN
  // =========================================
  requestAnimationFrame(() => {
    document.body.style.opacity = "1";
  });

  // =========================================
  // INDEX PAGE INTRO SCREEN
  // Works if:
  // - id="intro-screen"
  // - button id="homeEnterBtn"
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
  // STORY PAGE INTRO + TUNNEL EFFECT
  // Works if:
  // - id="intro"
  // - id="enterBtn"
  // - id="tunnel"
  // - class="tunnel-ring"
  // - id="bgMusic" (optional)
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

      // Prevent multiple clicks
      enterBtn.style.pointerEvents = "none";
      enterBtn.style.opacity = "0.7";

      // Play music if exists
      if (music) {
        music.volume = 0.3;
        music.play().catch(() => {});
      }

      // Show tunnel animation
      if (tunnel) {
        tunnel.classList.add("active");
      }

      // Ring zoom effect
      if (ring) {
        setTimeout(() => {
          ring.style.transform = "scale(28)";
          ring.style.opacity = "0";
        }, 80);
      }

      // Hide intro
      intro.classList.add("hidden");

      setTimeout(() => {
        intro.style.display = "none";
      }, 850);

      // Remove tunnel after effect
      if (tunnel) {
        setTimeout(() => {
          tunnel.classList.remove("active");
        }, 1700);
      }
    });
  }

  // =========================================
  // SCROLL REVEAL ANIMATION
  // Works for:
  // - .scene
  // - .fade-section
  // =========================================
  const revealItems = document.querySelectorAll(".scene, .fade-section");

  if (revealItems.length > 0) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target); // reveal only once
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
  // FINAL PAGE TYPEWRITER / LINE-BY-LINE REVEAL
  // Works if final.html contains:
  // - #finalLines
  // - .final-line elements inside it
  // =========================================
  const finalLines = document.querySelectorAll(".final-line");

  if (finalLines.length > 0) {
    finalLines.forEach((line, index) => {
      setTimeout(() => {
        line.classList.add("show");
      }, index * 2200); // each line appears one by one
    });
  }

  // =========================================
  // SMOOTH INTERNAL PAGE TRANSITION
  // For all internal links only
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
});
