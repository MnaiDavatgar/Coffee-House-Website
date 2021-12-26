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
/* ======================= Scroll Down Effects ======================== */
window.onscroll = function() 
{scrollDownActivator()};   
function scrollDownActivator() {
    
//All Elements effected by page scrolling

    let firstNeon = document.getElementById('firstNeon');
    let secondNeon = document.getElementById('secondNeon');
    let secondLink = document.getElementById('second-part-link');
    let textCont = document.getElementById('first-part-black');
    let secondText = document.getElementById('secondText');
    let thirdText = document.getElementById('thirdText');
    let galleryHeader = document.getElementById('gallery-header');
    let thirdNeon = document.getElementById('thirdNeon');
    let thirdPartBlack = document.getElementById('third-part-black');
    let thirdLink = document.getElementById('third-part-link');
    let fourthNeon = document.getElementById('fourthNeon');
    let fourthContainer = document.getElementById('fourth-part-container');
    let fourthParagraph = document.getElementById('fourth-part-paragraph');
    let fourthLink = document.getElementById('fourth-part-link');
    
    if (document.body.scrollTop > 600 || 
        document.documentElement.scrollTop > 600) {
        firstNeon.style.animationName = 'neonAnimation';
        textCont.style.animationName = 'textAnimation';
    }

    /* ============================ Second Part =========================== */
    if (document.body.scrollTop > 850 || 
        document.documentElement.scrollTop > 850) {
        secondNeon.style.animationName = 'neonAnimation';
        secondText.style.animationName = 'secondTextAnimation';
        thirdText.style.animationName = 'thirdTextAnimation';
        secondLink.style.animationName = 'linksAnime';
    }

    if (document.body.scrollTop > 1390 ||
        document.documentElement.scrollTop > 1390) {
        galleryHeader.style.animationName = 'first-anime';
    }

    /* ============================ Third Part =========================== */
    if (document.body.scrollTop > 2150 ||
        document.documentElement.scrollTop > 2150) {
            thirdNeon.style.animationName = 'first-anime';
            thirdPartBlack.style.animationName = 'fourthTextAnimation';
            thirdLink.style.animationName = 'linksAnime';

    }
    /* ============================ Fourth Part =========================== */
    if (document.body.scrollTop > 2100 ||
        document.documentElement.scrollTop > 2100) {
            fourthNeon.style.animationName = 'first-anime';
            fourthContainer.style.animationName = 'fifthTextAnimation';
            fourthParagraph.style.animationName = 'seventhTextAnimation';
            fourthLink.style.animationName = 'linksAnime';

            fourthHeaderShaker();
        }
}

function fourthHeaderShaker() {

    fourthHeader.style.animationName = 'fourthHeaderShakingAnime';

    setTimeout(animationRemover, 5000);
}

function animationRemover() {

    fourthHeader.style.animationName = 'example';

    setTimeout(fourthHeaderShaker, 5000);
}