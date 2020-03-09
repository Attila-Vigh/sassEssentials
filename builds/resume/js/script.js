'use strict'

let width  = window.innerWidth;
let height = window.innerHeight;

const styleCircle = ( rotationSpeed = 4)=> {
    
    let circle = document.querySelector('.circle');
    console.log( document.querySelector('.circle'));
    console.log( document.getElementsByClassName('.circle'));
    circle = circle.children;
    circle = Array.from(circle);
    let circleLength = circle.length ;
    // Create an array with all the images that will be animated
    let startingPointLeft = height > width ?  25 : 27;
    let startingPointTop  = height > width ?  25 : 27;
    
    // circle[circleLength-1].style.zIndex = circleLength
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


function rotate () {
    // let startingPointLeft = width/4;
    // let startingPointTop  = height/4;
    let rotationSpeed = 1;
    // let hw = height / width; //console.log("hw: " + hw)
    // let wh = width / height; //console.log("wh: " + wh)
    styleCircle(  rotationSpeed );
    // let spinningSpeed = 4;
    // let left = height > width ? 100 : 140;
    // let top = height > width ? 100 : 140;
    // // let circleSize = width < height ? wh : 1.4 ? hw *2 : hw; //console.log("circleSize: " + circleSize)
    // const deg = deg => deg * 3.6;
    // let ins = `\@-webkit-keyframes rotate { `
    // for (let percent = 0; percent <= 100; percent+= 10) {

    //     spinningSpeed = percent > 10 ? spinningSpeed * -1 : spinningSpeed ;
    //     // skew-x(${deg(percent) * spinningSpeed }deg)
    //     // scale(${circleSize})  

    //     ins += `${percent}% { -webkit-transform: 
    //         translate( ${left}px,          \
    //                    ${top}px )          
    //         rotate( ${deg(percent) * rotationSpeed }deg)  
    //         translate( -${left}px,         \
    //                    -${top}px)         
    //         rotate( ${deg(percent) * spinningSpeed }deg); 
    //                     } `
    //                         // console.log(deg(percent));
                            
    //                     }
    // ins += `}`;
    // console.log(ins);
    
    // return ins;
}
rotate()
// const inserStyleRule = style => document.styleSheets.item(1 ).insertRule(style)
// const inserStyleRule = style => document.styleSheets.item(0).insertRule(style)

// inserStyleRule( rotate() );

function accordion() {
    let accs = Array.from(document.getElementsByClassName("accordion"));
    let panels = Array.from(document.getElementsByClassName("panel"));

    console.log(panels);

    for (let i = 0; i < accs.length; i++) {
        accs[i].addEventListener("click", function() {
            accs.forEach( acc => acc.classList.remove("active"));
            accs[i].classList.add("active");
            panels.forEach( panel => panel.classList.remove("show"));
            panels[i].classList.add("show");
      });
    }
}

