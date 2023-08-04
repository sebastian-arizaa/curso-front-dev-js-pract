const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart-icon');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleClass);
burgerIcon.addEventListener('click', toggleClass);
menuCarritoIcon.addEventListener('click', toggleClass);

function toggleClass(event){
    if (event.target === menuEmail){
        desktopMenu.classList.toggle('inactiveY');
        aside.classList.add('inactiveY');
    }else if (event.target === burgerIcon){
        mobileMenu.classList.toggle('inactiveX');
        aside.classList.add('inactiveY');
    }else if (event.target === menuCarritoIcon){
        aside.classList.toggle('inactiveY');
        mobileMenu.classList.add('inactiveX');
        desktopMenu.classList.add('inactiveY');
        console.log(event)
    }
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
})

function renderProducts(array){
    for (product of array){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);

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

        console.time(renderProducts)
    }
}

renderProducts(productList);


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

