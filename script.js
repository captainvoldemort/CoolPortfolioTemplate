// Dark/Light mode toggle
const toggleButton = document.querySelector('.theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
});

// Smooth Scroll and Section Transition
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ 
            behavior: 'smooth'
        });
    });
});

// Detect scroll and auto-snap to sections
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const sections = document.querySelectorAll('.section');
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            });
            ticking = false;
        });
        ticking = true;
    }
});
