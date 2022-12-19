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
$typeOfQuery = $_POST['query'];
if ($typeOfQuery == 'get'){
    get_basket();
    die();
}
    
$pr_id = $_POST['pr_id'];
$weight = $_POST['weight'];
$grind = $_POST['grind'];
$pr_type = $_POST['pr_type'];

if ($typeOfQuery == 'addToCart')
    add_to_cart();
else if ($typeOfQuery == 'deleteFromCart')
    delete_from_cart();
else if ($typeOfQuery == 'decrease')
    decrease();
else if ($typeOfQuery == 'increase')
    add_to_cart();

function decrease()
{
    global $link, $pr_id, $weight, $grind, $pr_type, $number;
    $sql = "UPDATE basket SET quantity=quantity-1 WHERE tel_number='" . $number . "' and weight='" . $weight . "' and grind='" . $grind . "' and pr_id=" . $pr_id . " and pr_type='" . $pr_type . "';";
    $result = mysqli_query($link, $sql);
    if (!$result)
        echo mysqli_error($link);
    $sql = "select * from basket where tel_number='" . $number . "' and weight='" . $weight . "' and grind='" . $grind . "' and pr_id=" . $pr_id . " and pr_type='" . $pr_type . "';";
    $result = mysqli_query($link, $sql);
    if (!$result)
        echo mysqli_error($link);
    $quantity = $result->fetch_assoc()['quantity'];
    if ($quantity == 0)
        delete_from_cart();
    else
        get_basket();
}


function delete_from_cart()
{
    global $link, $pr_id, $weight, $grind, $pr_type, $number;
    $sql = "delete from basket where tel_number='" . $number . "' and weight='" . $weight . "' and grind='" . $grind . "' and pr_id=" . $pr_id . " and pr_type='" . $pr_type . "';";
    $result = mysqli_query($link, $sql);
    if (!$result)
        echo mysqli_error($link);
    get_basket();
}

function add_to_cart()
{
    global $link, $pr_id, $weight, $grind, $pr_type, $number;
    $sql = "select * from basket where tel_number='" . $number . "' and weight='" . $weight . "' and grind='" . $grind . "' and pr_id=" . $pr_id . " and pr_type='" . $pr_type . "';";
    $result = mysqli_query($link, $sql);
    if ($result->num_rows === 0) {
        $sql = "INSERT INTO basket(tel_number,pr_id, grind, weight, quantity, pr_type) VALUES ('" . $number . "','" . $pr_id . "','" . $grind . "','" . $weight . "','1','" . $pr_type . "')";
    } else {
        $sql = "UPDATE basket SET quantity=quantity+1 WHERE tel_number='" . $number . "' and weight='" . $weight . "' and grind='" . $grind . "' and pr_id=" . $pr_id . " and pr_type='" . $pr_type . "';";
    }
    $result = mysqli_query($link, $sql);
    if (!$result)
        echo mysqli_error($link);
    get_basket();
}
function get_basket()
{
    global $link, $pr_id, $weight, $grind, $pr_type, $number;
    $result = mysqli_query($link, "select * from basket where tel_number = '" . $number . "';");
    $arr = array($result->num_rows);
    for ($i = 0; $i < $result->num_rows; $i++) {
        $arr[$i] = $result->fetch_assoc();
    }
    if ($result) {
        echo json_encode($arr);
        exit();
    } else
        echo mysqli_error($link);
}
if (isset($_POST['email'])) {


}


?>