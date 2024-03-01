document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');
    const shoppingCart = document.getElementById('shopping-cart');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let total = 0;

    // Sample product data (you can replace this with your product data)
    const products = [
        { id: 1, name: 'Product 1', price: 10.99 },
        { id: 2, name: 'Product 2', price: 19.99 },
        { id: 3, name: 'Product 3', price: 5.99 },
    ];

    // Render product list
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `<p>${product.name}</p><p>$${product.price.toFixed(2)}</p>`;
        productElement.addEventListener('click', () => addToCart(product));
        productList.appendChild(productElement);
    });

    // Add product to cart
    function addToCart(product) {
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `<span>${product.name}</span><span>$${product.price.toFixed(2)}</span><button onclick="removeFromCart(${product.id})">Remove</button>`;
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
