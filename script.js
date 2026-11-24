// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
});

// CLOSE MOBILE MENU AFTER CLICKING A LINK
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

// COLLEGE SEARCH
const searchInput = document.getElementById("collegeSearch");
const searchButton = document.getElementById("searchButton");
const collegeCards = document.querySelectorAll(".college-card");
const noResults = document.getElementById("noResults");

function searchColleges() {
  const searchText = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;

  collegeCards.forEach(card => {
    const collegeName = card.querySelector("h3").textContent.toLowerCase();
    const collegeType = card.querySelector(".college-type").textContent.toLowerCase();
    const collegeLocation = card.querySelector("p").textContent.toLowerCase();

    const matches = collegeName.includes(searchText) ||
      collegeType.includes(searchText) ||
      collegeLocation.includes(searchText);

    card.style.display = matches ? "" : "none";
    if (matches) visibleCount++;
  });

  noResults.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", searchColleges);

searchButton.addEventListener("click", () => {
  searchColleges();
  document.getElementById("colleges").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    searchColleges();
    document.getElementById("colleges").scrollIntoView({ behavior: "smooth" });
  }
});

// IMAGE FALLBACK: show a clear placeholder if an external photo is unavailable.
document.querySelectorAll(".college-image img, .about-image img").forEach(img => {
  img.addEventListener("error", () => {
    img.alt = "Campus photo could not be loaded. Check your internet connection.";
    img.style.objectFit = "contain";
    img.style.padding = "24px";
    img.style.background = "#e8efeb";
    img.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450"><rect width="100%" height="100%" fill="#e8efeb"/><text x="50%" y="48%" text-anchor="middle" fill="#176b57" font-family="Arial" font-size="30">Campus Navigator</text><text x="50%" y="58%" text-anchor="middle" fill="#71817a" font-family="Arial" font-size="18">Photo unavailable</text></svg>'
    );
  }, { once: true });
});

console.log("Campus Navigator website loaded successfully!");
