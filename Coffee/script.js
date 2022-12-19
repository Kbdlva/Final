var basket;
var sum;
getProducts();
var products;
function toBasket(form) {
    if (getCookie('number') == '') {
        window.alert("You did not log in!");
        return;
    }
    let pr_id = form['pr_id'].value;
    let weight = form['weight'].value;
    let grind = form['grind'].value;
    let pr_type = form['type'].value;
    let query = "addToCart";
    let number = getCookie('number');
    console.log(pr_id + " " + weight + " " + grind);
    $.ajax({
        url: '../php/executer.php',
        type: 'POST',
        data: { pr_id, weight, grind, pr_type, number, query },
        success: (result) => {
            console.log(result);
            basket = JSON.parse(result);
            console.log(basket[0]['grind']);
            updateBasket();
        },
        error: () => {
            console.log('error');
        }
    });
}
function getProducts() {
    $.ajax({
        url: '../php/getProducts.php',
        type: 'POST',
        data: {},
        success: (result) => {
            console.log(result);
            products = JSON.parse(result);
            console.log(products['coffee'][1]['price']);
            console.log(products['coffee'][1]['name']);
        },
        error: () => {
            console.log('error');
        }
    });
}

function decrease(
    pr_id,
    weight,
    grind,
    pr_type
) {
    /* let pr_id = form['pr_id'].value;
    let weight = form['weight'].value;
    let grind = form['grind'].value;
    let pr_type = form['type'].value; */
    let query = "decrease";
    let number = getCookie('number');
    console.log(pr_id + " " + weight + " " + grind);
    $.ajax({
        url: '../php/executer.php',
        type: 'POST',
        data: { pr_id, weight, grind, pr_type, number, query },
        success: (result) => {
            console.log('decrease is reached');
            console.log(result);
            basket = JSON.parse(result);
            console.log(basket[0]['grind']);
            updateBasket();
        },
        error: () => {
            console.log('error');
        }
    });
}

function deleteFromCart(
    pr_id,
    weight,
    grind,
    pr_type
) {
    /* let pr_id = form['pr_id'].value;
    let weight = form['weight'].value;
    let grind = form['grind'].value;
    let pr_type = form['type'].value; */
    let query = "deleteFromCart";
    let number = getCookie('number');
    console.log(pr_id + " " + weight + " " + grind);
    $.ajax({
        url: '../php/executer.php',
        type: 'POST',
        data: { pr_id, weight, grind, pr_type, number, query },
        success: (result) => {
            console.log('decrease is reached');
            basket = JSON.parse(result);
            console.log(basket[0]['grind']);
            updateBasket();
        },
        error: () => {
            console.log('error');
        }
    });
}
function getBasket() {
    let query = 'get';
    let number = getCookie('number');
    $.ajax({
        url: '../php/executer.php',
        type: 'POST',
        data: { query, number },
        success: (result) => {
            console.log('get is reached');
            basket = JSON.parse(result);
            console.log(basket[0]['grind']);
            updateBasket();
        },
        error: () => {
            console.log('error');
        }
    });
}
function increase(
    pr_id,
    weight,
    grind,
    pr_type
) {
    /* let pr_id = form['pr_id'].value;
    let weight = form['weight'].value;
    let grind = form['grind'].value;
    let pr_type = form['type'].value; */
    let query = "increase";
    let number = getCookie('number');
    console.log(pr_id + " " + weight + " " + grind);
    $.ajax({
        url: '../php/executer.php',
        type: 'POST',
        data: { pr_id, weight, grind, pr_type, number, query },
        success: (result) => {
            console.log('increase is reached');
            basket = JSON.parse(result);
            console.log(basket[0]['grind']);
            updateBasket();
        },
        error: () => {
            console.log('error');
        }
    });
}

function updateBasket() {
    let bask = document.querySelector('.basket');
    console.log(basket[0]);
    if (basket[0] == 0) {
        console.log(basket[0]);
        document.querySelector('.main').style.display = 'none';
        document.querySelector(".cart").style.display = 'none';
        document.body.style.overflow = 'auto';
        document.querySelector(".cart-num").innerHTML = 0;
        bask.innerHTML = "";
        return;
    }
    document.querySelector(".cart").style.display = 'flex';

    let x = 0;
    sum = 0;
    console.log(basket[0]);
    for (let index = 0; index < basket.length; index++) {
        x += parseInt(basket[index]['quantity']);
        console.log(x);
    }
    document.querySelector(".cart-num").innerHTML = x;
    bask.innerHTML = "";

    for (let index = 0; index < basket.length; index++) {
        bask.innerHTML += '<div class="product">\
        <div>\
            <img src="'+ products[basket[index]['pr_type']][basket[index]['pr_id']]['img'] + '" style="width: 100px;" alt="">\
            <div class="product-name">\
                <h4>'+ products[basket[index]['pr_type']][basket[index]['pr_id']]['name'] + '</h3>\
                    <p>Weight:'+ basket[index]['weight'] + '</p>\
                    <p>Grind:'+ basket[index]['grind'] + '</p>\
            </div>\
        </div>\
        <div class="count">\
            <button class="decrease" onclick="decrease(\''+
            basket[index]['pr_id'] + '\',\'' +
            basket[index]['weight'] + '\',\'' +
            basket[index]['grind'] + '\',\'' +
            basket[index]['pr_type']
            + '\')">-</button>\
            <h5>'+ basket[index]['quantity'] + '</h5>\
            <button class="increase" onclick="increase(\''+
            basket[index]['pr_id'] + '\',\'' +
            basket[index]['weight'] + '\',\'' +
            basket[index]['grind'] + '\',\'' +
            basket[index]['pr_type']
            + '\')">+</button>\
        </div>\
        <div class="sum">'+ itemPrice(basket[index]['pr_id'], basket[index]['pr_type'], basket[index]['weight']) + 'tg\
            <button class="delete" onclick="deleteFromCart(\''+
            basket[index]['pr_id'] + '\',\'' +
            basket[index]['weight'] + '\',\'' +
            basket[index]['grind'] + '\',\'' +
            basket[index]['pr_type']
            + '\')"> X </button>\
        </div>\
    </div>';



        /* let product = document.createElement("div");
        product.classList.add('product');
        let d1 = document.createElement('div');
        let img = document.createElement('img');
        img.src=products[basket[index]['pr_type']][basket[index]['pr_id']]['img'];
        let prname= document.createElement('div');
        prname.classList.add('product-name');
        let h4 = document.createElement('h4');
        h4.innerHTML=products[basket[index]['pr_type']][basket[index]['pr_id']]['name'];
        let p = document.createElement('p');
        p.innerHTML= basket[index]['weight'];
        let p1 = document.createElement('p');
        p1.innerHTML= basket[index]['grind'];
        text.innerHTML=basket[index]['pr_id']; */

        /* prname.appendChild(h4,p,p);

        bask.appendChild(text); */

    }
    document.querySelector('.total').innerHTML = 'Total:' + sum + ' tg';
}
function itemPrice(prid, type, weight) {
    console.log(prid + " " + type);
    let price = parseInt(products[type][prid]['price']);
    console.log(price);
    let multiplier = 1;
    if (weight == 500) multiplier = 2;
    else if (weight == 1000) multiplier = 4;
    for (let index = 0; index < basket.length; index++) {
        console.log(1);
        if (basket[index]['pr_id'] == prid && basket[index]['weight'] == weight && basket[index]['pr_type'] == type) {
            console.log(price * multiplier * parseInt(basket[index]['quantity']));
            sum += price * multiplier * parseInt(basket[index]['quantity']);
            return price * multiplier * parseInt(basket[index]['quantity']);
        }
    }
}

function order(form) {
    let city = form['city'].value;
    let address = form['address'].value;
    let delivery = form['delivery'].value;
    let payment = form['payment'].value;
    let number = getCookie('number');
    let total = sum;
    $.ajax({
        url: '../php/submit.php',
        type: 'POST',
        data: { city, address, delivery, payment, number, total },
        success: (result) => {
            console.log('submit is reached');
            console.log(result);
            getBasket();
        },
        error: () => {
            console.log('error');
        }
    });
}

document.querySelector("#a2").addEventListener('click', () => {
    document.querySelector('.total').innerHTML = 'Total:' + sum + '+1000 tg';
    sum += 1000;
    document.querySelector("#a2").disabled = true;
    document.querySelector("#a1").disabled = false;


});
document.querySelector("#a1").addEventListener('click', () => {
    sum -= 1000;
    document.querySelector('.total').innerHTML = 'Total:' + sum + ' tg';
    document.querySelector("#a1").disabled = true;
    document.querySelector("#a2").disabled = false;
});



document.querySelector(".cart").addEventListener("click", () => {
    document.querySelector('.main').style.display = 'flex';
    document.body.style.overflow = 'hidden';
});
document.querySelector(".mainb").addEventListener("click", () => {
    document.querySelector('.main').style.display = 'none';
    document.body.style.overflow = 'auto';
});
$(document).ready(function () {
    $('.header_burger').click(function (event) {
        $('.header_burger').toggleClass('active');
        $('.navbar').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


checkLogin();
function checkLogin() {
    let log = document.querySelector('#log');
    if (getCookie('number') == '') {
        log.innerHTML = 'Log In';
        log.addEventListener('click', () => {
            window.location.href = "../login/index.html";
        });
    }
    else {
        getBasket();
        log.innerHTML = 'Log Out';
        log.addEventListener('click', () => {
            deleteCookie('number');
            location.reload();
        });
    }
}


//Cookie handler
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function deleteCookie(cname) {
    let expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = cname + "=" + ";" + expires + ";path=/";
}
function checkCookie(cname) {
    let username = getCookie(cname);
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}