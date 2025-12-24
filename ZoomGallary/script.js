document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger, Flip, SplitText);


    const titleEl = document.querySelector(".title h1")
    if (window.SplitText && titleEl) {
        const split = new SplitText(titleEl, { type: "chars", charsClass: "char" });
        console.log(split, "Split")

        gsap.from(split.chars, {
            y: 50,
            opacity: 0,
            rotation: "random(-20, 20)",
            duration: 0.5,
            ease: "back",
            stagger: 0.05
        });
    }

    let galleryItem = document.querySelectorAll(".gallery div");

    galleryItem.forEach((el) => el.classList.add("flip"));

    let state = Flip.getState([".gallery div", ".gallery div .img"], {
        props: "borderRadius"
    });

    galleryItem.forEach((el) => el.classList.remove("flip"));


    Flip.to(state, {
        scale: true,
        simple: true,
        scrollTrigger: {
            trigger: "section:nth-child(2)",
            start: "center center",
            end: "+=300",
            scrub: true,
            pin: true,
            markers: true
        }
    })
})