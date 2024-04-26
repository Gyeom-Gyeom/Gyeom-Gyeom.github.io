// Screen Effects
document.querySelectorAll('p').forEach(p => {
    p.addEventListener('mouseover', function() {
        if (this.getAttribute('hover')) {
            let name = this.getAttribute('hover');
            showScreen(name);
        }
    });
    p.addEventListener('mouseleave', hideScreen);
});

function showScreen(name) {
    cursor.style.zIndex = '1';
    cursor.style.opacity = '0.6';
    cursor.style.borderRadius = '0';
    cursor.style.height = '800px';
    cursor.style.aspectRatio = '';
    cursor.style.backgroundColor = 'transparent';
    cursor.style.backgroundImage = `url(./../assets/${name}.jpeg)`;
    cursor.style.backgroundSize = 'contain';
    cursor.style.backgroundRepeat = 'no-repeat';
    cursor.style.pointerEvents = 'none';
}

function hideScreen() {
    cursor.style.zIndex = '-1';
    cursor.style.opacity = '1';
    cursor.style.borderRadius = '50%';
    cursor.style.height = '1rem';
    cursor.style.aspectRatio = '1';
    cursor.style.backgroundColor = 'rgb(130, 55, 130)';
    cursor.style.backgroundImage = '';
    cursor.style.backgroundSize = '';
    cursor.style.backgroundRepeat = '';
}




// Dark Mode
const darkModeButton = document.getElementById(`darkmode`);
const darkModeScreen = document.getElementById(`darkmode-screen`);
const innerPage = document.getElementById(`inner-page`);
let isDragging = false;
let startY;

function dragStart(e) {
    isDragging = true;
    startY = e.clientY;
    const computedStyle = window.getComputedStyle(darkModeScreen);
    darkModeScreen.initialTop = parseInt(computedStyle.top, 10) || 0;
    
    e.preventDefault();
    e.stopPropagation();
}

const darkModeButtonHeight = 16; // 1rem experiences.css

function dragging(e) {
    if (isDragging) {
        let viewportHeight = window.innerHeight;
        let newTop = darkModeScreen.initialTop + e.clientY - startY;
        // const currentY = e.clientY;
        // const diffY = currentY - startY;
        if (newTop < 0) {
            newTop = 0;
        } else if (newTop > viewportHeight - darkModeButtonHeight) {
            newTop = viewportHeight - darkModeButtonHeight;
        };
        darkModeScreen.style.top = `${newTop}px`;
        innerPage.style.bottom = `${newTop}px`;

        e.preventDefault();
        e.stopPropagation();
    }
}

function dragEnd() { isDragging = false; }

darkModeButton.addEventListener('mousedown', dragStart);
document.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragEnd);

darkModeButton.addEventListener('dragstart', (e) => { e.preventDefault(); });
