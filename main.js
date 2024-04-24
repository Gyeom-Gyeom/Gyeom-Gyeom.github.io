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
    // console.log(`${x}px`, `${y}px`);
};

document.addEventListener("mousemove", (e)=>{
    move(e);
});

document.addEventListener("touchmove", (e)=>{
    move(e);
});



// String Effects
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(`.string`).forEach(string => {
        string.addEventListener('mouseover', () => {
            let mouseLeft = cursor.style.left;
            let mouseTop = cursor.style.top;
            console.log(`mouseLeft: ${mouseLeft}, mouseTop: ${mouseTop}`);
            
            const rect = string.getBoundingClientRect();
            // return the values (viewport 기준)
            console.log(`top: ${rect.top}px`, `left: ${rect.left}px`);
        });
    });
});

// Cursor Size
// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll(`[cursor-interact="true"]`).forEach(element => {
//         element.addEventListener('mouseover', () => {
//             cursor.style.width = "5rem";
//         });
//         element.addEventListener('mouseout', () => {
//             cursor.style.width = "1rem";
//         });
//     });
// });


// Dynamic Text
// document.addEventListener("DOMContentLoaded", () => {
//     const dynamicText = document.getElementById(`dynamic-text`);
//     const phrases = ["ASML TS Engineer", "Front-End Engineer", "Web Designer"];
//     const phrases_num = phrases.length;
//     let currentPhraseIndex = 0;
//     let charIndex = 0;
//     let isDeleting = false;

//     function type() {
//         let currentPhrase = phrases[currentPhraseIndex];
//         let displayText = currentPhrase.substring(0, charIndex);

//         if (isDeleting) {
//             if (charIndex > 0) {
//                 charIndex--;
//                 displayText = currentPhrase.substring(0, charIndex);
//             } else {
//                 isDeleting = false;
//                 currentPhraseIndex = (currentPhraseIndex + 1) % phrases_num;
//             }
//         } else {
//             if (charIndex <= currentPhrase.length) {
//                 charIndex++;
//                 displayText = currentPhrase.substring(0, charIndex);
//             } else {
//                 setTimeout(() => {
//                     isDeleting = true;
//                 }, 1000);
//             }
//         }

//         dynamicText.textContent = displayText;
//         setTimeout(type, isDeleting ? 100 : 150);
//     }

//     setTimeout(type, 2000);
// });




