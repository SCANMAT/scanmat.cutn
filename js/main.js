const navToggle = document.querySelector("[data-nav-toggle]");
const navList = document.querySelector("[data-nav-list]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const sections = document.querySelectorAll("main section[id]");

function closeNavigation() {
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
    navList?.classList.remove("is-open");
}

navToggle?.addEventListener("click", () => {
    const isOpen = navList?.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", Boolean(isOpen));
    navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

navLinks.forEach((link) => {
    link.addEventListener("click", closeNavigation);
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            navLinks.forEach((link) => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === `#${entry.target.id}`
                );
            });
        });
    },
    {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0
    }
);

sections.forEach((section) => observer.observe(section));
