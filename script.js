const roles = [
  "AI × Cybersecurity Engineer",
  "Threat Detection Specialist",
  "Computer Vision Developer"
];

let roleIndex = 0;
let charIndex = 0;
const typingEl = document.getElementById("typing");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    typingEl.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 70);
  } else {
    setTimeout(eraseRole, 1200);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    typingEl.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 40);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 400);
  }
}

// Start the typing animation
document.addEventListener('DOMContentLoaded', () => {
  if (typingEl) {
    typeRole();
  }
});
