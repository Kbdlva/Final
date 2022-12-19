<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'coffeelogia');
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
if ($link === false) {
    die("ERROR: Couldn't connect, " . mysqli_connect_error());
}
$number = $_POST['number'];
$city = $_POST['city'];
$address = $_POST['address'];
$delivery = $_POST['delivery'];
$payment = $_POST['payment'];
$total = $_POST['total'];
$or_id = 1;
while(true){
    $sql = "INSERT INTO orders(or_id,tel_number, order_date, city, address, delivery, p_method, total_price) VALUES ('".$or_id."','".$number."',sysdate(),'".$city."','".$address."','".$delivery."','".$payment."','".$total."')";
    $result = mysqli_query($link, $sql);
    if($result) {
        break;
    }
    $or_id++;
}
if(!$result) echo mysqli_error($link);
$sql = "SELECT * FROM basket WHERE tel_number='".$number."';";
$result = mysqli_query($link, $sql);
while($row=$result->fetch_assoc()){
    $sql = "INSERT INTO orders_item(or_id, pr_type, pr_id, grind, weight, quantity, tel_number) VALUES ('".$or_id."','".$row['pr_type']."','".$row['pr_id']."','".$row['grind']."','".$row['weight']."','".$row['quantity']."','".$row['tel_number']."');";
    $result1 = mysqli_query($link,$sql);
    if(!$result1) echo mysqli_error($link);
}
$sql = "DELETE FROM basket WHERE tel_number='".$number."';";
$result = mysqli_query($link, $sql);

/* $sql = "";
$arr = array($result->num_rows);
while($row=$result->fetch_assoc()){
    $arr[$row['pr_id']] = $row;
}

$result = mysqli_query($link, "select * from blends;");
if(!$result) echo mysqli_error($link);
$arr1 = array($result->num_rows);
while($row=$result->fetch_assoc()){
    $arr1[$row['pr_id']] = $row;
}

$arr2 = array(
    'coffee'=>$arr,
    'blends'=>$arr1
);
if ($result) {
    echo json_encode($arr2);
    exit();
} else
    echo mysqli_error($link); */

?>