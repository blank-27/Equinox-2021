// ///////////////////////EVENTS FUNC/////////////


const event_1 = document.querySelector('#event_1');
const event_2 = document.querySelector('#event_2');
const event_3 = document.querySelector('#event_3');
const event_4 = document.querySelector('#event_4');
const event_5 = document.querySelector('#event_5');
const event_6 = document.querySelector('#event_6');

let yheight,xwidth;
let events = [event_1,event_2,event_3,event_4,event_5,event_6]

event_1.addEventListener('click',(e) => {
    gsap.to("#event_1",{
        duration:1,
        scale:0.4   ,
        left:-e.view.innerWidth * 0.04,
        top:-e.view.innerHeight * 0.05,
        ease:"power4.out"
    })
    gsap.to("#event_2",{
        duration:1,
        scale:0,
        opacity:0,
        ease:"power4.out"
    })
    gsap.to("#event_3",{
        duration:1,
        scale:0.3,
        top:-e.view.innerHeight * 0.19,
        ease:"power4.out"
    })
    gsap.to("#event_4",{
        duration:1,
        scale:0,
        opacity:0,
        ease:"power4.out"
    })
    gsap.to("#event_5",{
        duration:1,
        scale:0,
        opacity:0,
        ease:"power4.out"
    })
    gsap.to("#event_6",{
        duration:1,
        opacity:0,
        scale:0,
        ease:"power4.out"
    })

    gsap.to(".workshop",{
        duration:1.5,
        display:"block",
        width:1365,
        opacity:1,
        ease:"power4.out"
    })


})

event_2.addEventListener('click',(e) => {
    gsap.to("#event_2",{
        duration:1,
        scale:0.4,
        left: -e.view.innerWidth * 0.04 + 5,
        top:-e.view.innerHeight + 0.2 * e.view.innerHeight,
        ease:"power4.out"
    })
    gsap.to("#event_1",{
        duration:1,
        scale:0,
        opacity:0,
        ease:"power4.out"
    })
    gsap.to("#event_3",{
        duration:1,
        scale:0.3,
        top:-e.view.innerHeight * 0.19,
        ease:"power4.out"
    })
    gsap.to("#event_4",{
        duration:1,
        scale:0,
        opacity:0,
        ease:"power4.out"
    })
    gsap.to("#event_5",{
        duration:1,
        scale:0,
        opacity:0,
        ease:"power4.out"
    })
    gsap.to("#event_6",{
        duration:1,
        opacity:0,
        scale:0,
        ease:"power4.out"
    })
})


event_5.addEventListener('click',(e) => {
    gsap.to("#event_5",{
        duration:1,
        scale:0.4,
        top:-0.06 * e.view.innerHeight,
        left:-e.view.innerWidth + 0.11 * e.view.innerWidth,
        ease:"power4.out"
    })
    gsap.to("#event_2",{
        duration:1,
        scale:0,
        opacity:0,
        ease:"power4.out"
    })
    gsap.to("#event_3",{
        duration:1,
        scale:0.3,
        top:-e.view.innerHeight * 0.19,
        ease:"power4.out"
    })
    gsap.to("#event_4",{
        duration:1,
        scale:0,
        opacity:0,
        ease:"power4.out"
    })
    gsap.to("#event_1",{
        duration:1,
        scale:0,
        opacity:0,
        ease:"power4.out"
    })
    gsap.to("#event_6",{
        duration:1,
        scale:0,
        opacity:0,
        ease:"power4.out"
    })
})


event_6.addEventListener('click',(e) => {
    gsap.to("#event_6",{
        duration:1,
        scale:0.4,
        // yPercent:-e.view.innerHeight * 0.54,
        // xPercent:-e.view.innerWidth * 0.46,
        // top:-590,
        // left:-1370,
        top:-e.view.innerHeight + 0.19 * e.view.innerHeight,
        left:-e.view.innerWidth + 0.11 * e.view.innerWidth, 
        ease:"power4.out"
    })
    console.log(e)
    gsap.to("#event_2",{
        duration:1,
        scale:0,
        opacity:0,
        ease:"power4.out"
    })
    gsap.to("#event_3",{
        duration:1,
        scale:0.3,
        top:-e.view.innerHeight * 0.19,
        ease:"power4.out"
    })
    gsap.to("#event_4",{
        duration:1,
        scale:0,
        opacity:0,
        ease:"power4.out"
    })
    gsap.to("#event_5",{
        duration:1,
        scale:0,
        opacity:0,
        ease:"power4.out"
    })
    gsap.to("#event_1",{
        duration:1,
        scale:0,
        opacity:0,
        ease:"power4.out"
    })

    gsap.to('.team',{
        duration:1,
        opacity:1,
        height:550
    })
})






////////////////HOME/////////

event_3.addEventListener('click',(e) => {
        
    gsap.to("#event_1",{
        duration:1,
        scale:1,
        opacity:1,
        top:0,
        left:0,
        ease:"power4.out"
    })
    gsap.to("#event_2",{
        duration:1,
        scale:1,
        opacity:1,
        top:0,
        left:0,
        ease:"power4.out"
    })
    gsap.to("#event_3",{
        duration:1,
        scale:1,
        top:0,
        left:0,
        ease:"power4.out"
    })
    gsap.to("#event_4",{
        duration:1,
        scale:1,
        opacity:1,
        top:0,
        left:0,
        ease:"power4.out"
    })
    gsap.to("#event_5",{
        duration:1,
        scale:1,
        opacity:1,
        top:0,
        left:0,
        ease:"power4.out"
    })
    gsap.to("#event_6",{
        duration:1,
        scale:1,
        opacity:1,
        top:0,
        left:0,
        ease:"power4.out"
    })

    gsap.to(".workshop",{
        duration:0.6,
        width:0,
        opacity:0,
        display:"none",
        ease:"power4.out"
    })

    
    gsap.to('.team',{
        duration:1,
        opacity:0,
        height:0
    })

    
    gsap.to("#board",{
        duration:0.1,
        display:"none",
        ease:"power4.out"
    })

})

///////////////ABOUT//////////////////

// var rule = CSSRulePlugin.getRule("#content"); 

event_4.addEventListener("click",(e) => {
    gsap.to("#event_1",{
        duration:1,
        scale:0,
        top:0,
        ease:"power4.out"
    })
    gsap.to("#event_2",{
        duration:1,
        scale:0,
        opacity:0,
        ease:"power4.out"
    })
    gsap.to("#event_3",{
        duration:1,
        scale:0.3,
        top:-e.view.innerHeight * 0.19,
        ease:"power4.out"
    })
    gsap.to("#event_4",{
        duration:1,
        scale:0,
        opacity:0,
        ease:"power4.out"
    })
    gsap.to("#event_5",{
        duration:1,
        scale:0,
        opacity:0,
        ease:"power4.out"
    })
    gsap.to("#event_6",{
        duration:1,
        opacity:0,
        scale:0,
        ease:"power4.out"
    })

    gsap.to("#board",{
        duration:1,
        display:"block",
        ease:"power4.out"
    })

    gsap.to("#bot",{
        duration:0.5,
        top:200,
        left:100,
        ease:"power4.out"
    })
    


})








// TEST
document.querySelector("html").addEventListener("click",(e) => {
    // console.log(e.view) 
    console.log(e.view.outerHeight , e.view.outerWidth)
    
    console.log(e.view.innerHeight , e.view.innerWidth)

    
yheight = -e.view.innerHeight + 0.2 * e.view.innerHeight;
xwidth= -e.view.innerWidth + 0.11 * e.view.innerWidth;
})