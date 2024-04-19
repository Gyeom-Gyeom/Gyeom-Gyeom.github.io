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

    colorPalette.style.top = newSate==="true"? "11rem": "-500px";
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


// Dynamic Text
document.addEventListener("DOMContentLoaded", function() {
    const phrases = ["Semiconductor Engineer", "Front-End Engineer", "Web Designer"];
    const phrases_num = phrases.length;
    let currentPhraseIndex = 0;
    const textElement = document.getElementById("dynamic-text");
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        let currentPhrase = phrases[currentPhraseIndex];
        let displayText = currentPhrase.substring(0, charIndex);

        if (isDeleting) {
            if (charIndex > 0) {
                charIndex--;
                displayText = currentPhrase.substring(0, charIndex);
            } else {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases_num;
            }
        } else {
            if (charIndex <= currentPhrase.length) {
                charIndex++;
                displayText = currentPhrase.substring(0, charIndex);
            } else {
                setTimeout(() => {
                    isDeleting = true;
                }, 1000);
            }
        }

        textElement.textContent = displayText;
        setTimeout(type, isDeleting ? 100 : 150);
    }

    setTimeout(type, 2000);
});
