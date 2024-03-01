document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');
    const shoppingCart = document.getElementById('shopping-cart');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let total = 0;

    // Sample product data (you can replace this with your product data)
    const products = [
        { id: 1, name: 'Product 1', price: 200.99, img: 'img.jpg' },
        { id: 2, name: 'Product 2', price: 199.99, img: 'img.jpg' },
        { id: 3, name: 'Product 3', price: 300.99, img: 'img.jpg' },
        { id: 4, name: 'Product 4', price: 299.99, img: 'img.jpg' },
        { id: 5, name: 'Product 5', price: 399.99, img: 'img.jpg' },
        { id: 6, name: 'Product 6', price: 499.99, img: 'img.jpg' },
        { id: 7, name: 'Product 7', price: 599.99, img: 'img.jpg' },
        { id: 8, name: 'Product 8', price: 699.99, img: 'img.jpg' },
        { id: 8, name: 'Product 8', price: 699.99, img: 'img.jpg' },
        { id: 8, name: 'Product 8', price: 699.99, img: 'img.jpg' },
        { id: 8, name: 'Product 8', price: 699.99, img: 'img.jpg' },
        { id: 8, name: 'Product 8', price: 699.99, img: 'img.jpg' },
        { id: 8, name: 'Product 8', price: 699.99, img: 'img.jpg' },
        { id: 8, name: 'Product 8', price: 699.99, img: 'img.jpg' },
    ];

    // Render product list
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `<img src=${product.img}> <p>${product.name}</p><p> &#x20b9 ${product.price.toFixed(2)}</p>`;
        productElement.addEventListener('click', () => addToCart(product));
        productList.appendChild(productElement);
    });

    // Add product to cart
    function addToCart(product) {
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `<span>${product.name}</span><span>&#x20b9;${product.price.toFixed(2)}</span><button onclick="removeFromCart(${product.id})">Remove</button>`;
        cartItems.appendChild(cartItem);
        total += product.price;
        totalPriceElement.textContent = total.toFixed(2);
    }

    // Remove product from cart
    window.removeFromCart = function (productId) {
        const cartItem = document.querySelector(`.cart-item:nth-child(${productId})`);
        const productPrice = parseFloat(cartItem.children[1].textContent.slice(1));
        total -= productPrice;
        totalPriceElement.textContent = total.toFixed(2);
        cartItem.remove();
    };
});
