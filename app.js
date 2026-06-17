const products = [
  {
    id: 1,
    name: "Spinach",
    category: "leafy-green",
    price: 2.99,
    icon: "🥬",
    note: "Crisp and perfect for salads, saag, and smoothies.",
  },
  {
    id: 2,
    name: "Arugula (Rocket)",
    category: "leafy-green",
    price: 3.49,
    icon: "🥬",
    note: "Peppery leaves for sandwiches and warm bowls.",
  },
  {
    id: 3,
    name: "Bok Choy",
    category: "leafy-green",
    price: 2.79,
    icon: "🥬",
    note: "Tender stalks with a mild, juicy crunch.",
  },
  {
    id: 4,
    name: "Cabbage (Green)",
    category: "vegetable",
    price: 1.89,
    icon: "🥬",
    note: "Great for slaws, stir-fries, and rolls.",
  },
  {
    id: 5,
    name: "Cabbage (Red)",
    category: "vegetable",
    price: 2.19,
    icon: "🥬",
    note: "Color-rich and ideal for fresh salads.",
  },
  {
    id: 6,
    name: "Kale",
    category: "leafy-green",
    price: 3.29,
    icon: "🥬",
    note: "Nutritious leaves for chips, stews, and juices.",
  },
  {
    id: 7,
    name: "Lettuce (Romaine)",
    category: "leafy-green",
    price: 2.49,
    icon: "🥬",
    note: "Fresh crunch for wraps and Caesar-style salads.",
  },
  {
    id: 8,
    name: "Lettuce (Butterhead)",
    category: "leafy-green",
    price: 2.39,
    icon: "🥬",
    note: "Soft leaves with a buttery texture.",
  },
  {
    id: 9,
    name: "Carrot",
    category: "vegetable",
    price: 1.79,
    icon: "🥕",
    note: "Sweet, crunchy, and excellent for snacks.",
  },
  {
    id: 10,
    name: "Potato",
    category: "vegetable",
    price: 1.49,
    icon: "🥔",
    note: "Everyday staple for roasting, curries, and mash.",
  },
  {
    id: 11,
    name: "Tomato",
    category: "vegetable",
    price: 1.99,
    icon: "🍅",
    note: "Bright acidity for sauces, curries, and salads.",
  },
  {
    id: 12,
    name: "Capsicum",
    category: "vegetable",
    price: 2.29,
    icon: "🫑",
    note: "Colorful slices for sautéing and stuffing.",
  },
  {
    id: 53,
    name: "Mint",
    category: "vegetable",
    price: 1.19,
    icon: "🌿",
    note: "Cooling herb for chutney, tea, and garnish.",
  },
  {
    id: 54,
    name: "Cauliflower",
    category: "vegetable",
    price: 2.69,
    icon: "🥦",
    note: "Fresh florets for roasting, curries, and rice.",
  },
  {
    id: 55,
    name: "Leek",
    category: "vegetable",
    price: 2.49,
    icon: "🥬",
    note: "Mild onion flavor for soups and sautés.",
  },
  {
    id: 56,
    name: "Eggplant",
    category: "vegetable",
    price: 2.89,
    icon: "🍆",
    note: "Soft, smoky slices for grills and stews.",
  },
  {
    id: 57,
    name: "Brussels Sprout",
    category: "vegetable",
    price: 3.39,
    icon: "🥬",
    note: "Mini cabbages that roast beautifully.",
  },
  {
    id: 58,
    name: "Beetroot",
    category: "vegetable",
    price: 2.59,
    icon: "🫜",
    note: "Earthy roots for salads, juice, and roast trays.",
  },
  {
    id: 59,
    name: "Fennel",
    category: "vegetable",
    price: 2.99,
    icon: "🌿",
    note: "Crunchy anise-scented bulb for salads and roasting.",
  },
  {
    id: 60,
    name: "Coriander",
    category: "vegetable",
    price: 1.09,
    icon: "🌿",
    note: "Fresh leaves for garnish, chutney, and tempering.",
  },
  {
    id: 61,
    name: "Knol Khol",
    category: "vegetable",
    price: 2.39,
    icon: "🥬",
    note: "Crunchy bulb with a mild cabbage-like taste.",
  },
  {
    id: 62,
    name: "Turnip",
    category: "vegetable",
    price: 1.99,
    icon: "🫜",
    note: "Fresh root for soups, mash, and roasting.",
  },
  {
    id: 63,
    name: "Bell Pepper",
    category: "vegetable",
    price: 2.79,
    icon: "🫑",
    note: "Sweet peppers in red, yellow, and green.",
  },
  {
    id: 64,
    name: "Bitter Gourd",
    category: "vegetable",
    price: 2.49,
    icon: "🥒",
    note: "Distinctly bitter vegetable for stir-fries.",
  },
  {
    id: 65,
    name: "Radish",
    category: "vegetable",
    price: 1.89,
    icon: "🫜",
    note: "Peppery crunch for salads and pickles.",
  },
  {
    id: 66,
    name: "Garlic",
    category: "vegetable",
    price: 1.79,
    icon: "🧄",
    note: "Aromatic cloves for tempering and sauces.",
  },
  {
    id: 67,
    name: "Zucchini",
    category: "vegetable",
    price: 2.29,
    icon: "🥒",
    note: "Tender squash for grilling, noodles, and sautéing.",
  },
  {
    id: 68,
    name: "Ginger",
    category: "vegetable",
    price: 1.69,
    icon: "🫚",
    note: "Pungent root for curries, tea, and marinades.",
  },
  {
    id: 69,
    name: "Corn",
    category: "vegetable",
    price: 2.19,
    icon: "🌽",
    note: "Sweet kernels for roasting and salads.",
  },
  {
    id: 70,
    name: "Pumpkin",
    category: "vegetable",
    price: 3.49,
    icon: "🎃",
    note: "Smooth flesh for soups, puree, and curry.",
  },
  {
    id: 71,
    name: "Okra",
    category: "vegetable",
    price: 2.09,
    icon: "🌿",
    note: "Tender pods great for quick sautéing.",
  },
  {
    id: 72,
    name: "Red Chillies",
    category: "vegetable",
    price: 1.49,
    icon: "🌶️",
    note: "Heat and color for curries and seasoning.",
  },
  {
    id: 73,
    name: "Celery",
    category: "vegetable",
    price: 1.99,
    icon: "🥬",
    note: "Crunchy stalks for soups and snacking.",
  },
  {
    id: 74,
    name: "Moringa",
    category: "vegetable",
    price: 2.99,
    icon: "🌿",
    note: "Nutritious leaves used in curries and soups.",
  },
  {
    id: 75,
    name: "Pea",
    category: "vegetable",
    price: 2.39,
    icon: "🫛",
    note: "Sweet green peas for pulao and sides.",
  },
  {
    id: 76,
    name: "Yam",
    category: "vegetable",
    price: 3.29,
    icon: "🥔",
    note: "Starchy root for hearty meals and fries.",
  },
  {
    id: 77,
    name: "Horseradish",
    category: "vegetable",
    price: 2.19,
    icon: "🫜",
    note: "Sharp root used to add heat and bite.",
  },
  {
    id: 78,
    name: "Parsnip",
    category: "vegetable",
    price: 2.79,
    icon: "🥕",
    note: "Sweet root vegetable with a nutty finish.",
  },
  {
    id: 79,
    name: "Artichoke",
    category: "vegetable",
    price: 4.29,
    icon: "🌿",
    note: "Tender hearts for dipping and roasting.",
  },
  {
    id: 80,
    name: "Swiss Chard",
    category: "vegetable",
    price: 3.19,
    icon: "🥬",
    note: "Leafy greens with colorful stems.",
  },
  {
    id: 81,
    name: "Mushroom",
    category: "vegetable",
    price: 3.59,
    icon: "🍄",
    note: "Savory mushrooms for soups and stir-fries.",
  },
  {
    id: 82,
    name: "Ash Gourd",
    category: "vegetable",
    price: 2.59,
    icon: "🥒",
    note: "Mild gourd for curries and stews.",
  },
  {
    id: 83,
    name: "Olive",
    category: "vegetable",
    price: 3.89,
    icon: "🫒",
    note: "Briny olives for salads and platters.",
  },
  {
    id: 84,
    name: "Lemon",
    category: "vegetable",
    price: 1.69,
    icon: "🍋",
    note: "Bright citrus for seasoning and drinks.",
  },
  {
    id: 85,
    name: "Asparagus",
    category: "vegetable",
    price: 4.79,
    icon: "🌿",
    note: "Elegant spears for roasting and sautéing.",
  },
  {
    id: 86,
    name: "Sweet Potato",
    category: "vegetable",
    price: 3.09,
    icon: "🍠",
    note: "Naturally sweet root for baking and mash.",
  },
  {
    id: 87,
    name: "Kohlrabi",
    category: "vegetable",
    price: 2.89,
    icon: "🥬",
    note: "Crunchy bulb with a mild broccoli-cabbage taste.",
  },
  {
    id: 13,
    name: "Lime",
    category: "fruits",
    price: 1.29,
    icon: "🍋",
    note: "Bright citrus for drinks, chutney, and garnish.",
  },
  {
    id: 14,
    name: "Strawberry",
    category: "fruits",
    price: 5.49,
    icon: "🍓",
    note: "Sweet berries for desserts and snacks.",
  },
  {
    id: 15,
    name: "Passion Fruit",
    category: "fruits",
    price: 4.59,
    icon: "🟣",
    note: "Tropical pulp with a fragrant tang.",
  },
  {
    id: 16,
    name: "Apple",
    category: "fruits",
    price: 3.99,
    icon: "🍎",
    note: "Classic crisp fruit for lunch boxes.",
  },
  {
    id: 17,
    name: "Pear",
    category: "fruits",
    price: 3.19,
    icon: "🍐",
    note: "Soft and juicy with a mellow sweetness.",
  },
  {
    id: 18,
    name: "Apricot",
    category: "fruits",
    price: 3.79,
    icon: "🍑",
    note: "Small stone fruit with a smooth finish.",
  },
  {
    id: 19,
    name: "Persimmon",
    category: "fruits",
    price: 4.19,
    icon: "🟠",
    note: "Honey-sweet fruit with a soft bite.",
  },
  {
    id: 20,
    name: "Mango",
    category: "fruits",
    price: 2.99,
    icon: "🥭",
    note: "Golden tropical flavor at peak ripeness.",
  },
  {
    id: 21,
    name: "Pomegranate",
    category: "fruits",
    price: 4.59,
    icon: "🍎",
    note: "Ruby seeds for salads, snacks, and juice.",
  },
  {
    id: 22,
    name: "Avocado",
    category: "fruits",
    price: 4.99,
    icon: "🥑",
    note: "Creamy fruit for toast, salads, and bowls.",
  },
  {
    id: 23,
    name: "Banana",
    category: "fruits",
    price: 1.49,
    icon: "🍌",
    note: "Portable energy for breakfast and smoothies.",
  },
  {
    id: 24,
    name: "Cherry",
    category: "fruits",
    price: 5.29,
    icon: "🍒",
    note: "Small, sweet cherries for snacks and desserts.",
  },
  {
    id: 25,
    name: "Sugar Apple",
    category: "fruits",
    price: 4.39,
    icon: "🍏",
    note: "Creamy tropical fruit with a sweet fragrance.",
  },
  {
    id: 26,
    name: "Guava",
    category: "fruits",
    price: 3.29,
    icon: "🍈",
    note: "Aromatic fruit with a sweet, bright bite.",
  },
  {
    id: 27,
    name: "Kiwi",
    category: "fruits",
    price: 4.19,
    icon: "🥝",
    note: "Tart-sweet fruit packed with freshness.",
  },
  {
    id: 28,
    name: "Jackfruit",
    category: "fruits",
    price: 5.99,
    icon: "🍈",
    note: "Large tropical fruit with a rich aroma.",
  },
  {
    id: 29,
    name: "Papaya",
    category: "fruits",
    price: 3.59,
    icon: "🍈",
    note: "Soft tropical fruit for breakfast bowls.",
  },
  {
    id: 30,
    name: "Orange",
    category: "fruits",
    price: 3.49,
    icon: "🍊",
    note: "Sweet citrus with a fresh juice kick.",
  },
  {
    id: 31,
    name: "Peach",
    category: "fruits",
    price: 3.79,
    icon: "🍑",
    note: "Velvety fruit for desserts and fresh eating.",
  },
  {
    id: 32,
    name: "Grape",
    category: "fruits",
    price: 4.99,
    icon: "🍇",
    note: "Sweet clusters for snacking and platters.",
  },
  {
    id: 33,
    name: "Watermelon",
    category: "fruits",
    price: 6.99,
    icon: "🍉",
    note: "Hydrating summer favorite for sharing.",
  },
  {
    id: 34,
    name: "Coconut",
    category: "fruits",
    price: 2.99,
    icon: "🥥",
    note: "Fresh coconut for water, milk, and cooking.",
  },
  {
    id: 35,
    name: "Dragonfruit",
    category: "fruits",
    price: 5.79,
    icon: "🐉",
    note: "Bright tropical fruit with a gentle sweetness.",
  },
  {
    id: 36,
    name: "Blueberry",
    category: "fruits",
    price: 6.99,
    icon: "🫐",
    note: "Tiny berries with a rich, sweet finish.",
  },
  {
    id: 37,
    name: "Grapefruit",
    category: "fruits",
    price: 4.29,
    icon: "🍊",
    note: "Citrus with a bold sweet-bitter edge.",
  },
  {
    id: 38,
    name: "Blackcurrant",
    category: "fruits",
    price: 6.19,
    icon: "🫐",
    note: "Deep berry flavor for juices and jams.",
  },
  {
    id: 39,
    name: "Lychee",
    category: "fruits",
    price: 5.29,
    icon: "🍒",
    note: "Floral tropical fruit with a juicy finish.",
  },
  {
    id: 40,
    name: "Horned Melon",
    category: "fruits",
    price: 5.49,
    icon: "🥒",
    note: "Exotic melon with a bright, refreshing taste.",
  },
  {
    id: 41,
    name: "Pineapple",
    category: "fruits",
    price: 4.49,
    icon: "🍍",
    note: "Tangy slices for snacks and grilling.",
  },
  {
    id: 42,
    name: "Blackberry",
    category: "fruits",
    price: 6.49,
    icon: "🫐",
    note: "Dark berries with a sweet-tart burst.",
  },
  {
    id: 43,
    name: "Kumquat",
    category: "fruits",
    price: 3.99,
    icon: "🍊",
    note: "Tiny citrus fruit eaten whole for a bright bite.",
  },
  {
    id: 44,
    name: "Cranberry",
    category: "fruits",
    price: 4.79,
    icon: "🟥",
    note: "Tart berries for sauces, baking, and juice.",
  },
  {
    id: 45,
    name: "Breadfruit",
    category: "fruits",
    price: 4.59,
    icon: "🍞",
    note: "Starchy tropical fruit for roasting and frying.",
  },
  {
    id: 46,
    name: "Chicken Breast",
    category: "non-veg",
    price: 8.99,
    icon: "🍗",
    note: "Lean protein for grilling and meal prep.",
  },
  {
    id: 47,
    name: "Chicken Thighs",
    category: "non-veg",
    price: 7.99,
    icon: "🍗",
    note: "Juicy cut for roasting and curries.",
  },
  {
    id: 48,
    name: "Fish Fillet",
    category: "non-veg",
    price: 12.99,
    icon: "🐟",
    note: "Mild fillet ready for pan searing.",
  },
  {
    id: 49,
    name: "Eggs (12)",
    category: "non-veg",
    price: 4.99,
    icon: "🥚",
    note: "Kitchen essential for breakfast and baking.",
  },
  {
    id: 50,
    name: "Egg",
    category: "non-veg",
    price: 0.59,
    icon: "🥚",
    note: "Single egg for breakfast, baking, and cooking.",
  },
  {
    id: 51,
    name: "Shrimp",
    category: "non-veg",
    price: 14.99,
    icon: "🦐",
    note: "Quick-cooking seafood with sweet flavor.",
  },
  {
    id: 52,
    name: "Prawn Fish",
    category: "non-veg",
    price: 13.79,
    icon: "🦐",
    note: "Fresh prawns for grills, curries, and stir-fries.",
  },
  {
    id: 53,
    name: "Lamb Chops",
    category: "non-veg",
    price: 16.99,
    icon: "🥩",
    note: "Rich and ideal for special dinners.",
  },
  {
    id: 54,
    name: "Salmon",
    category: "non-veg",
    price: 18.99,
    icon: "🐟",
    note: "Tender fillet with a buttery texture.",
  },
  {
    id: 55,
    name: "Salmonela",
    category: "non-veg",
    price: 15.49,
    icon: "🐟",
    note: "Chef's special seafood-style fillet option.",
  },
  {
    id: 56,
    name: "Tuna Fish",
    category: "non-veg",
    price: 11.49,
    icon: "🐟",
    note: "Firm, protein-rich fish for quick meals.",
  },
  {
    id: 57,
    name: "Whole Chicken",
    category: "non-veg",
    price: 9.99,
    icon: "🍗",
    note: "Whole bird for roasting, grilling, or curry.",
  },
  {
    id: 58,
    name: "Ground Beef",
    category: "non-veg",
    price: 10.99,
    icon: "🥩",
    note: "Versatile base for burgers and sauces.",
  },
  {
    id: 59,
    name: "Pork Chops",
    category: "non-veg",
    price: 11.99,
    icon: "🥩",
    note: "Pan-ready chops with strong flavor.",
  },
  {
    id: 60,
    name: "Mutton",
    category: "non-veg",
    price: 13.99,
    icon: "🥩",
    note: "Slow-cook cut for hearty meals.",
  },
];

const state = {
  filter: "all",
  cart: loadCart(),
  purchases: loadPurchases(),
  reviews: loadReviews(),
  rating: 5,
  selectedFeedbackItem: null,
};

const productGrid = document.getElementById("productGrid");
const cartList = document.getElementById("cartList");
const cartCount = document.getElementById("cartCount");
const itemTotal = document.getElementById("itemTotal");
const cartTotal = document.getElementById("cartTotal");
const cartPanel = document.getElementById("cartPanel");
const backdrop = document.getElementById("backdrop");
const catalogTitle = document.getElementById("catalogTitle");
const feedbackItem = document.getElementById("feedbackItem");
const reviewStack = document.getElementById("reviewStack");
const ratingRow = document.getElementById("ratingRow");

const filterLabels = {
  all: "All products",
  vegetable: "Vegetables",
  "leafy-green": "Leafy greens",
  fruits: "Fruits",
  "non-veg": "Non-veg",
};

function formatPrice(value) {
  return `Rs. ${Math.round(value * 100).toLocaleString("en-IN")}`;
}

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem("fm-cart")) || [];
  } catch {
    return [];
  }
}

function loadReviews() {
  try {
    return JSON.parse(localStorage.getItem("fm-reviews")) || [];
  } catch {
    return [];
  }
}

function loadPurchases() {
  try {
    return JSON.parse(localStorage.getItem("fm-purchases")) || [];
  } catch {
    return [];
  }
}

function saveState() {
  localStorage.setItem("fm-cart", JSON.stringify(state.cart));
  localStorage.setItem("fm-purchases", JSON.stringify(state.purchases));
  localStorage.setItem("fm-reviews", JSON.stringify(state.reviews));
}

function getFilteredProducts() {
  if (state.filter === "all") {
    return products;
  }
  return products.filter((product) => product.category === state.filter);
}

function findProduct(id) {
  return products.find((product) => product.id === id);
}

function getCartItemCount() {
  return state.cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
  return state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(
    () => toast.classList.remove("show"),
    1800,
  );
}

function renderTabs() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === state.filter);
  });
  catalogTitle.textContent = filterLabels[state.filter];
}

function renderProducts() {
  const visibleProducts = getFilteredProducts();
  productGrid.innerHTML = visibleProducts.length
    ? visibleProducts
        .map(
          (product) => `
      <article class="product-card">
        <div class="product-image" aria-hidden="true">${product.icon}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-stars" aria-label="5 star rating">★★★★★</div>
        <p class="product-meta">${formatPrice(product.price)}</p>
        <p class="product-note">${product.note}</p>
        <button class="add-button" type="button" data-add="${product.id}">+ Add</button>
      </article>
    `,
        )
        .join("")
    : '<div class="empty-state">No products found for this category.</div>';
}

function renderCart() {
  if (!state.cart.length) {
    cartList.innerHTML =
      '<div class="empty-state">Your cart is empty. Add items to unlock checkout and feedback.</div>';
  } else {
    cartList.innerHTML = state.cart
      .map(
        (item) => `
      <div class="cart-item">
        <div class="cart-item-icon" aria-hidden="true">${item.icon}</div>
        <div>
          <h3>${item.name}</h3>
          <p>${formatPrice(item.price)} each</p>
        </div>
        <div class="qty-controls">
          <button type="button" data-decrease="${item.id}" aria-label="Decrease ${item.name}">−</button>
          <strong>${item.quantity}</strong>
          <button type="button" data-increase="${item.id}" aria-label="Increase ${item.name}">+</button>
        </div>
      </div>
    `,
      )
      .join("");
  }

  cartCount.textContent = String(getCartItemCount());
  itemTotal.textContent = String(getCartItemCount());
  cartTotal.textContent = formatPrice(getCartTotal());
}

function renderFeedbackOptions() {
  const purchasedItems = state.purchases.flatMap((order) => order.items);
  const uniquePurchased = Array.from(
    new Map(purchasedItems.map((item) => [item.id, item])),
  ).map(([, item]) => item);

  feedbackItem.innerHTML = uniquePurchased.length
    ? uniquePurchased
        .map((item) => `<option value="${item.id}">${item.name}</option>`)
        .join("")
    : '<option value="">Buy an item to leave feedback</option>';

  state.selectedFeedbackItem = uniquePurchased[0]?.id ?? null;
  feedbackItem.value = state.selectedFeedbackItem ?? "";
}

function renderRating() {
  ratingRow.innerHTML = Array.from({ length: 5 }, (_, index) => {
    const rating = index + 1;
    return `<button class="rating-chip ${rating <= state.rating ? "active" : ""}" type="button" data-rating="${rating}">${rating}</button>`;
  }).join("");
}

function renderReviews() {
  const recentPurchases = [...state.purchases].slice(-3).reverse();
  const reviews = [...state.reviews].reverse();

  reviewStack.innerHTML = `
    ${
      recentPurchases.length
        ? recentPurchases
            .map(
              (order) => `
      <article class="review-card">
        <strong>Purchased ${order.items.length} item${order.items.length > 1 ? "s" : ""}</strong>
        <span>${new Date(order.purchasedAt).toLocaleDateString()}</span>
        <p>${order.items.map((item) => item.name).join(", ")}</p>
      </article>
    `,
            )
            .join("")
        : '<div class="empty-state">Buy items first to create a purchase history for feedback.</div>'
    }
    ${
      reviews.length
        ? reviews
            .map(
              (review) => `
      <article class="review-card">
        <strong>${review.productName}</strong>
        <span>${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</span>
        <p>${review.text}</p>
      </article>
    `,
            )
            .join("")
        : ""
    }
  `;
}

function syncAll() {
  renderTabs();
  renderProducts();
  renderCart();
  renderRating();
  renderReviews();
  renderFeedbackOptions();
  saveState();
}

function openCart() {
  cartPanel.classList.add("open");
  backdrop.hidden = false;
}

function closeCart() {
  cartPanel.classList.remove("open");
  backdrop.hidden = true;
}

function addToCart(productId) {
  const product = findProduct(productId);
  if (!product) return;

  const existingItem = state.cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({ ...product, quantity: 1 });
  }

  syncAll();
  openCart();
  showToast(`${product.name} added to cart`);
}

function increaseQuantity(productId) {
  const item = state.cart.find((entry) => entry.id === productId);
  if (!item) return;
  item.quantity += 1;
  syncAll();
}

function decreaseQuantity(productId) {
  const item = state.cart.find((entry) => entry.id === productId);
  if (!item) return;
  item.quantity -= 1;
  state.cart = state.cart.filter((entry) => entry.quantity > 0);
  syncAll();
}

function checkout() {
  if (!state.cart.length) {
    showToast("Add items before checkout");
    return;
  }

  state.purchases.push({
    id: crypto.randomUUID(),
    items: state.cart.map((item) => ({ ...item })),
    purchasedAt: new Date().toISOString(),
  });

  state.selectedFeedbackItem = state.cart[0].id;
  state.cart = [];
  feedbackItem.value = String(state.selectedFeedbackItem);
  openCart();
  showToast("Order completed. Please leave feedback below.");
  document
    .getElementById("feedbackPanel")
    .scrollIntoView({ behavior: "smooth", block: "start" });
  syncAll();
}

function saveFeedback(event) {
  event.preventDefault();
  const productId = Number(feedbackItem.value);
  const product =
    findProduct(productId) || state.cart.find((item) => item.id === productId);
  const text = document.getElementById("feedbackText").value.trim();

  if (!product) {
    showToast("Buy an item before leaving feedback");
    return;
  }

  if (!text) {
    showToast("Please add a short review");
    return;
  }

  state.reviews.push({
    id: crypto.randomUUID(),
    productId: product.id,
    productName: product.name,
    rating: state.rating,
    text,
    createdAt: new Date().toISOString(),
  });

  document.getElementById("feedbackText").value = "";
  state.rating = 5;
  syncAll();
  showToast("Feedback saved");
}

function bindEvents() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      state.filter = tab.dataset.filter;
      syncAll();
    });
  });

  productGrid.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add]");
    if (addButton) {
      addToCart(Number(addButton.dataset.add));
    }
  });

  cartList.addEventListener("click", (event) => {
    const increaseButton = event.target.closest("[data-increase]");
    const decreaseButton = event.target.closest("[data-decrease]");

    if (increaseButton) {
      increaseQuantity(Number(increaseButton.dataset.increase));
    }

    if (decreaseButton) {
      decreaseQuantity(Number(decreaseButton.dataset.decrease));
    }
  });

  document.getElementById("openCartBtn").addEventListener("click", openCart);
  document.getElementById("closeCartBtn").addEventListener("click", closeCart);
  document.getElementById("checkoutBtn").addEventListener("click", checkout);
  backdrop.addEventListener("click", closeCart);
  document
    .getElementById("feedbackForm")
    .addEventListener("submit", saveFeedback);
  document.getElementById("wishlistBtn").addEventListener("click", () => {
    document
      .getElementById("feedbackPanel")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });

  feedbackItem.addEventListener("change", () => {
    state.selectedFeedbackItem = Number(feedbackItem.value);
  });

  ratingRow.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-rating]");
    if (!chip) return;
    state.rating = Number(chip.dataset.rating);
    renderRating();
  });
}

bindEvents();
syncAll();
