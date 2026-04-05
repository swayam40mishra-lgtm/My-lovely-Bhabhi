document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro"); // Make sure HTML uses id="intro"
  const enterBtn = document.getElementById("enterBtn");
  const tunnel = document.getElementById("tunnel");
  const ring = document.querySelector(".tunnel-ring");
  const music = document.getElementById("bgMusic");
  const scenes = document.querySelectorAll(".scene");

  // ✅ RESET INTRO ON LOAD (only if intro exists)
  if (intro) {
    intro.style.display = "flex";
    intro.style.opacity = "1";
  }

  // 🎬 ENTER CLICK
  if (enterBtn && intro) {
    enterBtn.addEventListener("click", () => {
      // Prevent multiple clicks
      enterBtn.disabled = true;

      // 🎵 MUSIC
      if (music) {
        music.volume = 0.3;
        music.play().catch(() => {});
      }

      // 🌌 SHOW TUNNEL FIRST (optional smoothness)
      if (tunnel) {
        tunnel.style.opacity = "1";
        tunnel.style.pointerEvents = "none";
      }

      // 🎯 ANIMATE RING
      if (ring) {
        ring.style.transform = "scale(30)";
        ring.style.opacity = "0";
      }

      // 🎬 FADE OUT INTRO
      intro.style.transition = "opacity 0.8s ease";
      intro.style.opacity = "0";

      setTimeout(() => {
        intro.style.display = "none";

        // ⏳ REMOVE TUNNEL AFTER EFFECT
        if (tunnel) {
          setTimeout(() => {
            tunnel.style.opacity = "0";
          }, 1200);
        }
      }, 800);
    });
  }

  // ✨ SCENE SCROLL ANIMATION
  if (scenes.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.4
    });

    scenes.forEach(scene => observer.observe(scene));
  }

  // 🔗 SMOOTH PAGE FADE-OUT FOR INTERNAL LINKS
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Only apply for internal page links
      if (
        href &&
        !href.startsWith("#") &&
        !href.startsWith("http") &&
        !this.hasAttribute("target")
      ) {
        e.preventDefault();

        document.body.style.transition = "opacity 0.5s ease";
        document.body.style.opacity = "0";

        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });
  });

  // ✨ FADE IN BODY ON PAGE LOAD
  document.body.style.opacity = "1";
});
