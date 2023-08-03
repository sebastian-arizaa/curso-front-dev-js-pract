const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart-icon');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleClass);
burgerIcon.addEventListener('click', toggleClass);
menuCarritoIcon.addEventListener('click', toggleClass);

function toggleClass(event){
    if (event.target === menuEmail){
        desktopMenu.classList.toggle('inactiveY');
        aside.classList.add('inactiveY');
    }else if (event.target === burgerIcon){
        // mobileMenu.classList.toggle('inactiveX');
        mobileMenu.classList.toggle('inactiveX');
        aside.classList.add('inactiveY');
    }else if (event.target === menuCarritoIcon){
        // aside.classList.toggle('inactiveY');
        aside.classList.toggle('inactiveY');
        mobileMenu.classList.add('inactiveX');
        desktopMenu.classList.add('inactiveY');
    }
}
