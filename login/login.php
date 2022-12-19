<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'coffeelogia');

$link = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
$number = $_POST['number'];
$pass = $_POST['pass'];
if ($link->connect_errno)
    echo $link->connect_error;
$sql = "select * from users where tel_number = '" . $number . "' and password = '" . $pass . "'";
$result = $link->query($sql);
/* if ($result) {
    echo "Success!";
    exit();
} else
    echo mysqli_error($link); */

if ($result->num_rows === 1) {
    echo 'true';
    exit();
} else
    echo 'false';
?>