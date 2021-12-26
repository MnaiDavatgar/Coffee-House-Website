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
    third.addEventListener('click', () => {
        location.assign('../HTML/delivery.html');
    });
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
//Home page button in the about us section

function homeButton() {
    location.assign('../HTML/Coffee House.html');
}