// const cart = [];
// const addToCartButtons = document.querySelectorAll('.book-item');
// const checkoutButton = document.getElementById('checkout');
// const checkoutForm = document.querySelector('.checkout-form');
// const cartList = document.getElementById('cart-list');
// const confirmCheckoutButton = document.getElementById('confirm-checkout');

// addToCartButtons.forEach(btn => {
//     btn.addEventListener('click', function () {
//         const bookName = this.getAttribute('data-book');

//         if (!cart.includes(bookName)) {
//             cart.push(bookName);
//             updateCart();
//         }
//     });
// });

// checkoutButton.addEventListener('click', function () {
//     checkoutForm.classList.remove('hidden');
//     checkoutForm.scrollIntoView({ behavior: 'smooth' });

// });

// confirmCheckoutButton.addEventListener('click', function () {
//     alert(`Thank you for checking out the following books: ${cart.join(', ')}.`);
//     // After confirming, reset everything
//     while (cart.length > 0) {
//         cart.pop();
//     }
//     updateCart();
//     checkoutForm.classList.add('hidden');
// });

// function updateCart() {
//     cartList.innerHTML = '';
//     cart.forEach(book => {
//         const li = document.createElement('li');
//         li.textContent = book;
//         cartList.appendChild(li);
//     });

//     if (cart.length > 0) {
//         checkoutButton.classList.remove('hidden');
//     } else {
//         checkoutButton.classList.add('hidden');
//     }
// }
const addToCartButtons = document.querySelectorAll('.book-item');
const checkoutButton = document.getElementById('checkout');
const checkoutForm = document.querySelector('.checkout-form');
const cartList = document.getElementById('cart-list');
const confirmCheckoutButton = document.getElementById('confirm-checkout');
let cart = [];  // Initializing the cart array

addToCartButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        const bookName = this.getAttribute('data-book');

        if (!cart.includes(bookName)) {
            cart.push(bookName);
            updateCart();
        }
    });
});

checkoutButton.addEventListener('click', function () {
    checkoutForm.classList.remove('hidden');
    checkoutForm.scrollIntoView({ behavior: 'smooth' });
});

confirmCheckoutButton.addEventListener('click', function () {
    alert(`Thank you for checking out the following books: ${cart.join(', ')}.`);
    // After confirming, reset everything
    cart = [];
    updateCart();
    checkoutForm.classList.add('hidden');
});

function updateCart() {
    cartList.innerHTML = '';
    cart.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book;
        cartList.appendChild(li);
    });

    if (cart.length > 0) {
        checkoutButton.classList.remove('hidden');
    } else {
        checkoutButton.classList.add('hidden');
    }
}
