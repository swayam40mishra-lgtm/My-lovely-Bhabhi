alert("JS is working");

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");
  const navLinks = document.querySelectorAll(".nav a");
  const topBtn = document.getElementById("topBtn");
  const sections = [...document.querySelectorAll("section[id]")];

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

  const toggleTopButton = () => {
    if (window.scrollY > 500) {
      topBtn.classList.add("show");
    } else {
      topBtn.classList.remove("show");
    }
  };

  window.addEventListener("scroll", toggleTopButton);
  toggleTopButton();

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });const titleText = " Some people don’t just come into our life…
they quietly become our life ~ Swayam mishra for his bhabhi  ..";
const subtitleText = "Not everything can be said to a mother…
maybe that’s why God gave us bhabhis.
And you are the best example of that, Renu Mishra";

let i = 0;
let j = 0;

function typeTitle() {
  if (i < titleText.length) {
    document.getElementById("typeTitle").innerHTML += titleText.charAt(i);
    i++;
    setTimeout(typeTitle, 50);
  } else {
    typeSubtitle();
  }
}

function typeSubtitle() {
  if (j < subtitleText.length) {
    document.getElementById("typeSubtitle").innerHTML += subtitleText.charAt(j);
    j++;
    setTimeout(typeSubtitle, 30);
  }
}

window.onload = () => {
  typeTitle();
};
  
});

