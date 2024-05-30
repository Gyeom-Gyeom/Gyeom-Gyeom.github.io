document.querySelectorAll(`a`).forEach(a => {
    a.addEventListener(`mouseover`, ()=>{
        cursor.style.cursor = `pointer`;
        cursor.style.backgroundColor = `transparent`;
        cursor.style.boxShadow = `0 0 0 0 transparent`;
        
    });
    a.addEventListener(`mouseleave`, ()=>{
        cursor.style.cursor = `none`;
        cursor.style.backgroundColor = `#79c734`;
        cursor.style.boxShadow = `0 0 2rem 2rem #79c734`;
    });
});


