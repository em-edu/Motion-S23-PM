import{gsap}from"gsap";import{ScrollTrigger}from"gsap/ScrollTrigger";gsap.registerPlugin(ScrollTrigger),gsap.set("#hero h1 span",{alpha:.25});let trailBtn=document.querySelector("#trail-btn"),heroBtnTl=gsap.timeline({paused:!0});function heroAnimation(){let r=gsap.timeline();return r.from("#first-line",{duration:1,alpha:0,y:-100}).from("#second-line",{duration:1,alpha:0,y:-100},"-=0.75").from("#trails-btn",{duration:1,y:100,alpha:0},"-=.5").from("#trails-btn i",{duration:.5,rotation:90,alpha:0,transformOrigin:"left bottom"},"-=0.5"),r}function boxAnimation(){let r=gsap.timeline({scrollTrigger:{trigger:"#box",start:"center 70%",end:"center 10%",scrub:!0,markers:!1}});return r.from("#box",{duration:1,scale:2,rotation:180,x:"-=300%"}),r}function hikingAnimation(){let r=gsap.timeline({scrollTrigger:{trigger:"#hiking",start:"top 70%",end:"bottom 10%",scrub:!0,markers:!1}});return r.from("#hiking aside div",{duration:1,scale:3,alpha:0},"hiking").from("#hiking h1",{duration:1,y:-100,alpha:0},"hiking").from("#hiking p",{duration:1,y:-100,alpha:0},"hiking"),r}function hero2Animation(){let r=gsap.timeline({scrollTrigger:{trigger:"#hero-2",start:"top 80%",end:"top 40%",scrub:!0,markers:!0}});return r.from("#bg-img",{duration:1,clipPath:"inset(0 50%)"},"herotwo").from("#hero-2 h1",{duration:1,scale:2,alpha:0},"herotwo"),r}heroBtnTl.to("#trails-btn",{duration:.25,scale:2,backgroundColor:"#881d02"},"myLabel").to("#first-line",{duration:.25,alpha:0,y:50},"myLabel").to("#second-line",{duration:.25,alpha:0,y:50},"myLabel").to("#trails-btn i",{duration:.25,rotateY:0},"-=0.15"),trailBtn.addEventListener("mouseover",(function(){heroBtnTl.play()}));let mainTl=gsap.timeline();mainTl.add(heroAnimation()).add(boxAnimation()).add(hikingAnimation()).add(hero2Animation());