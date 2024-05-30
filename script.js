

function txtanimation(){
    gsap.from(".firstline h1",{
        y:200,
        duration:1,
        ease: "power1.out",
    })
    
    gsap.from(".firstline h1 span",{
        y:200,
        duration:1,
        stagger:0.3,
        ease: "power1.out"
    })
    
    gsap.from(".secondline h1",{
        y:220,
        duration:1,
        ease: "power1.out"
    })
    
    gsap.from(".secondline h1 span",{
        y:220,
        duration:1,
        stagger:0.3,
        ease: "power1.out"
    })
    
    gsap.from(".thirdline h1",{
        y:240,
        duration:1,
        ease: "power1.out"
    })
    
    gsap.from(".thirdline h1 span",{
        y:240,
        duration:1,
        stagger:0.3,
        ease: "power1.out"
    })
    
    gsap.from(".fourthline h1",{
        y:260,
        duration:1,
        ease: "power1.out"
    })
    
    gsap.from(".fourthline h1 span",{
        y:260,
        duration:1,
        stagger:0.3,
        ease: "power1.out"
    })
}

function customcursor(){
    var main = document.querySelector(".main");
    var cursor = document.querySelector(".cursor");

    main.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y,
            duration:1,
            ease:"back.out"
        })
    })
}



txtanimation();

customcursor();


