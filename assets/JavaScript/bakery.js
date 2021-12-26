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
var body = document.querySelector('body');

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
/* ============================ go to menu button ===================== */
let button = document.getElementById('button');

button.addEventListener('click', () => {
    location.assign('../HTML/Menu.html');
});

var animationActivator = document.querySelector(':root');
let firstExclamation = document.getElementById('first-exclamation');
let secondExclamation = document.getElementById('second-exclamation');
let thirdExclamation = document.getElementById('third-exclamation');
let fourthExclamation = document.getElementById('fourth-exclamation');
let fifthExclamation = document.getElementById('fifth-exclamation');
let sixthExclamation = document.getElementById('sixth-exclamation');
//information part presenting when hover on exclamation icon
firstExclamation.addEventListener('mouseover', () => {
    animationActivator.style.setProperty('--firstAnimation',
    'myAnime');
});
firstExclamation.addEventListener('mouseout', () => {
    animationActivator.style.setProperty('--firstAnimation',
    'example');
});
secondExclamation.addEventListener('mouseover', () => {
    animationActivator.style.setProperty('--secondAnimation',
    'myAnime');
});
secondExclamation.addEventListener('mouseout', () => {
    animationActivator.style.setProperty('--secondAnimation',
    'example');
});
thirdExclamation.addEventListener('mouseover', () => {
    animationActivator.style.setProperty('--thirdAnimation',
    'myAnime');
});
thirdExclamation.addEventListener('mouseout', () => {
    animationActivator.style.setProperty('--thirdAnimation',
    'example');
});
fourthExclamation.addEventListener('mouseover', () => {
    animationActivator.style.setProperty('--fourthAnimation',
    'myAnime');
});
fourthExclamation.addEventListener('mouseout', () => {
    animationActivator.style.setProperty('--fourthAnimation',
    'example');
});
fifthExclamation.addEventListener('mouseover', () => {
    animationActivator.style.setProperty('--fifthAnimation',
    'myAnime');
});
fifthExclamation.addEventListener('mouseout', () => {
    animationActivator.style.setProperty('--fifthAnimation',
    'example');
});
sixthExclamation.addEventListener('mouseover', () => {
    animationActivator.style.setProperty('--sixthAnimation',
    'myAnime');
});
sixthExclamation.addEventListener('mouseout', () => {
    animationActivator.style.setProperty('--sixthAnimation',
    'example');
});

let flexItems = document.querySelectorAll('.cookie-picture-part');

flexItems.forEach( e => e.addEventListener('mouseover', (e) => {

    e.target.style.border = '5px inset #fff';
}));
flexItems.forEach( e => e.addEventListener('mouseout', (e) => {
    e.target.style.border = 'none';
}))