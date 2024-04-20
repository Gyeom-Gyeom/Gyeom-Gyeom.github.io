// Dark Mode
let modeState = "dark";
checkDisplayOfSunMoon();

document.getElementById("dark-mode-changer").addEventListener("click", function() {
    modeState = modeState==="dark"? "light": "dark";
    const darkModes = document.querySelectorAll("[dark-mode]");
    darkModes.forEach(mode => { mode.setAttribute("dark-mode", modeState); });
    checkDisplayOfSunMoon();
});

function checkDisplayOfSunMoon() {
    const sun = document.querySelector(".fa-sun");
    const moon = document.querySelector(".fa-moon");
    if (modeState === "light"){
        sun.style.display = "none";
        moon.style.display = "inline-block";
    }
    else {
        sun.style.display = "inline-block";
        moon.style.display = "none";
    }
}


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
// document.addEventListener("DOMContentLoaded", function() {
//     const scrollers = document.querySelectorAll(".scroller");
//     scrollers.forEach((scroller) => {
//         const scrollerInner = scroller.querySelector(".scroller_inner");
//         const scrollerContent = Array.from(scrollerInner.children);
//         let scrollAmount = 0;
//         const itemWidth = scrollerContent[0].offsetWidth;

//         function animateScroll() {
//             scrollAmount += 2; // 매 프레임마다 스크롤될 픽셀 수

//             if (scrollAmount >= itemWidth) {
//                 // 첫 번째 항목을 맨 뒤로 옮기고 스크롤 양을 재설정
//                 scrollerInner.appendChild(scrollerInner.firstChild);
//                 // scrollAmount = 0;
//             }

//             // 스크롤 위치 업데이트
//             scrollerInner.style.transform = `translateX(-${scrollAmount}px)`;

//             // 다음 애니메이션 프레임 예약
//             requestAnimationFrame(animateScroll);
//         }

//         // 애니메이션 시작
//         requestAnimationFrame(animateScroll);
//     });
// });



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
