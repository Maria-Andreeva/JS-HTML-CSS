"use strict";

// Функция для отображения товаров
function addProductsToList(products) {
    const productList = document.getElementById('product-list');
    let htmlContent = '';
    
    products.forEach(product => {
        htmlContent += `
        <li>
            <img src="${product.url}" alt="${product.name}" width="150" height="150">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </li>
        `;
    });
    
    productList.innerHTML = htmlContent;
}

// Функция для добавления товара в корзину
function addToCart(productId) {
    const product = data.find(item => item.id === productId);
    if (product) {
        const cartList = document.getElementById('cart-list');
        const cartItemHTML = `
        <li class="cart-item" data-id="${product.id}">
            <img src="${product.url}" alt="${product.name}" width="50" height="50">
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button class="remove-from-cart">X</button>
        </li>
        `;
        cartList.insertAdjacentHTML('beforeend', cartItemHTML);
        updateCartTotal();
    }
}

// Функция для удаления товара из корзины
function removeFromCart(productId) {
    const cartItem = document.querySelector(`.cart-item[data-id="${productId}"]`);
    if (cartItem) {
        cartItem.remove();
        updateCartTotal();
    }
}

// Функция для обновления общей стоимости корзины
function updateCartTotal() {
    const totalPriceElement = document.getElementById('total-price');
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;
    
    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('p').textContent.replace('Price: $', ''));
        total += price;
    });
    
    if (!totalPriceElement) {
        const totalPriceContainer = document.createElement('p');
        totalPriceContainer.id = 'total-price';
        document.querySelector('.cart').appendChild(totalPriceContainer);
    }
    
    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Обработчик кликов на кнопки "Add to Cart" и "X"
document.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('add-to-cart')) {
        const productId = parseInt(event.target.getAttribute('data-id'), 10);
        addToCart(productId);
    }
    
    if (event.target && event.target.classList.contains('remove-from-cart')) {
        const productId = parseInt(event.target.closest('.cart-item').getAttribute('data-id'), 10);
        removeFromCart(productId);
    }
});

// Инициализация страницы
document.addEventListener('DOMContentLoaded', () => {
    addProductsToList(data);
});
