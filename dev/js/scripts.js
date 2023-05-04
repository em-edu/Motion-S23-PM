import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// Init
gsap.set("#hero h1 span",{alpha:0.25});

//Timeline Controls
//tl.pause();
//tl.resume();
//tl.seek(1.5);
//tl.reverse();

let trailBtn = document.querySelector("#trail-btn");
//button timeline
let heroBtnTl = gsap.timeline({paused:true});
heroBtnTl.to("#trails-btn",{duration:0.25, scale:2, backgroundColor:"#881d02"}, "myLabel")
.to("#first-line",{duration:0.25, alpha:0, y:50}, "myLabel")
.to("#second-line",{duration:0.25, alpha:0, y:50}, "myLabel")
.to("#trails-btn i",{duration:0.25, rotateY:0}, "-=0.15")
;

//button listeners
trailBtn.addEventListener("mouseover",function(){
    heroBtnTl.play();
})


function heroAnimation(){
    let tl = gsap.timeline();
    tl.from("#first-line",{duration:1,alpha:0, y:-100})
    .from("#second-line",{duration:1,alpha:0, y:-100},"-=0.75")
    .from("#trails-btn",{duration:1,y:100, alpha:0},"-=.5")
    .from("#trails-btn i",{duration:0.5,rotation:90, alpha:0, transformOrigin: "left bottom"},"-=0.5");
    return tl;
}





let mainTl = gsap.timeline();
mainTl.add(heroAnimation())

;