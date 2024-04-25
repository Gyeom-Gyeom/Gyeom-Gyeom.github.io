// Screen Effects
const hoverKyunghee = document.querySelectorAll('.hover-kyunghee');

function showScreen() {
    cursor.style.zIndex = '1';
    cursor.style.opacity = '0.6';
    cursor.style.borderRadius = '0';
    cursor.style.height = '800px';
    cursor.style.aspectRatio = '';
    cursor.style.backgroundColor = 'transparent';
    cursor.style.backgroundImage = `url(./../assets/KyungHeeUniv.jpeg)`;
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

hoverKyunghee.forEach(e => {
    e.addEventListener('mouseenter', showScreen);
});
hoverKyunghee.forEach(e => {
    e.addEventListener('mouseleave', hideScreen);
});

// Dark Mode
let mode = `bright`;
