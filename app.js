document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');
    const shoppingCart = document.getElementById('shopping-cart');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let total = 0;

    // Sample product data (you can replace this with your product data)
    const products = [
        { id: 1, name: 'T shirt', price: 200.99, img: 'images/tshirt.jpg' },
        { id: 2, name: 'T-shirt', price: 199.99, img: 'images/th.jpeg' },
        { id: 3, name: 'Pant', price: 300.99, img: 'images/Jeans.jpeg' },
        { id: 4, name: 'combo', price: 299.99, img: 'images/shirt.jpeg' },
        { id: 5, name: 'Toy', price: 399.99, img: 'images/toy.jpg' },
        { id: 6, name: 'Toy2', price: 499.99, img: 'images/toy.jpg' },
        { id: 7, name: 'jacket', price: 599.99, img: 'images/jacket1.jpeg' },
        { id: 9, name: 'jacket', price: 699.99, img: 'images/j2.jpeg' },
        { id: 10, name: 'jacket', price: 699.99, img: 'images/j3.jpeg' },
        { id: 11, name: 'saree1', price: 699.99, img: 'images/s1.jpeg' },
        { id: 12, name: 'saree2', price: 699.99, img: 'images/s2.jpg' },
        { id: 13, name: 'saree3', price: 699.99, img: 'images/s11.jpeg' },
        { id: 14, name: 'saree4', price: 699.99, img: 'images/s22.jpg' },
        { id: 15, name: 'saree5', price: 699.99, img: 'images/s5.jpeg' },
        { id: 16, name: 'shoes', price: 699.99, img: 'images/sh1.jpeg' },
        { id: 17, name: 'shoes5', price: 699.99, img: 'images/sh2.jpeg' },
        { id: 18, name: 'fsh', price: 699.99, img: 'images/sh4.jpeg' },
        { id: 19, name: 'shoe2', price: 699.99, img: 'images/sh3.jpeg' },
        { id: 20, name: 'shoes9', price: 699.99, img: 'images/sh5.jpeg' },
    ];

    // Render product list
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `<img src=${product.img} style = "height: 150px; width: 100px"> <p>${product.name}</p><p> &#x20b9 ${product.price.toFixed(2)}</p>`;
        productElement.addEventListener('click', () => addToCart(product));
        productList.appendChild(productElement);
    });

    // Add product to cart
    function addToCart(product) {
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.setAttribute('data-product-id', product.id); // Add this line
        cartItem.innerHTML = `<span><img src=${product.img} style = "height: 80px; width: 60px"> ${product.name}</span><span>&#x20b9;${product.price.toFixed(2)}</span><button onclick="removeFromCart(${product.id})">Remove</button>`;
        cartItems.appendChild(cartItem);
        total += product.price;
        totalPriceElement.textContent = total.toFixed(2);
    }

    // Remove product from cart
    window.removeFromCart = function (productId) {
        
        const cartItem = document.querySelector(`.cart-item[data-product-id="${productId}"]`);
        if (cartItem) {
            const productPrice = parseFloat(cartItem.children[1].textContent.slice(1));
            total -= productPrice;
            totalPriceElement.textContent = total.toFixed(2);
            cartItem.remove();
        }
    };
});
