// Add interactive hover effects
document.addEventListener("DOMContentLoaded", function () {
  const shapes = document.querySelectorAll(".shape");

  shapes.forEach((shape) => {
    shape.addEventListener("mouseenter", function () {
      this.style.animationDuration = "2s";
    });

    shape.addEventListener("mouseleave", function () {
      this.style.animationDuration = "6s";
    });
  });

  // Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".features-section, .cta-section")
    .forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(50px)";
      section.style.transition = "all 0.8s ease";
      observer.observe(section);
    });
});


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});