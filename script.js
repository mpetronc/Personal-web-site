const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 }
);

document
  .querySelectorAll(".top-points, .corner-signature, h1, .socials, .about, .projects")
  .forEach((element, index) => {
    element.classList.add("reveal");
    element.style.transitionDelay = `${index * 60}ms`;
    observer.observe(element);
  });

window.addEventListener("load", () => {
  window.setTimeout(() => {
    document.body.classList.remove("is-loading");
  }, 220);
});
