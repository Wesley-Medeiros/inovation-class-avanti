export function Search() {
    const searchButton = document.querySelector('.searchButton');
    const searchInput = document.querySelector('.searchContainer input');
    const searchDropdown = document.querySelector('.searchDropdown');
    const searchTermDisplay = document.querySelector('.searchTerm');
    const searchContainer = document.querySelector('.searchContainer'); 

    if (searchButton && searchInput && searchDropdown && searchTermDisplay && searchContainer) {
        const showSearchResults = (term) => {
            if (term.trim() !== '') {
                searchTermDisplay.textContent = term;
                searchDropdown.style.display = 'flex'; 
                
                setTimeout(() => {
                    searchDropdown.style.display = 'none';
                }, 3000);
            }
        };

        searchButton.addEventListener('click', () => {
            showSearchResults(searchInput.value);
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                showSearchResults(searchInput.value);
            }
        });

        document.addEventListener('click', (e) => {
            if (!searchContainer.contains(e.target)) {
                searchDropdown.style.display = 'none';
            }
        });
    }
}