const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.12 });

reveals.forEach(r => observer.observe(r));

document.querySelectorAll(".science-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
    // Interactive brew sections
document.querySelectorAll(".brew-section").forEach(section => {
  section.addEventListener("click", () => {
    section.classList.toggle("active-section");
  });
});

  });
});
