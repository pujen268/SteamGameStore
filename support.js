document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    const gameItems = document.querySelectorAll('.game');

    function handleSearch() {
        const query = searchInput.value.toLowerCase();
        gameItems.forEach(game => {
            const gameTitle = game.querySelector('h2').textContent.toLowerCase();
            if (gameTitle.includes(query)) {
                game.style.display = 'flex';
            } else {
                game.style.display = 'none';
            }
        });
    }

    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });
});