export function MegaDropdown() {
    const menuWrapper = document.querySelector('.menuWrapper');
    const megaDropdown = document.querySelector('.megaDropdown');
    const sidebar = document.querySelector('.dropdownSidebar');
    const departmentLinks = document.querySelectorAll('.categoryWrapper a');

    if (!menuWrapper || !megaDropdown) return;

    const showDropdown = (showSidebar = true) => {
        megaDropdown.style.display = 'flex';
        if (sidebar) sidebar.style.display = showSidebar ? 'block' : 'none';
    };

    const hideDropdown = () => {
        megaDropdown.style.display = 'none';
    };

    menuWrapper.addEventListener('mouseenter', () => {
        showDropdown(true);
    });

    departmentLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            showDropdown(false);
        });
    });

    megaDropdown.addEventListener('mouseleave', hideDropdown);

    const menuContainer = document.querySelector('.menuContainer');
    if (menuContainer) {
        menuContainer.addEventListener('mouseleave', (e) => {
            if (!e.relatedTarget || !menuContainer.contains(e.relatedTarget)) {
                hideDropdown();
            }
        });
    }
}