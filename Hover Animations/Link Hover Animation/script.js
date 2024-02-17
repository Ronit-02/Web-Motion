const { gsap } = window;

// GSAP timeline for the initial animation
// gsap
//     .timeline()
//     .set(".container", { autoAlpha: 1 })
//     .from(".link-text", {
//         delay: 1,
//         duration: 0.85,
//         xPercent: 25,
//         yPercent: 125,
//         stagger: 0.095,
//         skewY: gsap.utils.wrap([-8, 8]),
//         ease: "expo.out",
//     })
//     .set(".container", { pointerEvents: "all" });

// Setting default values for GSAP animations
gsap.defaults({
    duration: 0.55,
    ease: "expo.out",
});

// Looping through each link and adding the hover effect
const links = document.querySelectorAll(".link");
links.forEach((link) => {
    
    const linkImageWrapper = link.querySelector(".link-image-wrapper");
    
    // Getting the bounds
    const linkBounds = link.getBoundingClientRect();
    const linkImageWrapperBounds = linkImageWrapper.getBoundingClientRect();

    // Mouse Enter Function
    const onMouseEnter = () => {
        gsap.set(linkImageWrapper, {
            scale: 0.8,
            xPercent: 25,
            yPercent: 50,
            rotation: -15,
        });

        gsap.to(linkImageWrapper, { 
            opacity: 1, 
            scale: 1, 
            yPercent: 0, 
            rotation: 0,
        });
    }

    // Mouse Leave Function
    const onMouseLeave = () => {
        gsap.to(linkImageWrapper, { 
            opacity: 0, 
            yPercent: -50, 
            xPercent: 25,
            scale: 0.8, 
            rotation: -15,
        });
    }

    // Mouse Move Function
    const onMouseMove = ({x, y}) => {
        let yOffset = linkBounds.top / linkImageWrapperBounds.height;
        yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);

        gsap.to(linkImageWrapper, {
            duration: 1.25,
            x: Math.abs(x - linkBounds.left) - linkImageWrapperBounds.width / 1.55,
            y: Math.abs(y - linkBounds.top) - linkImageWrapperBounds.height / 2 - yOffset,
        });
    }

    link.addEventListener("mouseenter", onMouseEnter);
    link.addEventListener("mouseleave", onMouseLeave);
    link.addEventListener("mousemove", onMouseMove);

    window.addEventListener("resize", () => {
        linkBounds = link.getBoundingClientRect();
    });
});