<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'coffeelogia');

$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
if ($link === false) {
    die("ERROR: Couldn't connect, " . mysqli_connect_error());
}
$name = $_POST['name'];
$number = $_POST['number'];
$pass = $_POST['pass'];
$sql = "insert into users (name,password,tel_number) values('" . $name . "','" . $pass . "','" . $number . "')";
$result = mysqli_query($link, $sql);
if ($result) {
    echo "Success!";
    exit();
} else
    echo mysqli_error($link);

?>