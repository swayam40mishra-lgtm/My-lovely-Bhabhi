document.addEventListener("DOMContentLoaded", () => {

  // 🔥 TEXT CONTENT (YOU CAN EDIT THIS)
  const titleText = "Some people don’t just come into our life… they quietly become our life ~ Swayam Mishra for his bhabhi..";

  const subtitleText = "Not everything can be said to a mother… maybe that’s why God gave us bhabhis. And you are the best example of that, Renu Mishra";

  let i = 0;
  let j = 0;

  // 🎬 TYPEWRITER EFFECT
  function typeTitle() {
    const titleEl = document.getElementById("typeTitle");
    if (!titleEl) return;

    if (i < titleText.length) {
      titleEl.innerHTML += titleText.charAt(i);
      i++;
      setTimeout(typeTitle, 50);
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
