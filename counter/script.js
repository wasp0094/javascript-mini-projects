// targeting each button specifically

const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
let counter = document.querySelector('span');

increment.addEventListener('click', function() {
    let value = parseInt(counter.innerHTML);
    value++;
    counter.innerHTML = value;
});

decrement.addEventListener('click', function() {
    let value = parseInt(counter.innerHTML);
    value--;
    counter.innerHTML = value;
});

reset.addEventListener('click', function() {
    counter.innerHTML = 0;
});