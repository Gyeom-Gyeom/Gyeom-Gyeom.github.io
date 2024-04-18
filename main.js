// Dark Mode
document.getElementById("dark-mode-changer").addEventListener("click", function() {
    const body = document.body;
    if (body.getAttribute("dark-mode") === "dark") {
        body.setAttribute("dark-mode", "light");
    } else {
        body.setAttribute("dark-mode", "dark");
    }
});

// Color Changer
const colorChanger = document.getElementById("color-changer");
colorChanger.addEventListener("click", function() {
    let newWidth = colorChanger.style.width==="240px"? "40px": "240px";
    colorChanger.style.width = newWidth;
    
    let colorCircles = document.querySelectorAll(".color-circle");
    let circleDiameter = newWidth === "240px" ? "30px" : "0px";
    colorCircles.forEach(circle => {
        circle.style.width = circleDiameter;
        circle.style.height = circleDiameter;
    });
});

const colorCircles = document.querySelectorAll(".color-circle");
colorCircles.forEach(circle => {
    circle.addEventListener("click", function() {
        let color = this.style.backgroundColor;
        let span = document.querySelector("span[portionColor]");
        span.style.color = color;
        span.setAttribute("portionColor", color);
    });
});

// Color Palette
const colorPalette = document.getElementById("clr-palette");

// Call Palette
const callPalette = document.getElementById("call-palette");
callPalette.addEventListener("click", function() {
    let curState = callPalette.getAttribute("is-appear");
    let newSate = curState==="false"? "true": "false";
    callPalette.setAttribute("is-appear", newSate);

    colorPalette.style.right = newSate==="true"? "100px": "-300px";
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

