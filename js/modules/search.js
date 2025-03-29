export function Search() {
    const searchButtons = document.querySelectorAll('.searchButton');
    const searchInputs = document.querySelectorAll('.searchContainer input');
    const searchDropdowns = document.querySelectorAll('.searchDropdown');
    
    searchButtons.forEach((button, index) => {
        const searchInput = searchInputs[index];
        const searchDropdown = searchDropdowns[index];
        const searchTermDisplay = searchDropdown ? searchDropdown.querySelector('.searchTerm') : null;
        const searchContainer = button.closest('.searchContainer');

        if (button && searchInput && searchDropdown && searchTermDisplay && searchContainer) {
            const showSearchResults = (term) => {
                if (term.trim() !== '') {
                    searchTermDisplay.textContent = term;
                    searchDropdown.style.display = 'flex';
                    
                    setTimeout(() => {
                        searchDropdown.style.display = 'none';
                    }, 3000);
                }
            };

            button.addEventListener('click', () => {
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
    });
}