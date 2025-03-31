export function CartCount() {
const buyButtons = document.querySelectorAll('.buyButton');
const cartCounters = document.querySelectorAll('.cartCount');

let cartItemCount = 0;

function updateCartCount() {
    cartCounters.forEach(counter => {
        counter.textContent = cartItemCount;
    });
}

buyButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        cartItemCount++;
        
        updateCartCount();
        
        this.textContent = 'Adicionado!';
        this.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            this.textContent = 'Comprar';
            this.style.backgroundColor = '';
        }, 1500);
    });
});
}