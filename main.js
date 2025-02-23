let colorcards = document.querySelectorAll('.color-cards div');

let generatecolor = function(){
    colorcards.forEach((card) => {

        // Generate Color
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);        
        let b = Math.floor(Math.random() * 256);

        let color = `rgb(${r}, ${g}, ${b})`;

        // Color Apply
        card.style.backgroundColor = `${color}`;

        // Color Display
        let rgbdisplay = card.querySelector('p');
        rgbdisplay.innerText = color.toUpperCase();
    }
)};

const display = document.querySelectorAll('.color-card p');
display.forEach((card) => {
    card.addEventListener('click', (() => {
        navigator.clipboard.writeText(card.innerText.toLowerCase());    
    }))
})

document.getElementById('generate').addEventListener('click', generatecolor);