const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.getElementById('btn');
const currentColor = document.querySelector('.color');

btn.addEventListener('click', changeColor);

function changeColor() {
    let hexCode = '#';
    
    for (i=0; i<6; i++) {
        const randomNumber = Math.floor(Math.random()*hex.length);
        hexCode += hex[randomNumber];
    }
    console.log(hexCode);
    document.body.style.backgroundColor = hexCode;
    currentColor.textContent = hexCode;
}
