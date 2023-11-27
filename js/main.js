const radioButtons = document.querySelectorAll('input[name="btnradio"]');
const products = document.querySelectorAll('.product');
radioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedSort = button.getAttribute('data-sort');
    if (selectedSort === 'all') {
      products.forEach((product) => {
        product.style.display = 'block';
      });
    } else {
      products.forEach((product) => {
        if (product.getAttribute('data-type') === selectedSort) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    }
  });
});
