document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const button = event.target;
        const product = button.parentElement;
        const productId = product.querySelector('.add-to-cart').getAttribute('data-id');
        const productName = product.querySelector('h2').textContent;
        const productPrice = product.querySelector('p').textContent;

        // Simulate sending an email
        const emailBody = `Someone bought ${productName} for ${productPrice}`;
        window.location.href = `mailto:cameron.fensome@outlook.com?subject=New Purchase&body=${encodeURIComponent(emailBody)}`;
    }
});
