// Задание 1. Продолжите работу с проектом из прошлого задания

// Задание 2. В файле index.html добавьте блок для корзины с классом cart.

// Задание 3. В файле script.js добавьте функциональность для добавления товара в корзину при клике на кнопку "Add to Cart".

// Задание 4. Реализуйте функциональность для удаления товаров из корзины при нажатии на кнопку "X".

"use strict";

function addProductsToList(products) {
    const productList = document.getElementById('product-list');
    let htmlContent = '';
    products.forEach(product => {
        htmlContent += `
        <li>
            <img src="${product.image}" alt="${product.title}" width="150" height="150">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button class="add-to-cart"
            data-id="${product.id}">Add to Cart</button>
        </li>
        `;
    });
    productList.insertAdjacentHTML('beforeend', htmlContent);
}

function addToCart(productId) {
    const product = data.find(item => item.id === productId);
    if (product) {
        const cartList = document.getElementById('cart-list');
        const cartItemHTML = `
        <li>
            <img src="${product.image}" alt="${product.title}" width="50" height="50">
            <h3>${product.title}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
        </li>
        `;
        cartList.insertAdjacentHTML('beforeend', cartItemHTML);
    }
}

document.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('add-to-cart')) {
        const productId = parseInt(event.target.getAttribute('data-id'), 10);
        addToCart(productId);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    addProductsToList(data);
});