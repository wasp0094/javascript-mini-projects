const colors = ['green', 'blue', '#fd9f91', '#ee6600', 'rgb(255, 99, 71)', 'rgba(255, 99, 71, 0.4)'];

const btn = document.getElementById('btn');
const currentColor = document.querySelector('.color');

btn.addEventListener('click', changeColor);

function changeColor() {
    const randomNumber = Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    currentColor.textContent = colors[randomNumber];
}