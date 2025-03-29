export function Dropdown() {
    const footerColumns = document.querySelectorAll('.footerLinks .linkColumn');

    function toggleDropdown(column) {
        column.classList.toggle('active');
    }

    function initializeDropdowns() {
        footerColumns.forEach(column => {
            const heading = column.querySelector('h4');

            heading.addEventListener('click', () => toggleDropdown(column));
        });
    }

    initializeDropdowns();
}
