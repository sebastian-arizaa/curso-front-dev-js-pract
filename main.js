const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart-icon');
const shoppingCarContainer = document.querySelector('#shopping-cart-container');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#product-detail');
const productDetailClose = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleClass);
burgerIcon.addEventListener('click', toggleClass);
menuCarritoIcon.addEventListener('click', toggleClass);
productDetailClose.addEventListener('click', closeProductDetail);

function toggleClass(event){
    if (event.target === menuEmail){
        desktopMenu.classList.toggle('inactiveY');
        shoppingCarContainer.classList.add('inactiveY');
        productDetail.classList.add('inactiveY');
    }else if (event.target === burgerIcon){
        mobileMenu.classList.toggle('inactiveX');
        shoppingCarContainer.classList.add('inactiveY');
        productDetail.classList.add('inactiveY');
    }else if (event.target === menuCarritoIcon){
        shoppingCarContainer.classList.toggle('inactiveY');
        mobileMenu.classList.add('inactiveX');
        desktopMenu.classList.add('inactiveY');
        productDetail.classList.add('inactiveY');
    }
}

function openProductDetail(){
    productDetail.classList.remove('inactiveY');
    shoppingCarContainer.classList.add('inactiveY');
    desktopMenu.classList.add('inactiveY');
}

function closeProductDetail(){
    productDetail.classList.add('inactiveY');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 458,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},{
    name: 'Pc',
    price: 1700,
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
},{
    name: 'Phone',
    price: 1250,
    image: 'https://images.pexels.com/photos/3999536/pexels-photo-3999536.jpeg?auto=compress&cs=tinysrgb&w=1600'
},{
    name: 'Pc',
    price: 1700,
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
},{
    name: 'Phone',
    price: 1250,
    image: 'https://images.pexels.com/photos/3999536/pexels-photo-3999536.jpeg?auto=compress&cs=tinysrgb&w=1600'
},{
    name: 'Bike',
    price: 458,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'Phone',
    price: 1250,
    image: 'https://images.pexels.com/photos/3999536/pexels-photo-3999536.jpeg?auto=compress&cs=tinysrgb&w=1600'
},{
    name: 'Super Bike',
    price: 1250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},{
    name: 'Phone',
    price: 1250,
    image: 'https://images.pexels.com/photos/3999536/pexels-photo-3999536.jpeg?auto=compress&cs=tinysrgb&w=1600'
},{
    name: 'Motor Bike',
    price: 1250,
    image: 'https://images.pexels.com/photos/3999536/pexels-photo-3999536.jpeg?auto=compress&cs=tinysrgb&w=1600'
},{
    name: 'Phone',
    price: 1250,
    image: 'https://images.pexels.com/photos/3999536/pexels-photo-3999536.jpeg?auto=compress&cs=tinysrgb&w=1600'
},{
    name: 'Pc',
    price: 1700,
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

function renderProducts(array){
    for (product of array){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        productImage.addEventListener('click', openProductDetail);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText ='$' + product.price;//clave usar innerText en vez de innerHTML por razones de seguridad

        const productName = document.createElement('p');
        productName.innerText = product.name;//tambien aqui bien usando innerText para evitar que inserten etiquetas html

        const productFigure = document.createElement('figure');

        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');

        cardsContainer.append(productCard);
        productCard.append(productImage,productInfo);
        productInfo.append(productInfoDiv,productFigure);
        productInfoDiv.append(productPrice,productName);
        productFigure.append(productFigureImg);

    }
}

renderProducts(productList);



// otra forma de hacer lo de arriba pero este tiene un hueco de seguridad

/* function renderProducts(array){
    for (product of array){
        const htmlCards = `
            <div class="product-card">
                <img src=${product.image} alt="">
                <div class="product-info">
                    <div>
                        <p>$ ${product.price}</p>
                        <p>${product.name}</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div> `;
    
        cardsContainer.innerHTML += htmlCards;
        // cardsContainer.append(htmlCards);
    }
}

renderProducts(productList); */

