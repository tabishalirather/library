console.log('This is connected');
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
    // cart.forEach(book => {
    //     const li = document.createElement('li');
    //     li.textContent = book;
    //     cartList.appendChild(li);
    // });
    cart.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = book;

        // Create a cross button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '✕';  // A simple cross symbol
        removeBtn.addEventListener('click', function() {
            cart.splice(index, 1); // Remove the book from the cart array
            updateCart();  // Refresh the cart display
        });

        // Append the button to the li
        li.appendChild(removeBtn);

        // Append the li to the cart list
        cartList.appendChild(li);
    });

    if (cart.length > 0) {
        checkoutButton.classList.remove('hidden');
    } else {
        checkoutButton.classList.add('hidden');
    }
}
