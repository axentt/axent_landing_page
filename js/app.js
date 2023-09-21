

// Navigation Bar animation
const burger = document.querySelector(".burger");

burger.addEventListener("click", function (e) {
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    nav.classList.toggle("nav-active");
    // burger animation
    burger.classList.toggle("toggle");

    // Animating menu tray
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 3 + 0.3
                }s`;
        }
    });
});

