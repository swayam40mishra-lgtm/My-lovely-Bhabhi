document.addEventListener("DOMContentLoaded", () => {

  // 🔥 TEXT CONTENT (YOU CAN EDIT THIS)
  const titleText = "Some people don’t just come into our life… they quietly become our life and that's you renu mishra ";

  const subtitleText = "Not everything can be said to a mother… maybe that’s why God gave us bhabhis. And you are the best example of that, Renu Mishra";

  let i = 0;
  let j = 0;
const intro = document.getElementById("intro");
const enterBtn = document.getElementById("enterBtn");

if (enterBtn) {
  enterBtn.addEventListener("click", () => { const music = document.getElementById("bgMusic");


  const tunnel = document.getElementById("tunnel");
  const ring = document.querySelector(".tunnel-ring");

  // hide intro instantly
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";

    // show tunnel instantly (no delay)
    tunnel.style.opacity = "1";

    // trigger animation manually
    ring.style.transition = "transform 1.2s ease-out, opacity 1.2s";
    ring.style.transform = "scale(30)";
    ring.style.opacity = "0";

    // remove tunnel after animation
    setTimeout(() => {
      tunnel.style.opacity = "0";
      tunnel.style.pointerEvents = "none";
    }, 1200);

  }, 300);

});
  ;



});
}
  // 🎬 TYPEWRITER EFFECT
  function typeTitle() {
    const titleEl = document.getElementById("typeTitle");
    if (!titleEl) return;

    if (i < titleText.length) {
      titleEl.innerHTML += titleText.charAt(i);
      i++;
      setTimeout(typeTitle, 100);
    } else {
      typeSubtitle();
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

  // 🚀 START TYPING
  typeTitle();

  // ✨ SCROLL REVEAL ANIMATION
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -60px 0px",
    }
  );

  reveals.forEach((el) => observer.observe(el));

  // 🔝 NAV ACTIVE HIGHLIGHT
  const navLinks = document.querySelectorAll(".nav a");
  const sections = [...document.querySelectorAll("section[id]")];

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    },
    {
      threshold: 0.55,
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  // 🔝 BACK TO TOP BUTTON
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
    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});
