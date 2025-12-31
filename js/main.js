const element = document.querySelector('.alamode');

setInterval(() => {
    element.style.animation = 'none';

    setTimeout(() => {
        element.style.animation = 'purupuru 1s linear';
    }, 50);
}, 10000);
//////
const katakata = document.querySelector('.katakata');

setInterval(() => {
    katakata.style.animation = 'none';

    setTimeout(() => {
        katakata.style.animation = 'katakata .1s 8';
    }, 50);
}, 5000);
/////
const fade = document.querySelector('.tree');

setInterval(() => {
    fade.style.animation = 'none';

    setTimeout(() => {
        fade.style.animation = 'fade 3s ease-in-out';
    }, 50);
}, 18000);
/////
const images = document.querySelectorAll('.uchidasaki img');

setInterval(() => {
    images.forEach(img => {
        img.style.animation = 'none';
    });

    setTimeout(() => {
        images.forEach((img, index) => {
            img.style.animation = `blink 3s step-end infinite, bounce 1s ease-in-out infinite`;
            img.style.animationDelay = `${index}s`;
        });
    }, 100);
}, 8000);
/////

gsap.registerPlugin(ScrollTrigger);

gsap.to(".name-top", {
    scale: 0.05,
    rotation: 360,
    duration: 1,
    scrollTrigger: {
        trigger: "header",
        start: "top",
        end: "bottom",
        scrub: true,
        invalidateOnRefresh: true,
    }
});