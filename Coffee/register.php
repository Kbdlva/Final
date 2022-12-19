<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'login');

$link = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_NAME);
if($link===false){
    die("ERROR: Couldn't connect, ". mysqli_connect_error());
}
if(isset($_POST['email'])){
    
    $sql = "insert into users (email,first_name,last_name,password,age,gender) values('".$_POST['email']."','".$_POST['first']."','".$_POST['last']."','".$_POST['password']."','".$_POST['age']."','".$_POST['gender']."')";
    $result = mysqli_query($link,$sql);
    if($result){
        echo "Success!";
        echo "!!!";
        exit();
    }
    else echo mysqli_error($link);
}


?>