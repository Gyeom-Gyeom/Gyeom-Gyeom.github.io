// Dark Mode
document.getElementById("dark-mode-changer").addEventListener("click", function() {
    const body = document.body;
    if (body.getAttribute("dark-mode") === "dark") {
        body.setAttribute("dark-mode", "light");
    } else {
        body.setAttribute("dark-mode", "dark");
    }
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

