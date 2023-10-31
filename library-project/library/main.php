<?php
// Include your database connection script
include "/var/www/html/dbconnect.php";
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
// Fetch book titles, authors, and counts from the database
$sql = "SELECT title, author, ISBN, count FROM Books";
$stmt = $pdo->prepare($sql);
$stmt->execute();

$books = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Library</title>
    <link rel="stylesheet" href="main-styles.css">
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/aws-sdk/2.1045.0/aws-sdk.min.js" crossorigin="anonymous"></script>


</head>

<body>
 
    <div class="container">
        <div class="books-section">
            <h1>Our Books. Click to add to your cart</h1>
            <ul>
                <?php foreach ($books as $book): ?>
                <li>
                    <button class="book-item" data-book-name="<?= htmlspecialchars($book['title']) ?>" data-book-isbn="<?= htmlspecialchars($book['ISBN']) ?>"><?= htmlspecialchars($book['title']) ?> </button>

                    <div>Author: <?= htmlspecialchars($book['author']) ?></div>
                    <div>ISBN: <?= htmlspecialchars($book['ISBN']) ?></div>
                    <div>Count: <?= htmlspecialchars($book['count']) ?></div>
                </li>
                <?php endforeach; ?>
            </ul>
        </div>

        <div class="cart-section">
            <h2>Your Cart</h2>
            <ul id="cart-list"></ul>
            <button id="checkout" class="hidden">Go to Checkout</button>
        </div>
    </div>

    <div class="checkout-form hidden">
        <h2>Checkout</h2>
        <p>Your Cart:</p>
        <ul id="checkout-list"></ul>
        <label for="name">Full Name:</label>
        <input type="text" id="name" required>
        <label for="email">Email Address:</label>
        <input type="email" id="email" required>
        <button id="confirm-checkout">Confirm Checkout</button>
    </div>

    <script src="main-script.js"></script>
</body>

</html>
