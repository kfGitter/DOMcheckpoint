document.addEventListener('DOMContentLoaded', function () {
    const basket = document.getElementById('basket');
    const totalPriceElement = document.getElementById('totalPrice');

    // Function to update total price
    function updateTotalPrice() {
        let totalPrice = 0;
        document.querySelectorAll('.item').forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').textContent, 10);
            const pricePerItem = 350000; 
            totalPrice += quantity * pricePerItem;
        });
        totalPriceElement.textContent = totalPrice;
    }

    // Event delegation for buttons
    basket.addEventListener('click', function (event) {
        const target = event.target;

        if (target.classList.contains('increment') || target.classList.contains('decrement')) {
            const quantityElement = target.parentElement.querySelector('.quantity');
            let quantity = parseInt(quantityElement.textContent, 10);

            if (target.classList.contains('increment')) {
                quantity++;
            } else if (target.classList.contains('decrement') && quantity > 1) {
                quantity--;
            }

            quantityElement.textContent = quantity;
            updateTotalPrice();
        }

        //Like or not with heart icon
        if (target.classList.contains('heart-icon')) {
            target.style.color = target.style.color === 'red' ? '' : 'red';
        }

        if (target.classList.contains('delete')) {
            const item = target.parentElement;
            item.remove();
            updateTotalPrice();
        }
    });
});
