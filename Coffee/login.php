<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'login');

$link = new mysqli(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_NAME);

if($link-> connect_errno) echo $link->connect_error;

if(isset($_POST['email'])){
    $sql = "select * from users where email = '".$_POST['email']."' and password = '".$_POST['password']."'";
    $result = $link->query($sql);
    if($result->num_rows===1){
        echo json_encode($result->fetch_assoc());
        exit();
    }
    else echo "false";
    /* else echo mysqli_error($link); */
}
?>