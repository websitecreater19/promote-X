// Sample product data (in a real app, this would come from an API)
const products = [
    {
        id: "p1",
        name: "Wireless Bluetooth Earbuds",
        price: 59.99,
        discountPrice: 12.99,
        image: "images/product1.jpg",
        category: "electronics",
        temuUrl: "https://temu.com/p/wireless-bluetooth-earbuds"
    },
    {
        id: "p2",
        name: "Smart Fitness Watch",
        price: 89.99,
        discountPrice: 24.99,
        image: "images/product2.jpg",
        category: "electronics",
        temuUrl: "https://temu.com/p/smart-fitness-watch"
    },
    {
        id: "p3",
        name: "Stainless Steel Water Bottle",
        price: 29.99,
        discountPrice: 8.99,
        image: "images/product3.jpg",
        category: "home",
        temuUrl: "https://temu.com/p/stainless-steel-water-bottle"
    },
    {
        id: "p4",
        name: "Wireless Phone Charger",
        price: 39.99,
        discountPrice: 9.99,
        image: "images/product4.jpg",
        category: "electronics",
        temuUrl: "https://temu.com/p/wireless-phone-charger"
    },
    {
        id: "p5",
        name: "Memory Foam Pillow",
        price: 49.99,
        discountPrice: 14.99,
        image: "images/product5.jpg",
        category: "home",
        temuUrl: "https://temu.com/p/memory-foam-pillow"
    },
    {
        id: "p6",
        name: "Yoga Mat",
        price: 35.99,
        discountPrice: 12.99,
        image: "images/product6.jpg",
        category: "sports",
        temuUrl: "https://temu.com/p/yoga-mat"
    }
];

// DOM Elements
const featuredProductsGrid = document.getElementById('featured-products');
const categoryCards = document.querySelectorAll('.category-card');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load featured products
    loadFeaturedProducts();
    
    // Set up countdown timer
    setupCountdown();
    
    // Set up category click handlers
    setupCategoryHandlers();
    
    // Set up newsletter form
    setupNewsletterForm();
});

// Load featured products
function loadFeaturedProducts() {
    featuredProductsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="price">
                    <span class="original-price">$${product.price.toFixed(2)}</span>
                    <span class="discounted-price">$${product.discountPrice.toFixed(2)}</span>
                </div>
                <a href="${product.temuUrl}" class="btn btn-small" target="_blank">Shop Now</a>
            </div>
        `;
        featuredProductsGrid.appendChild(productCard);
    });
}

// Set up countdown timer
function setupCountdown() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // Set the countdown to 24 hours from now
    let countdownDate = new Date();
    countdownDate.setHours(countdownDate.getHours() + 24);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(countdownTimer);
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
        }
    }
    
    // Update immediately and then every second
    updateCountdown();
    const countdownTimer = setInterval(updateCountdown, 1000);
}

// Set up category click handlers
function setupCategoryHandlers() {
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            // In a real app, this would filter products or navigate to a category page
            // For now, just redirect to Temu's main page
            window.open(`https://temu.com/category/${category}`, '_blank');
        });
    });
}

// Set up newsletter form
function setupNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // In a real app, you would send this to your server
                alert('Thank you for subscribing! You will receive our best deals soon.');
                emailInput.value = '';
            }
        });
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
