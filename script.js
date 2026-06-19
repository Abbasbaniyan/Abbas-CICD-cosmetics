// Welcome Message
window.addEventListener("load", () => {
    setTimeout(() => {
        console.log("Welcome to Abbas Cosmetics");
    }, 1000);
});

// Smooth Scroll Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});

// Shop Now Button
function showMessage() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

// Navbar Shadow on Scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
        nav.style.position = "sticky";
        nav.style.top = "0";
        nav.style.zIndex = "1000";
    } else {
        nav.style.boxShadow = "none";
    }
});

// Product Card Animation
const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});

// Scroll Reveal Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".product-card").forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
});

// Current Year Auto Update
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} Abbas Cosmetics | Made by Abbas Baniyan`;
}