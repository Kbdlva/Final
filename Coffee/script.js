var basket;
var sum;
getProducts();
var products;
function toBasket(form) {
    let pr_id = form['pr_id'].value;
    let weight = form['weight'].value;
    let grind = form['grind'].value;
    let pr_type = form['type'].value;
    let query = "addToCart";
    let number = '87777777777';
    console.log(pr_id + " " + weight + " " + grind);
    $.ajax({
        url: 'executer.php',
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
        url: 'getProducts.php',
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
    let number = '87777777777';
    console.log(pr_id + " " + weight + " " + grind);
    $.ajax({
        url: 'executer.php',
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
    let number = '87777777777';
    console.log(pr_id + " " + weight + " " + grind);
    $.ajax({
        url: 'executer.php',
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
    let number = '87777777777';
    $.ajax({
        url: 'executer.php',
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
    let number = '87777777777';
    console.log(pr_id + " " + weight + " " + grind);
    $.ajax({
        url: 'executer.php',
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
    console.log(basket[0]);
    if (basket[0] == 0) {
        document.querySelector('.main').style.display = 'none';
        document.body.style.overflow = 'auto';
        return;
    }

    let x = 0;
    sum = 0;
    console.log(basket[0]);
    for (let index = 0; index < basket.length; index++) {
        x += parseInt(basket[index]['quantity']);
        console.log(x);
    }
    document.querySelector(".cart-num").innerHTML = x;
    let bask = document.querySelector('.basket');
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
document.querySelector(".cart").addEventListener("click", () => {
    document.querySelector('.main').style.display = 'flex';
    document.body.style.overflow = 'hidden';
});
document.querySelector(".mainb").addEventListener("click", () => {
    document.querySelector('.main').style.display = 'none';
    document.body.style.overflow = 'auto';
});
$(document).ready(function () {
    getBasket();
    $('.header_burger').click(function (event) {
        $('.header_burger').toggleClass('active');
        $('.navbar').toggleClass('active');
        $('body').toggleClass('lock');


    });
});