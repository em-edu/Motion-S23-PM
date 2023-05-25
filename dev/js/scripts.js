import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools);


//INIT
gsap.set("#t-down", {scaleY:0.5});
gsap.set("#t-cross", {transformOrigin:"center"});
gsap.set("#e", {transformOrigin:"left bottom"});
gsap.set("#i", {transformOrigin:"center bottom"});
//gsap.set("#t-path", {autoAlpha:0});


function tAnimation(){
    let tl = gsap.timeline();

    tl.from("#t-down", {duration:0.5, y:"-=500", ease:"none"})

    //stretch out bottom of T
    .to("#t-down", {duration:0.25, scaleY:1.5, ease:"none"})

    //animate the bottom of the T path
    .from("#t-path", {duration:0.25, scaleY:0, ease:"none"},"-=20%")
    .fromTo("#t-path", {drawSVG:"0% 10%"},{duration:0.25, drawSVG:"90% 100%", ease:"none"}, "tAni")

    //animate the t cross bar
    .from("#t-cross", {duration:0.5, scaleX:0, ease:"elastic.out(1, 0.3)"}, "tAni")

    .to("#t-down", {duration:0.5, scaleY:1, ease:"elastic.out(1, 0.3)"}, "-=80%")

    ;


    return tl;


}

function eAnimation(){
    let tl = gsap.timeline();

    //rotate E
    tl.from("#e", {duration:0.75, rotate:120, ease:"elastic.out(1, 0.5)" })

    ;

    return tl;

}

function kAnimation(){
    let tl = gsap.timeline();

    //rotate E
    tl.from("#k", {duration:0.3, y:"-=200", ease:"bounce.out", autoAlpha:0 })

    ;

    return tl;

}

function nAnimation(){
    let tl = gsap.timeline();

    //rotate E
    tl.from("#n", {duration:0.25, scaleX:0 })

    ;

    return tl;

}

function iAnimation(){
    let tl = gsap.timeline();

    //rotate E
    tl.from("#i", {duration:0.5, scaleY:0 , ease:"elastic.out(1, 0.5)" })

    ;

    return tl;

}


function tPathAnimation(){
    let tl = gsap.timeline();

    //rotate E
    tl.to("#t-path", {duration:0.25, scaleY:0 })

    ;

    return tl;

}

function dotAnimation(){
    let tl = gsap.timeline();

    //rotate E
    tl.from("#dot", {duration:0.01, autoAlpha:0 })
    .from("#dot", {duration:1, motionPath:{
        path:"#dot-path",
        align:"#dot-path",
        alignOrigin:[0.5, 0.5]
        
    }, ease:"bounce.out" })

    ;

    return tl;

}







let mainTl = gsap.timeline();
mainTl.add(tAnimation())
.add(eAnimation(), "-=0.25")
.add(kAnimation(), "-=0.6")
.add(nAnimation(), "-=0.4")
.add(iAnimation(), "-=0.6")
.add(tPathAnimation(), "-=0.6")
.add(dotAnimation(), "-=0.5")

;




GSDevTools.create();