document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");
  const enterBtn = document.getElementById("enterBtn");
  const tunnel = document.getElementById("tunnel");
  const ring = document.querySelector(".tunnel-ring");
  const music = document.getElementById("bgMusic");

  // ✅ RESET INTRO
  if (intro) {
    intro.style.display = "flex";
    intro.style.opacity = "1";
  }

  // 🎬 ENTER CLICK
  if (enterBtn) {
    enterBtn.onclick = () => {

      // 🎵 MUSIC
      if (music) {
        music.volume = 0.3;
        music.play().catch(() => {});
      }

      // 🎬 HIDE INTRO
      intro.style.opacity = "0";

      setTimeout(() => {
        intro.style.display = "none";

        // 🌌 SHOW TUNNEL
        tunnel.style.opacity = "1";

        // 🎯 ANIMATE RING
        ring.style.transform = "scale(30)";
        ring.style.opacity = "0";

        // ⏳ REMOVE TUNNEL
        setTimeout(() => {
          tunnel.style.opacity = "0";
        }, 1200);

      }, 300);
    };
  }

  // ✨ SCENE SCROLL ANIMATION
  const scenes = document.querySelectorAll(".scene");

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

});
