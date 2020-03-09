'use strict'

const inserStyleRule = style => document.styleSheets[0].insertRule(style)
let rotationSpeed = 4;
let width  = window.innerWidth;
let height = window.innerHeight;

const styleCircle = ()=> {

    // Create an array with all the images that will be animated
    let circle = document.querySelector('.circle').children;
        circle = Array.from(circle);
    let circleLength = circle.length;
    let startingPoint = height > width ? 52 : 58;

    // Add animation on each item from the animation
    for(let i = 0; i < circleLength; i++){
    
        circle[i].style.animationDuration = circleLength + "s";
        circle[i].style.animationName = "rotate";
        circle[i].style.animationDelay = `${ i / rotationSpeed }s`;
        circle[i].style.left = startingPoint - circleLength + `vw`;
        circle[i].style.top  = startingPoint - circleLength + `vh`;
        circle[i].style.height =  height > width ? "4vh" : "3vw";
        circle[i].style.width = height > width ? "4vh" : "3vw";
        
    }
} /** end  styleCircle */
styleCircle();


const rotate = ()=> {

    let spinningSpeed = 4
    let left = height > width ? width/20 : width/130;
    let top = height > width ? width/20 : width/130;
    let deg = 3.6;
    deg = deg => deg * 3.6;
    let ins = `\@-webkit-keyframes rotate { `;
    for (let percent = 0; percent <= 100; percent+= 25) {
        ins += `${percent}% { -webkit-transform: translate( ${left}vW,          \
                                                            ${top}vh )          \
                                                 rotate( ${deg(percent) * rotationSpeed }deg)    \
                                                 translate( -${left}vW,         \
                                                            -${top}vh)          \
                                                 rotate( ${deg(percent) * spinningSpeed }deg); \
                            } `
        console.log(deg(percent));
        
    }
    ins += `}`;
    
    return ins;
}

inserStyleRule( rotate() );


