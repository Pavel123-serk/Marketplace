// let productsGrid = document.getElementById('products-grid');
// let productsArray = [];
// let url = 'https://my-json-server.typicode.com/RobocodeSchool/marketplace';

// function openCart() {
//     cartProd.classList.toggle('hide');
// }
// fetch(url + '/products')
//     .then(async function (response) {
//         let products = await response.json()
//         productsGrid.innerHTML = null;
//         products.forEach(p => {
//             productsArray.push(p);
//             let pElem = document.createElement('div');
//             pElem.classList.add('product');
//             pElem.innerHTML = `
//                 <h2 class='product-name'>${p.name}</h2>
//                 <img class='product-photo' src='${p.photo_url}' alt='${p.name}'>
//                 <p class='product-price'><b>Price: </b>${p.price}$</p>
//                 <p class='product-description'><b>Description: </b>${p.description}</p>
//                 <a href='userProfile.html?id=${p.author_id}'>Seller profile</a>
//                 <button>Buy</button>
//             `;
//             productsGrid.append(pElem);
//         });
//     })

// let productsGrid = document.getElementById('products-grid');
// let productsArray = [];
// let url = 'https://my-json-server.typicode.com/RobocodeSchool/marketplace';

// let cartProd = document.getElementById('cart-products');
// let cart = [];
// function openCart() {
//     cartProd.classList.toggle('hide');
// }

// fetch(url + '/products')
//     .then(async function (response) {
//         let products = await response.json();
//         productsGrid.innerHTML = '';

//         products.forEach(p => {
//             productsArray.push(p);

//             let pElem = document.createElement('div');
//             pElem.classList.add('product');

//             pElem.innerHTML = `
//                 <h2 class='product-name'>${p.name}</h2>
//                 <img class='product-photo' src='${p.photo_url}' alt='${p.name}'>
//                 <p class='product-price'><b>Price: </b>${p.price}$</p>
//                 <p class='product-description'><b>Description: </b>${p.description}</p>
//                 <a href='userProfile.html?id=${p.author_id}'>Seller profile</a>
//                 <button>Buy</button>
//             `;

          
//             pElem.querySelector('button').onclick = () => {
//                 addProductToCart(p.id);
//             };

//             productsGrid.append(pElem);
//         });
//     });

// function addProductToCart(id) {
//     let product = productsArray.find(function(p)
//     cart.push(product);
//     )};
//     renderCart();
// }

// // function renderCart() {
// //     if (cart.length === 0) {
// //         cartProd.innerHTML = 'Cart is empty';
// //         return;
// //     }

// //     cartProd.innerHTML = cart.map(p => `<div>${p.name}</div>`).join('');
// // }


// function addProductToCart(id) {
//     let product = productsArray.find(function(p) {
//     return p.id == id;
//     })
//     cart.push(product);
//     drawCartProducts();
// }

// function drawCartProducts() {
//     if(cart.length === 0) return cartProd.innerHTML = 'Cart is empty';
//     cartProd.innerHTML = null;
//     let sum = 0;
//     cart.forEach(function(p){
//         cartProd.innerHTML +=   `
//             <p><img src="${p.photo_url}"> ${p.name} |${p.price}$</p>
//             <hr>
//         `;
//         sum += p.price;
//     });
//     cartProd.innerHTML += `
//         <p>Total Price: ${sum}$</p> 
//         <button onclick="buyAll()">Buy All</button>  
//     `;
// }

// function buyAll() {
//     cart = [];
//     cartProd.innerHTML = 'Money was withdraw from your credit card';
// }


let productsGrid = document.getElementById('products-grid');
let productsArray = [];
let url = 'https://my-json-server.typicode.com/RobocodeSchool/marketplace';

let cartProd = document.getElementById('cart-products');
let cart = [];

function openCart() {
    cartProd.classList.toggle('hide');
}

function openCart() {
    cartProd.classList.toggle('hide');
}
fetch(url + '/products')
    .then(async function (response) {
        let products = await response.json();
        productsGrid.innerHTML = '';

        products.forEach(p => {
            productsArray.push(p);

            let pElem = document.createElement('div');
            pElem.classList.add('product');

            pElem.innerHTML = `
                <h2 class='product-name'>${p.name}</h2>
                <img class='product-photo' src='${p.photo_url}' alt='${p.name}'>
                <p class='product-price'><b>Price: </b>${p.price}$</p>
                <p class='product-description'><b>Description: </b>${p.description}</p>
                <a href='userProfile.html?id=${p.author_id}'>Seller profile</a>
                <button>Buy</button>
            `;

            // обработчик кнопки
            pElem.querySelector('button').onclick = () => {
                addProductToCart(p.id);
            };

            productsGrid.append(pElem);
        });
    });

function addProductToCart(id) {
    let product = productsArray.find(p => p.id == id);
    cart.push(product);
    drawCartProducts();
}

function drawCartProducts() {
    if (cart.length === 0) {
        cartProd.innerHTML = 'Cart is empty';
        return;
    }

    cartProd.innerHTML = '';
    let sum = 0;

    cart.forEach(p => {
        cartProd.innerHTML += `
            <p>
                <img src="${p.photo_url}" width="30">
                ${p.name} | ${p.price}$
            </p>
            <hr>
        `;
        sum += Number(p.price);
    });

    cartProd.innerHTML += `
        <p><b>Total Price: ${sum}$</b></p> 
        <button onclick="buyAll()">Buy All</button>  
    `;
}

function buyAll() {
    cart = [];
    cartProd.innerHTML = 'Money was withdrawn from your credit card';
}