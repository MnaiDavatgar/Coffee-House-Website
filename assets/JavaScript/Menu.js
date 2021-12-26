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

function menuListDropper() {
    menuDrop.style.height = '300px';
    menuDrop.style.padding = '20px 0';
}

function menuChanging() {
    first.innerHTML = 'our menu';
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
/* ============== responsive scroll locations ============= */
var screenWidth = window.innerWidth;
var a;
var b;
var c;
var d;
if(screenWidth > 600) {
    a = 200;
    b = 700;
    c = 300;
    d = 300;
} else{
    a = 100;
    b = 0;
    c = 0;
    d = 0;
}
var firstScrollTop = 400 + a;
var secondScrollTop = 900 + a;
var thirdScrollTop = 1300 + a + b;
var fourthScrollTop = 1900 + a + b;
var fifthScrollTop = 2500 + a + b + c;
var sixthScrollTop = 3000 + a + b + c;
var seventhScrollTop = 3600 + a + b + c;
var eighthScrollTop = 4000 + a + b + c + d;
var ninthScrollTop = 4600 + a + b + c +d; 
/* ======================= Scroll Down Effects ======================== */
window.onscroll = function() 
{scrollDownActivator()};

function scrollDownActivator() {

/* ================= Go to top button ================= */
let goToTop = document.querySelector('#go-to-top-button');

if(document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200) {
        goToTop.style.display = 'initial';
    }

 //All Elements effected by page scrolling

 let firstText = document.getElementById('first-item-text');
 let firstPicture = document.getElementById('first-item-picture');
 let secondText = document.getElementById('second-item-text');
 let secondPicture = document.getElementById('second-item-picture');
 let thirdText = document.getElementById('third-item-text');
 let thirdPicture = document.getElementById('third-item-picture');
 let fourthText = document.getElementById('fourth-item-text');
 let fourthPicture = document.getElementById('fourth-item-picture');
 let fifthText = document.getElementById('fifth-item-text');
 let fifthPicture = document.getElementById('fifth-item-picture');
 let sixthText = document.getElementById('sixth-item-text');
 let sixthPicture = document.getElementById('sixth-item-picture');
 let seventhText = document.getElementById('seventh-item-text');
 let seventhPicture = document.getElementById('seventh-item-picture');
 let eighthText = document.getElementById('eighth-item-text');
 let eighthPicture = document.getElementById('eighth-item-picture');
 let ninthText = document.getElementById('ninth-item-text');
 let ninthPicture = document.getElementById('ninth-item-picture');
/* responsive animation variables */
 /* ========================= first item ========================= */
 if (document.body.scrollTop > firstScrollTop || 
    document.documentElement.scrollTop > firstScrollTop) {
        firstText.style.animationName = 'backTextContainer';
        firstPicture.style.animationName = 'littlePicture';
 }
 /* ========================= second item ========================= */
 if (document.body.scrollTop > secondScrollTop ||
        document.documentElement.scrollTop > secondScrollTop) {
            secondText.style.animationName = 'frontTextContainer';
            secondPicture.style.animationName = 'bigPicture';
}
/* ========================= third item ========================= */
 if (document.body.scrollTop > thirdScrollTop ||
            document.documentElement.scrollTop > thirdScrollTop) {
                thirdText.style.animationName = 'backTextContainer';
                thirdPicture.style.animationName = 'littlePicture';
}
/* ========================= fourth item ========================= */
 if (document.body.scrollTop > fourthScrollTop ||
                document.documentElement.scrollTop > fourthScrollTop) {
                    fourthText.style.animationName = 'backTextContainer';
                    fourthPicture.style.animationName = 'littlePicture';
}
/* ========================= fifth item ========================= */
 if (document.body.scrollTop > fifthScrollTop ||
    document.documentElement.scrollTop > fifthScrollTop) {
        fifthText.style.animationName = 'backTextContainer';
        fifthPicture.style.animationName = 'littlePicture';
}        
/* ========================= sixth item ========================= */
 if (document.body.scrollTop > sixthScrollTop ||
    document.documentElement.scrollTop > sixthScrollTop) {
        sixthText.style.animationName = 'backTextContainer';
        sixthPicture.style.animationName = 'littlePicture';
}
/* ========================= seventh item ========================= */
if (document.body.scrollTop > seventhScrollTop ||
    document.documentElement.scrollTop > seventhScrollTop) {
        seventhText.style.animationName = 'backTextContainer';
        seventhPicture.style.animationName = 'littlePicture';
}
/* ========================= eighth item ========================= */
if (document.body.scrollTop > eighthScrollTop ||
    document.documentElement.scrollTop > eighthScrollTop) {
        eighthText.style.animationName = 'backTextContainer';
        eighthPicture.style.animationName = 'littlePicture';
}
/* ========================= ninth item ========================= */
if (document.body.scrollTop > ninthScrollTop ||
    document.documentElement.scrollTop > ninthScrollTop) {
        ninthText.style.animationName = 'backTextContainer';
        ninthPicture.style.animationName = 'littlePicture';
}       

}