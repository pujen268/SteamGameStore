document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    const gameItems = document.querySelectorAll('.game');

    function handleSearch() {
        const query = searchInput.value.toLowerCase();
        gameItems.forEach(game => {
            const gameTitle = game.querySelector('h2').textContent.toLowerCase();
            game.style.display = gameTitle.includes(query) ? 'flex' : 'none';
        });
    }

    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    const addToCartButtons = document.querySelectorAll('.game button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const gameId = button.getAttribute('data-game-id');
            const gameTitle = button.parentElement.querySelector('h2').textContent;
            const gamePrice = button.parentElement.querySelector('p').textContent;

            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            
            const existingGame = cartItems.find(item => item.id === gameId);
            
            if (!existingGame) {
                cartItems.push({ id: gameId, name: gameTitle, price: gamePrice });
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
            }

            window.location.href = 'cart.html';
        });
    });
});