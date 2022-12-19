<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'coffeelogia');
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
if ($link === false) {
    die("ERROR: Couldn't connect, " . mysqli_connect_error());
}
$result = mysqli_query($link, "select * from coffee;");
if(!$result) echo mysqli_error($link);
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
    echo mysqli_error($link);

?>