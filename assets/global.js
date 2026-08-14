// Global theme JavaScript

document.addEventListener('DOMContentLoaded', function() {
  console.log('Theme loaded successfully');
  
  // Initialize cart functionality
  initCart();
  
  // Initialize search
  initSearch();
  
  // Initialize menu
  initMenu();
});

/**
 * Initialize cart functionality
 */
function initCart() {
  const cartButtons = document.querySelectorAll('[data-add-to-cart]');
  
  cartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const productId = this.dataset.productId;
      const quantity = this.dataset.quantity || 1;
      
      addToCart(productId, quantity);
    });
  });
}

/**
 * Add product to cart
 */
function addToCart(productId, quantity) {
  fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items: [
        {
          id: productId,
          quantity: parseInt(quantity)
        }
      ]
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Product added to cart:', data);
    // You can emit a custom event or update UI here
    document.dispatchEvent(new CustomEvent('cart:updated', { detail: data }));
  })
  .catch(error => console.error('Error:', error));
}

/**
 * Initialize search functionality
 */
function initSearch() {
  const searchForm = document.querySelector('[data-search-form]');
  
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const query = this.querySelector('input[name="q"]').value;
      if (query) {
        window.location.href = `/search?q=${encodeURIComponent(query)}`;
      }
    });
  }
}

/**
 * Initialize mobile menu
 */
function initMenu() {
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
      this.setAttribute('aria-expanded', menu.classList.contains('active'));
    });
  }
}

/**
 * Utility function to format currency
 */
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount / 100);
}

/**
 * Utility function to debounce
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
