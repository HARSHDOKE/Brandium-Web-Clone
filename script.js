const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


gsap.from(".sliding-txt h1",{
    y:100,
    duration:0.9,
    opacity:0
})