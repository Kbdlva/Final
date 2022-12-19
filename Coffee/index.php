<?php
session_start();
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'coffeelogia');
$count = 0;
$basket = '';
if (isset($_POST['basket']))
    $basket = $_POST['basket'];
$link = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
if ($link->connect_errno)
    echo $link->connect_error;
if (isset($_POST['add_to_cart'])) {
    $count++;
    if (isset($_SESSION['shopping_cart'])) {

    } else {
        $id = $_POST['prid'];
        $grind = $_POST['grind'];
        $weight = $_POST['weight'];
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/2ee5c5c3bb.js" crossorigin="anonymous"></script>
    <title>Document</title>
</head>

<body>
    <header class="head">
        <div class="header_container">
            <div class="header">
                <div class="logo">
                    <img src="../images/Coffeelogia_LOGO.jpg" class="img_logo" alt="logo">
                </div>
                <div class="header_burger">
                    <span></span>
                </div>
                <div class="navbar">
                    <ul>
                        <li><a href="../AboutUs/aboutUs.html">О нас</a></li>
                        <li><a href="../Coffee/index.php">Кофе</a></li>
                        <li><a href="../Tea/index.html">Чай</a></li>
                        <li><a href="../Equipment/equipment.html">Оборудование</a></li>
                        <li><a href="../Service/service.html">Сервис</a></li>
                        <li><a href="../School/school.html">Школа Бариста</a></li>
                        <li><a href="../Contacts/contacts.html">Контакты</a></li>
                        <li><a href="../CoffeeBlog/blog.html">CoffeBLOG</a></li>
                        <li><a href="../login/index.html"><i class="fa fa-right-to-bracket"></i></a></li>
                    </ul>

                </div>
            </div>
            <div class="cart">
                <img class="cart-img" src="shopping-cart.png" alt="">
                <div class="cart-num">
                    <?= $count ?>
                </div>
            </div>
        </div>

    </header>
    <?php 
    ?>
    <div class="main">
        <div class="mainb"></div>
        <div class="cartm">
            <h2>Orders</h2>
            <div class="basket">
                <?php
                if (isset($_POST['basket']))
                    echo $_POST['basket'];
                ?>
                    <div class="product">
                        <div>
                            <img src="../images/1.png" style="width: 100px;" alt="">
                            <div class="product-name">
                                <h4>Something</h3>
                                    <p>Weight:</p>
                                    <p>Grind:</p>
                            </div>
                        </div>


                        <div class="count">
                            <button class="decrease" onclick="decrease()">-</button>
                            <h5>2</h5>
                            <button class="increase">+</button>
                        </div>

                        <div class="sum">6000tg
                            <button class="delete"> X </button>
                        </div>
                    </div>
            </div>

            <div class="total">Total:</div>


            <div class="data">
                <h3>City:</h3>
                <select name="city" id="">
                    <option value="Алматы">Алматы</option>
                    <option value="Атырау">Атырау</option>
                    <option value="Астана">Астана</option>
                    <option value="Шымкент">Шымкент</option>
                    <option value="Актау">Актау</option>
                    <option value="Павлодар">Павлодар</option>
                    <option value="Талдыкорган">Талдыкорган</option>
                    <option value="Карагынды">Карагaнды</option>
                </select>


                <div class="address">
                    <h3>Address:</h3>
                    <textarea name="address" id="" cols="30" rows="5"></textarea>
                    <input type="radio" name="delivery" id="1" value="Самывывоз"><label for="1">Самывывоз</label> <br>
                    <input type="radio" name="delivery" id="2" value="Доставка"><label for="2">Доставка(1000тг)</label>
                </div>

                <div class="method">
                    <h3>Payment method:</h3>
                    <input type="radio" name="payment" id="3" value="Наличными"><label for="3">Наличными при
                        получении</label> <br>
                    <input type="radio" name="payment" id="4" value="Карта"><label for="4">Кредитной картой (Visa,
                        Mastercard)</label> <br>
                    <input type="radio" name="payment" id="5" value="Каспи"><label for="5">Оплата Kaspi (запомните
                        итоговую сумму)</label> <br>
                    <button class="order">Заказать вкусный кофе</button>
                </div>
            </div>
        </div>
    </div>
    <?php
    ?>

    <div class="preview">
        <div class="prewrapper">
            <div class="text">Зерновой и молотый кофе всегда самой свежей обжарки с доставкой до двери.</div>
            <a href="" class="prebutton">ПЕРЕЙТИ К ВЫБОРУ КОФЕ</a>
            <div class="text1">Вынуждены сообщить что у нас поменялся прайс в связи с повышением курса доллара, общим
                дефицитом арабики и повышением цен на зеленый кофе.</div>
        </div>

    </div>

    <div class="mlabel">Моносорта</div>

    <div class="magazine">

        <?php
        $sql = "select * from coffee order by pr_id";
        $result = $link->query($sql);
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_array()) {

        ?>

        <div class="item">
            <img src="<?= $row['img'] ?>" alt="">
            <div class="prname">
                <?= $row['name'] ?>
            </div>
            <div class="prdesc" style="text-align: center;">
                <?= $row['description'] ?>
            </div>
            <div class="prprice">
                <?= $row['price'] ?> тг
            </div>
            <form class="prform" onsubmit="toBasket(this);return false">
                <input name="pr_id" type="hidden" value="<?= $row['pr_id'] ?>">
                <input name="type" type="hidden" value="coffee">
                <div class="" style="width: 70%;">
                    <label for="weight" class="prdesc" style="display: block; margin-bottom: 0;">вес</label>
                    <select name="weight" id="weight">
                        <option value="250">250 гр</option>
                        <option value="500">500 гр</option>
                        <option value="1000">1000 гр</option>
                    </select>
                </div>
                <div class="">
                    <label for="grind" class="prdesc" style="display: block; margin-bottom: 0;">помолоть</label>
                    <select name="grind" id="grind">
                        <option value="не молоть">не молоть</option>
                        <option value="френчпресс(крупный)">френчпресс(крупный)</option>
                        <option value="кофеварка(средний)">кофеварка(средний)</option>
                        <option value="гейзер,эспрессо(мелкий)">гейзер,эспрессо(мелкий)</option>
                        <option value="турка(очень мелкий)">турка(очень мелкий)</option>
                    </select>
                </div>
                <button type="submit" name="add_to_cart" class="prsub">Купить</button>
            </form>
        </div>

        <?php
            }
        }
        ?>

    </div>
    <div class="mlabel">Бленды</div>
    <div class="magazine" style="margin-bottom: 70px;">
        <?php
        $sql = "select * from blends order by pr_id";
        $result = $link->query($sql);
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_array()) {

        ?>

        <div class="item">
            <img src="<?= $row['img'] ?>" alt="">
            <div class="prname">
                <?= $row['name'] ?>
            </div>
            <div class="prdesc" style="text-align: center;">
                <?= $row['description'] ?>
            </div>
            <div class="prprice">
                <?= $row['price'] ?> тг
            </div>
            <form class="prform" onsubmit="toBasket(this);return false">
                <input name="pr_id" type="hidden" value="<?= $row['pr_id'] ?>">
                <input name="type" type="hidden" value="blends">
                <div class="" style="width: 70%;">
                    <div style="display: flex;align-self: center;">
                        <label for="weight" class="prdesc" style="display: block; margin-bottom: 0;">вес</label>
                        <select name="weight" id="weight">
                            <option value="250">250 гр</option>
                            <option value="500">500 гр</option>
                            <option value="1000">1000 гр</option>
                        </select>
                    </div>

                </div>
                <div class="">
                    <label for="grind" class="prdesc" style="display: block; margin-bottom: 0;">помолоть</label>
                    <select name="grind" id="grind">
                        <option value="не молоть">не молоть</option>
                        <option value="френчпресс(крупный)">френчпресс(крупный)</option>
                        <option value="кофеварка(средний)">кофеварка(средний)</option>
                        <option value="гейзер,эспрессо(мелкий)">гейзер,эспрессо(мелкий)</option>
                        <option value="турка(очень мелкий)">турка(очень мелкий)</option>
                    </select>
                </div>
                <button type="submit" name="add_to_cart" class="prsub">Купить</button>
            </form>
        </div>

        <?php
            }
        }
        ?>
    </div>

    <div class="basket" style="z-index: 1000;">

    </div>
    <footer>
        <ul>
            <li><a href="../AboutUs/aboutUs.html">О нас</a></li>
            <li><a href="">Кофе</a></li>
            <li><a href="../Equipment/equipment.html">Оборудование</a></li>
            <li><a href="">Академия Coffeelogia</a></li>
            <li><a href="../Contacts/contacts.html">Контакты</a></li>
            <li><a href="">Публична сфера</a></li>
        </ul>
    </footer>
    <script src="script.js"></script>
</body>

</html>