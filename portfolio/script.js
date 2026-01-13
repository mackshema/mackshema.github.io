const text =
    "I design intelligent systems that detect threats, prevent fraud, and secure real-world environments using Artificial Intelligence and Cybersecurity.";

let index = 0;
function typeEffect() {
    const typingElement = document.getElementById("typing");
    if (typingElement && index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 30);
    }
}

// Typing effect on load
window.onload = typeEffect;

// Scroll reveal logic
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal, .reveal-card").forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });

    // Cinematic Parallax for Hero Image
    const img = document.querySelector(".hero-image img");
    if (img) {
        img.style.transform = `translateY(${window.scrollY * 0.05}px)`;
    }
});

// Initial check in case elements are already in view
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".reveal, .reveal-card").forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// Navbar Scroll Blur Effect
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    }
});

// Skill Hover Logic
const skills = document.querySelectorAll(".skill");
const infoBox = document.getElementById("skillInfo");

if (skills && infoBox) {
    skills.forEach(skill => {
        skill.addEventListener("mouseenter", () => {
            infoBox.textContent = skill.dataset.info;
        });
    });
}

// Project Hover Logic
const projects = document.querySelectorAll(".project-item");
const projectInfo = document.getElementById("projectInfo");

if (projects && projectInfo) {
    projects.forEach(project => {
        project.addEventListener("mouseenter", () => {
            projectInfo.textContent = project.dataset.info;
        });

        project.addEventListener("click", () => {
            projectInfo.textContent = project.dataset.info;
        });
    });
}

// Project Dropdown Logic
document.querySelectorAll(".project-item").forEach(item => {
    const title = item.querySelector(".project-title");

    if (title) {
        title.addEventListener("mouseenter", () => {
            document.querySelectorAll(".project-item").forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        });

        title.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    }
});

// Skill Dropdown Logic
document.querySelectorAll(".skill-item").forEach(item => {
    const title = item.querySelector(".skill-title");

    if (title) {
        title.addEventListener("mouseenter", () => {
            document.querySelectorAll(".skill-item").forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        });

        title.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    }
});
