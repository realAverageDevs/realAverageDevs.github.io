document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation
    document.querySelectorAll("button[data-scroll]").forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-scroll");
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Incoming Transmission Effect (Typing Text Animation)
    const headerText = "Super Earth Needs You – Deploy Diver Data Today!";
    let i = 0;
    const speed = 50; // Typing speed in ms
    const headerElement = document.getElementById("animatedHeader");

    function typeWriter() {
        if (i < headerText.length) {
            headerElement.innerHTML += headerText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            headerElement.classList.add("glow"); // Adds glow effect after typing
        }
    }

    headerElement.innerHTML = ""; // Clear existing text
    typeWriter();
    
});

document.addEventListener("DOMContentLoaded", function () {
    // === 1. Generate Bigger, Brighter Moving Stars ===
    const numStars = 50; // Adjust if needed
    const starsContainer = document.getElementById("stars");

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${Math.random() * 6 + 3}s`; // Slightly longer duration
        star.style.width = `${Math.random() * 6 + 2}px`; // Random star size
        star.style.height = star.style.width; // Keep it circular
        starsContainer.appendChild(star);
    }
});

