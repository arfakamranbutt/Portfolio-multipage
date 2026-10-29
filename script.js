// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal elements as they scroll into view
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// Copy email to clipboard on click
const emailLink = document.getElementById("emailLink");
const copyNote = document.getElementById("copyNote");
if (emailLink && copyNote) {
  emailLink.addEventListener("click", (e) => {
    if (!navigator.clipboard) return;
    e.preventDefault();
    navigator.clipboard.writeText(emailLink.textContent.trim())
      .then(() => {
        copyNote.textContent = "Email copied to clipboard";
        setTimeout(() => (copyNote.textContent = ""), 2500);
      })
      .catch(() => (window.location.href = emailLink.href));
  });
}

// ---------- AURA EMBEDDED BANNER INTERACTION ----------
const auraBanner = document.getElementById("auraBanner");
const auraCompanion = document.getElementById("auraCompanion");
const auraText = document.getElementById("auraText");

const auraQuotes = [
  "...and currently crafting more exciting AI & software projects behind the scenes! ✧",
  "Fun fact: Arfa builds algorithms & routing engines in Python & C++! 💻",
  "Click any project card above to view the full source code on GitHub! 🚀",
  "Aura approved! ✨ Feel free to collaborate with Arfa anytime!"
];

let quoteIndex = 0;

if (auraBanner && auraText && auraCompanion) {
  auraBanner.addEventListener("click", () => {
    // Spin Aura
    auraCompanion.classList.add("is-excited");
    setTimeout(() => auraCompanion.classList.remove("is-excited"), 600);

    // Cycle quote
    quoteIndex = (quoteIndex + 1) % auraQuotes.length;
    auraText.textContent = auraQuotes[quoteIndex];
  });
}