gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    const contentHolderHeight = document.querySelector(".content-holder").offsetHeight;
    const imageHolderHeight = window.innerHeight;
    const additonalScrollHeight = window.innerHeight;

    const totalBodyHeight = contentHolderHeight + imageHolderHeight + additonalScrollHeight;
    document.body.style.height = `${totalBodyHeight}px`;
});

ScrollTrigger.create({
    trigger: ".website-content",
    start: "-0.1% top",
    end: "bottom bottom",
    onEnter: () => {
        gsap.set(".website-content", { position: "absolute", top: "170%" });
    },
    onLeaveBack: () => {
        gsap.set(".website-content", { position: "fixed", top: "0" });
    }
})

gsap.to(".header .letters:first-child", {
    x: () => -(innerWidth * 3),
    scale: 10,
    ease: "power2.inOut",
    scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1
    }
});

gsap.to(".header .letters:last-child", {
    x: () => innerWidth * 3,
    scale: 10,
    ease: "power2.inOut",
    scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1
    }
});

gsap.to(".header .sub-title", {
    y: () => innerWidth * 2,
    ease: "power2.inOut",
    scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1
    }
})

gsap.to(".image-holder", {
    rotation: 0,
    clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)",
    ease: "power2.inOut",
    scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1
    }
})