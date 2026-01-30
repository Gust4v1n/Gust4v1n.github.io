document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
        smoother = ScrollSmoother.create({ 
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1,
            effects: true 
        });
    });

    mm.add("(max-width: 767px)", () => {
        smoother = ScrollSmoother.create({ 
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1,
            effects: false 
        });
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = e.currentTarget.getAttribute("href");
                smoother.scrollTo(target, true);
        });
    });

    
    document.querySelectorAll('.hero-btns a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = e.currentTarget.getAttribute("href");
                smoother.scrollTo(target, true);
        });
    });
});