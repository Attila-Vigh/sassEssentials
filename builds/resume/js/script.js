'use strict'

let width  = window.innerWidth;
let height = window.innerHeight;

const styleCircle = ()=> {
    
    let circle = document.querySelector('.circle');
    circle = circle.children;
    circle = Array.from(circle);
    let circleLength = circle.length ;
    // Create an array with all the images that will be animated
    let startingPointLeft = height > width ?  25 : 27;
    let startingPointTop  = height > width ?  25 : 27;
    let rotationSpeed = 1;
    // Add animation on each item from the animation
    for(let i = 0; i < circleLength; i++){
        
        circle[i].style.animationDuration = circleLength + "s";
        // circle[i].style.animationName = "rotate";
        circle[i].style.animationDelay = `${ i / rotationSpeed }s`;
        circle[i].style.left = startingPointLeft + "vw" ;
        circle[i].style.top  = startingPointTop + "vh" ;
        circle[i].style.height =  height > width ? "4vh" : "3vw";
        circle[i].style.width = height > width ? "4vh" : "3vw";
        circle[i].style.zIndex = circleLength - i
    }
    return circle;
} /** end  styleCircle */
styleCircle();

function btn() {
    let btns = Array.from(document.getElementsByClassName("nav-btn"));
    let panels = Array.from(document.getElementsByClassName("panel"));

    const removeClass = () => {            
        btns.forEach( btn => btn.classList.remove("active"));
        panels.forEach( panel => panel.classList.remove("show"));
    }
    
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            removeClass()
            btns[i].classList.add("active");
            
            if(btns[i].classList.contains("display")) {
                panels[i].classList.add("show");
            }
        });
    }
}
btn()