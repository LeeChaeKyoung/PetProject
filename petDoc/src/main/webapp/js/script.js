
const slideTL = gsap.timeline();
const maskTL = gsap.timeline();
const mainTL = gsap.timeline({ 
    repeat: -1, 
    onRepeat: () => {
        gsap.set('#texttwo', { opacity: 0 });
        gsap.set('#slidebar', { scaleY: 0.1 });
        gsap.set('#textone h1', { opacity: 1 });
    }
});

gsap.set('#texttwo', { opacity: 0 });
gsap.set('#slidebar', { scaleY: 0.1 });

slideTL
    .to('#slidebar', 1, { 
        scaleY: 1, 
        ease: "back.out" 
    })
    .to('#slidebar', 1.5, { 
        x: 600, 
        delay: 0.5, 
        ease: "back.inOut(0.8)" 
    })
    .to('#slidebar', 1.5, { 
        x: 0, 
        delay: 0.5, 
        ease: "back.inOut(0.8)" 
    })
    .to('#slidebar', 1.5, { 
        x: 600, 
        delay: 0.5, 
        ease: "back.inOut(0.8)" 
    })
    .to('#slidebar', 1, { 
        scaleY: 0.1, 
        ease: "back.in" 
    });

maskTL
    .to('#textone', 1.5, {
        ease: "back.inOut(0.8)", 
        "clip-path": "polygon(0 0, 91% 0, 81% 100%, 0% 100%)",
        onComplete: () => {
            gsap.set('#texttwo', { opacity: 1 });
        }
    })
    .to('#textone', 1.5, {
        delay: 0.5,
        ease: "back.inOut(0.8)", 
        "clip-path": "polygon(0 0, 18% 0, 8% 100%, 0% 100%)",
        onComplete: () => {
            gsap.set('#textone h1', { opacity: 0 });
        }
    })
    .to('#textone', 1.5, {
        delay: 0.5,
        ease: "back.inOut(0.8)", 
        "clip-path": "polygon(0 0, 91% 0, 81% 100%, 0% 100%)"
    }); 


mainTL
    .add(slideTL)
    .add(maskTL, 1.5);