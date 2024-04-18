// Dark Mode
document.getElementById("dark-mode-changer").addEventListener("click", function() {
    const curMode = document.body.getAttribute("dark-mode");
    const newMode = curMode==="dark"? "light": "dark";
    const darkModes = document.querySelectorAll("[dark-mode]");
    darkModes.forEach(mode => { mode.setAttribute("dark-mode", newMode); });
});


// Color Palette
const colorPalette = document.getElementById("clr-palette");

// Call Palette
const callPalette = document.getElementById("call-palette");
callPalette.addEventListener("click", function() {
    let curState = callPalette.getAttribute("is-appear");
    let newSate = curState==="false"? "true": "false";
    callPalette.setAttribute("is-appear", newSate);

    colorPalette.style.top = newSate==="true"? "160px": "-500px";
});

const clrCircles = document.querySelectorAll(".clr-circle");
clrCircles.forEach(circle => {
    circle.addEventListener("click", function() {
        let color = circle.style.backgroundColor;
        document.documentElement.style.setProperty('--clr-concept', color);
    });
});

// Infinite Scroller
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}    

function addAnimation(){
    scrollers.forEach((scroller)=>{
        scroller.setAttribute("data-animated", true);
        
        const scrollerInner = scroller.querySelector(".scroller_inner");
        const scrollerContent = Array.from(scrollerInner.children);
        
        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });    
    });    
}    

// Cursor
const cursor = document.getElementById(`cursor`);

function isTouchDevice(){
    try{
        document.createEvent(`TouchEvent`);
        return true;
    } catch(e) {
        return false;
    }
}

function move(e){
    let x, y;
    try{
        x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    } catch (error){}
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
};

document.addEventListener("mousemove", (e)=>{
    move(e);
});

document.addEventListener("touchmove", (e)=>{
    move(e);
});