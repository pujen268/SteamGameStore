document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');
    
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        checkoutButton.style.pointerEvents = 'none';
        checkoutButton.style.opacity = '0.5';
    } else {
        let totalPrice = 0;
        cartItems.forEach(item => {
            const gameDiv = document.createElement('div');
            gameDiv.className = 'cart-item';
            gameDiv.innerHTML = `
                <div>
                    <h2>${item.name}</h2>
                    <p>${item.price}</p>
                </div>
                <button data-game-id="${item.id}">Remove</button>
            `;
            cartItemsContainer.appendChild(gameDiv);

            const price = parseFloat(item.price.replace('$', ''));
            totalPrice += price;
        });

        totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

        document.querySelectorAll('.cart-item button').forEach(button => {
            button.addEventListener('click', (event) => {
                const gameId = button.getAttribute('data-game-id');
                let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                cartItems = cartItems.filter(item => item.id !== gameId);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                window.location.reload();
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    });
});