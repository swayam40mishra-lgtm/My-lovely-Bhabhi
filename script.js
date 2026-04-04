document.addEventListener("DOMContentLoaded", () => {

  // ✅ ELEMENTS
  const intro = document.getElementById("intro");
  const enterBtn = document.getElementById("enterBtn");
  const tunnel = document.getElementById("tunnel");
  const ring = document.querySelector(".tunnel-ring");
  const music = document.getElementById("bgMusic");

  // ✅ RESET INTRO EVERY LOAD
  if (intro) {
    intro.style.display = "flex";
    intro.style.opacity = "1";
  }

  // 🎬 INTRO CLICK
  if (enterBtn && intro && tunnel && ring) {
    enterBtn.onclick = () => {

      // 🎵 play music (safe)
      if (music) {
        music.volume = 0.3;
        music.play().catch(() => {});
      }

      // hide intro
      intro.style.opacity = "0";

      setTimeout(() => {
        intro.style.display = "none";

        // show tunnel instantly
        tunnel.style.opacity = "1";

        // animate ring
        ring.style.transition = "transform 1.2s ease-out, opacity 1.2s";
        ring.style.transform = "scale(30)";
        ring.style.opacity = "0";

        // remove tunnel
        setTimeout(() => {
          tunnel.style.opacity = "0";
        }, 1200);

      }, 300);
    };
  }

  // 🔥 TEXT CONTENT
  const titleText = "Some people don’t just come into our life… they quietly become our life — and that's you, Renu Mishra.";

  const subtitleText = "Not everything can be said to a mother… maybe that’s why God gave us bhabhis. And you are the best example of that, Renu Mishra.";

  let i = 0;
  let j = 0;

  // 🎬 TYPEWRITER
  function typeTitle() {
    const titleEl = document.getElementById("typeTitle");
    if (!titleEl) return;

    if (i < titleText.length) {
      titleEl.innerHTML += titleText.charAt(i);
      i++;
      setTimeout(typeTitle, 80);
    } else {
      setTimeout(typeSubtitle, 600);
    }
  }

  function typeSubtitle() {
    const subEl = document.getElementById("typeSubtitle");
    if (!subEl) return;

    if (j < subtitleText.length) {
      subEl.innerHTML += subtitleText.charAt(j);
      j++;
      setTimeout(typeSubtitle, 30);
    }
  }

  typeTitle();

  // ✨ SCROLL REVEAL
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.18,
    rootMargin: "0px 0px -60px 0px",
  });

  reveals.forEach((el) => observer.observe(el));

  // 🔝 NAV ACTIVE
  const navLinks = document.querySelectorAll(".nav a");
  const sections = [...document.querySelectorAll("section[id]")];

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  }, { threshold: 0.55 });

  sections.forEach((section) => sectionObserver.observe(section));

  // 🔝 TOP BUTTON
  const topBtn = document.getElementById("topBtn");

  const toggleTopButton = () => {
    if (!topBtn) return;

    if (window.scrollY > 500) {
      topBtn.classList.add("show");
    } else {
      topBtn.classList.remove("show");
    }
  };

  window.addEventListener("scroll", toggleTopButton);
  toggleTopButton();

  if (topBtn) {
    topBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }

});
