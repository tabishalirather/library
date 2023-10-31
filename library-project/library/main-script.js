console.log('This is coneeeenected');

AWS.config.update({
    region: 'ap-southeast-2',
    accessKeyId: 'AKIASU2ZLMQAQXSBLP4D',
    secretAccessKey: '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'
});

var dynamodb = new AWS.DynamoDB.DocumentClient();
const addToCartButtons = document.querySelectorAll('.book-item');
const checkoutButton = document.getElementById('checkout');
const checkoutForm = document.querySelector('.checkout-form');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const cartList = document.getElementById('cart-list');
const confirmCheckoutButton = document.getElementById('confirm-checkout');

let selectedBook = null; 

addToCartButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        selectedBook = {
            name: this.getAttribute('data-book-name'),
            isbn: parseInt(this.getAttribute('data-book-isbn'), 10)

        };
        updateCart();
    });
});

checkoutButton.addEventListener('click', function () {
    checkoutForm.classList.remove('hidden');
    checkoutForm.scrollIntoView({ behavior: 'smooth' });
});

confirmCheckoutButton.addEventListener('click', function () {
    const userEmail = emailInput.value;
    const userName = nameInput.value;
      alert("Thankyou for checking out " + selectedBook.name)
    saveCheckoutData(userName, userEmail);
    
    selectedBook = null;
    updateCart();
    checkoutForm.classList.add('hidden');
});

function saveCheckoutData(name, email) {
    if (!selectedBook) return;

    const params = {
        TableName: 'Books',
        Item: {
            'userName': name,
            'userEmail': email,
            'bookTitle': selectedBook.name,
            'bookID': selectedBook.isbn
        }
    };

    dynamodb.put(params, function (err, data) {
        if (err) {
            console.error("Error saving checkout data:", JSON.stringify(err, null, 2));
        } else {
            console.log("Checkout saved successfully:", JSON.stringify(data, null, 2));
        }
    });
}

function updateCart() {
    cartList.innerHTML = '';

    if (!selectedBook) {
        checkoutButton.classList.add('hidden');
        return;
    }

    const li = document.createElement('li');
    li.textContent = `${selectedBook.name} (ISBN: ${selectedBook.isbn})`;
    cartList.appendChild(li);
    checkoutButton.classList.remove('hidden');
}
