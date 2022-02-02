// using forEach() method

let value=0;
const counter = document.querySelector('span');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    console.log(btn);
    btn.addEventListener('click', function () {
        if (btn.classList.contains('decrement')) {
            value--;
        } else if (btn.classList.contains('increment')) {
            value++;
        } else {
            value = 0;
        }
        counter.textContent = value;
    });
});