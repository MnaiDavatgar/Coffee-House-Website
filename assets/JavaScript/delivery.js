/* ================== Drop Down Menu =================== */
let menu = document.getElementById('Menu');
let products = document.getElementById('Products');
let company = document.getElementById('Company');
let menuDrop = document.getElementById('Menu-list');
let items = document.querySelectorAll('.drop-item');
var first = document.getElementById('first-drop-item');
var second = document.getElementById('second-drop-item');
var third = document.getElementById('third-drop-item');
var fourthHeader = document.getElementById('fourth-part-heahder');

menu.addEventListener('click', menuChanging);
products.addEventListener('click', productsChanging);
company.addEventListener('click', companyChanging);

items.forEach( e => e.addEventListener('click', () => 
{
        menuDrop.style.height = '0';
        menuDrop.style.padding = '0';
}));

function menuChanging() {
    first.innerHTML = 'our menu';
    first.addEventListener('click', () => {
        location.assign('../HTML/Menu.html')
    });
    second.innerHTML = 'bakery';
    second.addEventListener('click', () => {
        location.assign('../HTML/bakery.html');
    });
    third.innerHTML = 'delivery';
    first.style.display = 'inline-block';
    second.style.display = 'inline-block';
    third.style.display = 'inline-block';

    menuListDropper();
}
function menuListDropper() {
    menuDrop.style.height = '300px';
    menuDrop.style.padding = '20px 0';
}

function productsChanging() {
    first.innerHTML = 'events';
    first.addEventListener('click', () => {
        location.assign('../HTML/events.html');
    });
    third.addEventListener('click', () => {
        location.assign('../HTML/Menu.html')
    });
    first.style.display = 'inline-block';
    second.style.display = 'none';
    third.style.display = 'none';
    menuListDropper();
}

function companyChanging() {
    first.innerHTML = 'About & contact us';
    first.addEventListener('click', () => {
        location.assign('../HTML/about.html');
    });
    second.style.display = 'none';
    third.style.display = 'none';
    menuListDropper();
}
/* =================== Menu clicking out closing ==================== */
document.onclick = function(e) {
    if(e.target.id !== 'Menu-list' && e.target.className !== 'menu-item')
    {
        menuDrop.style.height = '0';
        menuDrop.style.padding = '0';
    }
}
/* =================== Orders page ==================== */
let allInputs = document.querySelectorAll('input');
let ordersPage = document.getElementById('orders-page');
let breakFastShopIcon = document.getElementById('break-fast-shop-icon');
let coffeeShopIcon = document.getElementById('coffee-shop-icon');
let cakeShopIcon = document.getElementById('daily-cake-shop-icon');
let firstGetOrder = document.getElementById('first-order-item');
let secondGetOrder = document.getElementById('second-order-item');
let thirdGetOrder = document.getElementById('third-order-item');
let closeButton = document.getElementById('close');
let breakFastInput = document.getElementById('breakfast-number');
let coffeeInput = document.getElementById('coffee-number');
let cakeInput = document.getElementById('cake-number');
let firstOrderClose = document.getElementById('first-order-close');
let secondOrderClose = document.getElementById('second-order-close');
let thirdOrderClose = document.getElementById('third-order-close');
let finalOrderInfo = document.getElementById('final-order-info');

breakFastShopIcon.addEventListener('click', () => {
    firstGetOrder.style.opacity = '1';
    let addEachTime = Number(breakFastInput.value) + 1;
    breakFastInput.value = addEachTime;

    pagePresentor();
});
coffeeShopIcon.addEventListener('click', () => {
    secondGetOrder.style.opacity = '1';
    let addEachTime = Number(coffeeInput.value) + 1;
    coffeeInput.value = addEachTime;

    pagePresentor();
});
cakeShopIcon.addEventListener('click', () => {
    thirdGetOrder.style.opacity = '1';
    let addEachTime = Number(cakeInput.value) + 1;
    cakeInput.value = addEachTime;

    pagePresentor();
});
closeButton.addEventListener('click', pageHider);
function pagePresentor() {
    ordersPage.style.width = '50%';
}
function pageHider() {
    ordersPage.style.width = '0px';
}
firstOrderClose.addEventListener('click', () => {
    firstGetOrder.style.opacity = '.2';
    breakFastInput.value = '';
});
secondOrderClose.addEventListener('click', () => {
    secondGetOrder.style.opacity = '.2';
    coffeeInput.value = '';
});
thirdOrderClose.addEventListener('click', () => {
    thirdGetOrder.style.opacity = '.2';
    cakeInput.value = '';
});
/* =============== Total prize of orders calculator ================ */
function calculator() {
    let conclution = document.getElementById('total-price-section');
    let totalPrize = (Number(breakFastInput.value) * 8) + (Number(coffeeInput.value) * 4) + (Number(cakeInput.value) * 5);

    conclution.value = totalPrize.toString() + '$';
}
/* =============== submit button activities ================ */
finalOrderInfo.addEventListener('click', () => {
    allInputs.forEach( e => e.value = '');
    finalOrderInfo.value = 'Submit';
    firstGetOrder.style.opacity = '.2';
    secondGetOrder.style.opacity = '.2';
    thirdGetOrder.style.opacity = '.2';
});