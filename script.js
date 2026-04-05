document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");
  const enterBtn = document.getElementById("enterBtn");
  const tunnel = document.getElementById("tunnel");
  const ring = document.querySelector(".tunnel-ring");
  const music = document.getElementById("bgMusic");
function enterSite() {
    let intro = document.getElementById("intro-screen");

    intro.style.transition = "opacity 0.8s ease";
    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
    }, 800);
}
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
document.addEventListener("DOMContentLoaded", () => {

    // Fade-out on button click (smooth transition)
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function(e) {

            const href = this.getAttribute("href");

            // Only apply for internal links
            if (href && !href.startsWith("#")) {
                e.preventDefault();

                document.body.style.opacity = "0";
                document.body.style.transition = "0.5s ease";

                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }

        });
    });

});
});
