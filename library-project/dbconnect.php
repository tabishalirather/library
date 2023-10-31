<?php
$host = 'library-db-instance-1.cf5dqyrkc3qj.ap-southeast-2.rds.amazonaws.com';
$db   = 'library';
$user = 'admin';
$pass = 'Amst1234'; // Make sure to keep your credentials secure
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
    echo "Connection izz successful";
} catch (\PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}
?>
