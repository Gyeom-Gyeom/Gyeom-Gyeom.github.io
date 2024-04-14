const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    console.log(scrollers);
    addAnimation();
    console.log("no");
} else {
    console.log("yes");
}

function addAnimation(){
    scrollers.forEach((scroller)=>{
        scroller.setAttribute("data-animated", true);
    });
}