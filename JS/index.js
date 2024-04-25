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