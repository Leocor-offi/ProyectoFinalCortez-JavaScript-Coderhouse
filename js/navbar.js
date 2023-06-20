const button = document.querySelector('#navButton');
const menu = document.querySelector('#menu');
const btncart = document.getElementById('mostrarcart');
const btncartDos = document.getElementById('mostrarcartDos');

button.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})


btncart.addEventListener('click', function () {
    const cart = document.getElementById('cart');
    if (cart.style.display != 'none') {
        cart.style.display = 'none';
    }
    else {
        cart.style.display = 'block';
    }
})

btncartDos.addEventListener('click', function () {
    const cart = document.getElementById('cart');
    if (cart.style.display != 'none') {
        cart.style.display = 'none';
    }
    else {
        cart.style.display = 'block';
    }
})