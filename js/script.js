// --- Data for Hats (using placeholder images and the provided image) ---
const allHats = [
    {
        id: 1,
        name: "Elegant Red Fascinator",
        description: "A stunning and elegant red fascinator, perfect for special occasions. Features intricate details.",
        image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Hat+1", // Red background, white text
        price: 120.00 // Keeping price in data for potential internal use, but won't display
    },
    {
        id: 2,
        name: "Chic White Wide Brim",
        description: "A chic wide-brimmed hat in classic white, offering sophisticated sun protection. Ideal for garden parties.",
        image: " https://placehold.co/400x300/FFFFFF/DC2626?text=Hat+2", // White background, red text
        price: 95.00
    },
    {
        id: 3,
        name: "Crimson Red Statement Hat",
        description: "Bold and beautiful crimson red hat with unique structural elements, designed to make a statement.",
        image: " https://placehold.co/400x300/DC2626/FFFFFF?text=Hat+3",
        price: 150.00
    },
    {
        id: 4,
        name: "Light Grey Cloche Hat",
        description: "A charming light grey cloche hat, offering a vintage touch with modern simplicity. Versatile for any outfit.",
        image: " https://placehold.co/400x300/D1D5DB/1F2937?text=Hat+4", // Neutral grey, dark text
        price: 85.00
    },
    {
        id: 5,
        name: "White Feathered Fascinator",
        description: "A delicate white fascinator with graceful feather details, perfect for weddings or sophisticated gatherings.",
        image: " https://placehold.co/400x300/FFFFFF/1F2937?text=Hat+5",
        price: 110.00
    },
    {
        id: 6,
        name: "Classic Black Fedora",
        description: "A timeless black fedora, versatile for both casual and formal wear. A must-have staple.",
        image: " https://placehold.co/400x300/000000/FFFFFF?text=Hat+6",
        price: 90.00
    },
    {
        id: 7,
        name: "Deep Red Occasion Hat",
        description: "A majestic deep red hat, exuding elegance and sophistication. Perfect for grand occasions.",
        image: " https://placehold.co/400x300/800000/FFFFFF?text=Hat+7",
        price: 130.00
    },
    {
        id: 8,
        name: "Patterned White Fascinator",
        description: "A charming fascinator with subtle patterns in white, designed to add a unique touch to your ensemble.",
        image: " https://placehold.co/400x300/F0F0F0/DC2626?text=Hat+8",
        price: 100.00
    },
    {
        id: 9,
        name: "Assorted Collection Piece", // Changed name to be generic
        description: "A unique piece from our diverse collection, showcasing intricate design and craftsmanship.",
        image: " https://placehold.co/400x300/DC2626/FFFFFF?text=Hat+9", // Replaced image_f443d5.png with placeholder
        price: 160.00
    },
    {
        id: 10,
        name: "Elegant Formal Hat",
        description: "A sophisticated hat perfect for formal events, designed with clean lines and a classic silhouette.",
        image: " https://placehold.co/400x300/FFFFFF/DC2626?text=Hat+10", // Changed to red/white placeholder
        price: 125.00
    },
    {
        id: 11,
        name: "Stylish Outdoor Hat",
        description: "A stylish hat designed for outdoor events, offering both elegance and comfort.",
        image: " https://placehold.co/400x300/DC2626/FFFFFF?text=Hat+11", // Changed to red/white placeholder
        price: 115.00
    },
    {
        id: 12,
        name: "Sophisticated Everyday Hat",
        description: "A sophisticated hat suitable for everyday wear, adding a touch of class to your casual outfits.",
        image: " https://placehold.co/400x300/FFFFFF/DC2626?text=Hat+12", // Changed to red/white placeholder
        price: 88.00
    },
    {
        id: 13,
        name: "Unique Design Hat",
        description: "A hat featuring a unique and artistic design, perfect for those who love to stand out.",
        image: " https://placehold.co/400x300/DC2626/FFFFFF?text=Hat+13", // Changed to red/white placeholder
        price: 98.00
    },
    {
        id: 14,
        name: "Classic Sun Hat",
        description: "A classic sun hat providing elegant protection from the sun, ideal for any sunny occasion.",
        image: " https://placehold.co/400x300/FFFFFF/DC2626?text=Hat+14",
        price: 105.00
    },
    {
        id: 15,
        name: "Modern Felt Hat",
        description: "A modern felt hat with a contemporary design, offering a stylish accessory for cooler weather.",
        image: " https://placehold.co/400x300/DC2626/FFFFFF?text=Hat+15",
        price: 92.00
    },
    {
        id: 16,
        name: "Delicate Floral Hat",
        description: "A delicate hat adorned with subtle floral accents, perfect for adding a feminine touch.",
        image: " https://placehold.co/400x300/FFFFFF/DC2626?text=Hat+16",
        price: 108.00
    },
    {
        id: 17,
        name: "Elegant Wide Brim",
        description: "An elegant wide-brimmed hat, combining classic style with practical sun protection.",
        image: " https://placehold.co/400x300/DC2626/FFFFFF?text=Hat+17",
        price: 135.00
    },
    {
        id: 18,
        name: "Lightweight Summer Hat",
        description: "A lightweight hat perfect for summer, offering comfort and style in warm weather.",
        image: " https://placehold.co/400x300/FFFFFF/DC2626?text=Hat+18", // Changed to red/white placeholder
        price: 75.00
    },
    {
        id: 19,
        name: "Velvet Occasion Hat",
        description: "A luxurious velvet hat, ideal for adding a touch of opulence to any special occasion.",
        image: " https://placehold.co/400x300/DC2626/FFFFFF?text=Hat+19",
        price: 140.00
    },
    {
        id: 20,
        name: "Sparkling Design Hat",
        description: "A dazzling hat with sparkling details, designed to make you shine at any event.",
        image: " https://placehold.co/400x300/FFFFFF/DC2626?text=Hat+20",
        price: 118.00
    }
];

// --- Global Variables and DOM Elements ---
const hatGallery = document.getElementById('hatGallery');
const viewMoreBtn = document.getElementById('viewMoreBtn');
const hatModal = document.getElementById('hatModal');
const closeButton = document.querySelector('.close-button');
const modalHatImage = document.getElementById('modalHatImage');
const modalHatName = document.getElementById('modalHatName');
const modalHatDescription = document.getElementById('modalHatDescription');
// Removed modalHatPrice from here
const addToCartBtn = document.getElementById('addToCartBtn');
const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartItemsContainer = document.getElementById('cartItems');
const cartItemCountSpan = document.getElementById('cartItemCount');
const emptyCartMessage = document.getElementById('emptyCartMessage');
const quotationForm = document.getElementById('quotationForm');
const cartDetailsInput = document.getElementById('cartDetailsInput');
let cart = [];
const initialDisplayCount = 12;
let currentDisplayCount = initialDisplayCount;

// --- Functions ---
function displayHats() {
    hatGallery.innerHTML = ''; // Clear existing hats to prevent duplicates on "View More"
    const hatsToDisplay = allHats.slice(0, currentDisplayCount);

    hatsToDisplay.forEach(hat => {
        const hatCard = document.createElement('div');
        hatCard.classList.add('bg-white', 'rounded-lg', 'shadow-lg', 'overflow-hidden', 'cursor-pointer', 'transform', 'hover:scale-105', 'transition', 'duration-300', 'relative');

        // Add an event listener to open the modal when a hat card is clicked
        hatCard.addEventListener('click', () => openHatModal(hat));

        hatCard.innerHTML = `
            <img src="${hat.image}" alt="${hat.name}" class="w-full h-64 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-semibold mb-2 text-primary-red">${hat.name}</h3>
                <p class="text-gray-700 text-sm mb-4">${hat.description.substring(0, 70)}...</p>
                <div class="flex justify-between items-center">
                    <button class="add-to-cart-btn-gallery bg-primary-red text-white px-3 py-1 rounded-full text-sm hover:bg-opacity-90 transition duration-300" data-hat-id="${hat.id}">
                        <i class="fas fa-plus-circle mr-1"></i> Add to Quote
                    </button>
                </div>
            </div>
        `;
        hatGallery.appendChild(hatCard);
    });

    // Handle "View More" button visibility
    if (currentDisplayCount >= allHats.length) {
        viewMoreBtn.style.display = 'none'; // Hide button if all hats are displayed
    } else {
        viewMoreBtn.style.display = 'block'; // Show button if there are more hats
    }

    // Add event listeners for "Add" buttons within the gallery
    document.querySelectorAll('.add-to-cart-btn-gallery').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent modal from opening when "Add" is clicked
            const hatId = parseInt(event.target.closest('button').dataset.hatId);
            const hatToAdd = allHats.find(hat => hat.id === hatId);
            if (hatToAdd) {
                addToCart(hatToAdd);
                showNotification(`${hatToAdd.name} added to quote!`); // Updated notification message
            }
        });
    });
}

function openHatModal(hat) {
    modalHatImage.src = hat.image;
    modalHatName.textContent = hat.name;
    modalHatDescription.textContent = hat.description;
    // Removed modalHatPrice.textContent from here
    addToCartBtn.onclick = () => {
        addToCart(hat);
        showNotification(`${hat.name} added to quote!`); // Updated notification message
    };
    hatModal.style.display = 'flex'; // Use flex for centering
}

function closeHatModal() {
    hatModal.style.display = 'none';
}

function addToCart(hat) {
    const existingItem = cart.find(item => item.id === hat.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...hat, quantity: 1 });
    }
    updateCartDisplay();
}

function removeFromCart(hatId) {
    cart = cart.filter(item => item.id !== hatId);
    updateCartDisplay();
}

function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
    } else {
        emptyCartMessage.style.display = 'none';
        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('flex', 'items-center', 'justify-between', 'p-3', 'bg-gray-100', 'rounded-lg', 'shadow-sm');
            cartItemDiv.innerHTML = `
                <div class="flex items-center">
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-md mr-3">
                    <div>
                        <p class="font-semibold text-primary-red">${item.name}</p>
                        <p class="text-sm text-gray-600">Qty: ${item.quantity}</p> </div>
                </div>
                <button class="text-primary-red hover:text-red-700 transition duration-300" data-hat-id="${item.id}">
                    <i class="fas fa-trash-alt"></i>
                </button>
            `;
            cartItemsContainer.appendChild(cartItemDiv);

            // Add event listener for remove button
            cartItemDiv.querySelector('button').addEventListener('click', () => removeFromCart(item.id));
        });
    }
    cartItemCountSpan.textContent = cart.length;
    updateQuotationFormCartDetails();
}

function updateQuotationFormCartDetails() {
    if (cartDetailsInput) {
        // Only include ID, Name, and Quantity in the form details
        cartDetailsInput.value = JSON.stringify(cart.map(item => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity
            // Removed price from here
        })));
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('fixed', 'bottom-4', 'right-4', 'bg-green-500', 'text-white', 'px-6', 'py-3', 'rounded-full', 'shadow-lg', 'z-50', 'transition-all', 'duration-300', 'transform', 'translate-y-full', 'opacity-0');
    notification.textContent = message;
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-y-full', 'opacity-0');
        notification.classList.add('translate-y-0', 'opacity-100');
    }, 100);

    // Animate out and remove
    setTimeout(() => {
        notification.classList.remove('translate-y-0', 'opacity-100');
        notification.classList.add('translate-y-full', 'opacity-0');
        notification.addEventListener('transitionend', () => notification.remove());
    }, 3000); // Display for 3 seconds
}

function copyToClipboard() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        showNotification('Link copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
        alert('Could not copy link.');
    });
}

// --- Event Listeners ---
viewMoreBtn.addEventListener('click', () => {
    currentDisplayCount += 8; // Load 8 more hats
    displayHats();
});

closeButton.addEventListener('click', closeHatModal);
hatModal.addEventListener('click', (event) => {
    if (event.target === hatModal) {
        closeHatModal();
    }
});

openCartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);

// Function to open the cart sidebar
function openCart() {
    cartSidebar.classList.add('open');
    document.body.classList.add('cart-open'); // Add class to body for background dim/blur
}

// Function to close the cart sidebar
function closeCart() {
    cartSidebar.classList.remove('open');
    document.body.classList.remove('cart-open'); // Remove class from body
}

// --- Initialize when the DOM is fully loaded ---
document.addEventListener('DOMContentLoaded', () => {
    displayHats(); // Call displayHats() to load products when the page loads
    updateCartDisplay(); // Initialize cart display
});