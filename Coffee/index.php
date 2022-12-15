<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'coffeelogia');

$link = new mysqli(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_NAME);

if($link-> connect_errno) echo $link->connect_error();
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
    <title>Document</title>
</head>

<body>
    <header>
        <div class="header">
            <div class="logo">
                <img src="../images/Coffeelogia_LOGO.jpg" class="img_logo" alt="logo">
            </div>
            <div class="navbar">
                <ul>
                    <li><a href="../AboutUs/aboutUs.html">О нас</a></li>
                    <li><a href="#"><b>Кофе</b></a></li>
                    <li><a href="../Tea/index.html">Чай</a></li>
                    <li><a href="../Equipment/equipment.html">Оборудование</a></li>
                    <li><a href="../Service/service.html">Сервис</a></li>
                    <li><a href="../School/school.html">Школа Бариста</a></li>
                    <li><a href="../Contacts/contacts.html">Контакты</a></li>
                    <li><a href="">CoffeBLOG</a></li>
                    <li><a href="">Log in</a></li>
                </ul>
            </div>
        </div>
    </header>

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
            $sql = "select * from coffee order by c_id";
            $result = $link->query($sql);
            if($result-> num_rows>0){
                while($row=$result->fetch_array()){

        ?>

        <div class="item">
            <img src="https://thumb.tildacdn.com/tild3762-3632-4833-a664-666638626463/-/format/webp/photo.jpg" alt="">
            <div class="prname"><?= $row['c_name']?></div>
            <div class="prdesc" style="text-align: center;"><?=$row['description']?></div>
            <div class="prprice"><?=$row['price']?> тг</div>
            <form action="" class="prform">
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
                        <option value="">не молоть</option>
                        <option value="">френчпресс(крупный)</option>
                        <option value="">кофеварка(средний)</option>
                        <option value="">гейзер,эспрессо(мелкий)</option>
                        <option value="">турка(очень мелкий)</option>
                    </select>
                </div>
                <button type="submit" class="prsub">Купить</button>
            </form>
        </div>

        <?php
        }
        }
        ?>

    </div>

</body>

</html>