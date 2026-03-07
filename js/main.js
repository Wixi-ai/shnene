// База данных товаров
const products = [
  // Худи
  {
    id: 1,
    name: "Худи оверсайз 'Киберпанк'",
    category: "hoodies",
    categoryName: "Худи",
    price: 8900,
    description: "Оверсайз худи из плотного хлопка. Светоотражающий принт, капюшон на регуляторах, объемный кенгуру карман.",
    fullDescription: "Худи 'Киберпанк' — это воплощение уличного стиля. Изготовлено из плотного хлопка 320 г/м². Светоотражающий принт спереди и на рукавах. Регулируемый капюшон, манжеты и низ из рибаны. Внутри капюшона контрастная подкладка с принтом.",
    specs: [
      "Материал: 100% хлопок",
      "Плотность: 320 г/м²",
      "Капюшон на регуляторах",
      "Объемный кенгуру карман",
      "Доступные размеры: S, M, L, XL"
    ],
    image: "pictures/cyberpunk.jpg",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "Худи с вышивкой 'Гоша'",
    category: "hoodies",
    categoryName: "Худи",
    price: 7900,
    description: "Классическое худи с объемной вышивкой на груди. Мягкий футер, начес внутри.",
    fullDescription: "Худи с фирменной вышивкой 'Гоша' — базовая модель нашего бренда. Мягкий футер трехнитка с начесом, объемная вышивка на груди, усиленные швы. Идеально для повседневной носки.",
    specs: [
      "Материал: 80% хлопок, 20% полиэстер",
      "Плотность: 280 г/м²",
      "Объемная вышивка",
      "Двойные швы",
      "Доступные размеры: S, M, L, XL"
    ],
    image: "pictures/goshahudi.jpg",
    sizes: ["S", "M", "L", "XL"]
  },
  // Футболки
  {
    id: 3,
    name: "Футболка 'Urban'",
    category: "tshirts",
    categoryName: "Футболки",
    price: 3900,
    description: "Базовая футболка из премиального хлопка. Принт на груди и рукаве.",
    fullDescription: "Футболка 'Urban' — идеальный выбор для города. Плотный хлопок 200 г/м², принт на груди и левом рукаве. Усиленная горловина, двойная строчка по низу.",
    specs: [
      "Материал: 100% хлопок",
      "Плотность: 200 г/м²",
      "Принт на груди и рукаве",
      "Усиленная горловина",
      "Доступные размеры: XS, S, M, L, XL"
    ],
    image: "pictures/footbolka.jpg",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 4,
    name: "Футболка лонгслив 'Neon'",
    category: "tshirts",
    categoryName: "Футболки",
    price: 4900,
    description: "Лонгслив с неоновым принтом. Свободный крой, мягкий материал.",
    fullDescription: "Лонгслив 'Neon' с неоновым принтом, который светится в УФ-свете. Свободный крой, мягкий хлопок с добавлением эластана для комфорта. Ребристые манжеты.",
    specs: [
      "Материал: 95% хлопок, 5% эластан",
      "Неоновый принт",
      "Свободный крой",
      "Доступные размеры: S, M, L, XL"
    ],
    image: "pictures/neon.jpg",
    sizes: ["S", "M", "L", "XL"]
  },
  // Штаны
  {
    id: 5,
    name: "Карго 'Street'",
    category: "pants",
    categoryName: "Штаны",
    price: 6900,
    description: "Удобные карго штаны с накладными карманами. Свободный крой, утяжки на щиколотках.",
    fullDescription: "Карго штаны 'Street' — максимум функциональности. Четыре объемных накладных кармана, свободный крой, утяжки по низу штанин. Плотный хлопок с водоотталкивающей пропиткой.",
    specs: [
      "Материал: 98% хлопок, 2% эластан",
      "Водоотталкивающая пропитка",
      "4 накладных кармана",
      "Утяжки на щиколотках",
      "Доступные размеры: S, M, L, XL"
    ],
    image: "pictures/shtana.jpg",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 6,
    name: "Джоггеры 'Sport'",
    category: "pants",
    categoryName: "Штаны",
    price: 5900,
    description: "Спортивные джоггеры с трикотажными манжетами. Мягкий футер, два боковых кармана.",
    fullDescription: "Джоггеры 'Sport' для активного отдыха. Мягкий футер с начесом, эластичный пояс со шнурком, трикотажные манжеты, два боковых кармана и один накладной сзади.",
    specs: [
      "Материал: 80% хлопок, 20% полиэстер",
      "Футер с начесом",
      "Эластичный пояс",
      "3 кармана",
      "Доступные размеры: S, M, L, XL"
    ],
    image: "pictures/shtanina.jpg",
    sizes: ["S", "M", "L", "XL"]
  },
  // Аксессуары
  {
    id: 7,
    name: "Бейсболка 'Gosha'",
    category: "accessories",
    categoryName: "Аксессуары",
    price: 2900,
    description: "Классическая бейсболка с вышивкой. Регулируемый размер, хлопок.",
    fullDescription: "Бейсболка 'Gosha' — стильный аксессуар на каждый день. Объемная вышивка спереди, регулируемый размер (58-62 см), вентиляционные отверстия, хлопковый материал.",
    specs: [
      "Материал: 100% хлопок",
      "Объемная вышивка",
      "Регулируемый размер",
      "Вентиляция",
      "Цвет: черный"
    ],
    image: "pictures/keparik.jpg",
    sizes: ["One size"]
  },
  {
    id: 8,
    name: "Сумка шоппер 'Neon'",
    category: "accessories",
    categoryName: "Аксессуары",
    price: 3900,
    description: "Вместительный шоппер из плотного материала. Светоотражающий принт.",
    fullDescription: "Шоппер 'Neon' — идеальная сумка для покупок или учебы. Плотный полиэстер, усиленные ручки, внутренний карман, светоотражающий принт спереди.",
    specs: [
      "Материал: полиэстер 600D",
      "Размер: 40x35x10 см",
      "Светоотражающий принт",
      "Внутренний карман",
      "Максимальная нагрузка: 15 кг"
    ],
    image: "pictures/sumka.jpg",
    sizes: ["One size"]
  }
];

// Состояние корзины
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Функция для обновления счетчика корзины
function updateCartCount() {
  const cartCount = document.querySelectorAll('.cart-count');
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  cartCount.forEach(el => {
    el.textContent = totalItems;
  });
}

// Функция для сохранения корзины
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  // Если мы на странице корзины, обновляем её отображение
  if (window.location.pathname.includes('cart.html')) {
    renderCart();
  }
}

// Функция для отображения товаров на главной
function renderProducts(category = 'all') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filteredProducts = category === 'all'
    ? products
    : products.filter(p => p.category === category);

  grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="window.location.href='product.html?id=${product.id}'">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-category">${product.categoryName}</div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price.toLocaleString()} ₽</div>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">В корзину</button>
            </div>
        </div>
    `).join('');
}

// Функция для отображения товара на странице продукта
function renderProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  const product = products.find(p => p.id === productId);

  const detailEl = document.getElementById('product-detail');
  const categoryEl = document.getElementById('product-category');

  if (!detailEl || !product) return;

  if (categoryEl) {
    categoryEl.textContent = product.categoryName;
  }

  detailEl.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-detail-image">
        <div class="product-detail-info">
            <h1>${product.name}</h1>
            <div class="product-detail-category">${product.categoryName}</div>
            <div class="product-detail-price">${product.price.toLocaleString()} ₽</div>
            <p class="product-detail-description">${product.fullDescription}</p>

            <div class="product-specs">
                <h3>Характеристики:</h3>
                <ul>
                    ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
            </div>

            <div class="size-selector">
                <h3>Выберите размер:</h3>
                <div class="sizes">
                    ${product.sizes.map(size => `
                        <button class="size-btn" data-size="${size}">${size}</button>
                    `).join('')}
                </div>
            </div>

            <button class="add-to-cart-large" onclick="addToCart(${product.id})">Добавить в корзину</button>
        </div>
    `;

  // Добавляем обработчики для кнопок размеров
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Рендерим похожие товары
  renderRelatedProducts(product.category, product.id);
}

// Функция для отображения похожих товаров
function renderRelatedProducts(category, currentId) {
  const relatedGrid = document.getElementById('related-products');
  if (!relatedGrid) return;

  const related = products
    .filter(p => p.category === category && p.id !== currentId)
    .slice(0, 3);

  relatedGrid.innerHTML = related.map(product => `
        <div class="product-card" onclick="window.location.href='product.html?id=${product.id}'">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-category">${product.categoryName}</div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price.toLocaleString()} ₽</div>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">В корзину</button>
            </div>
        </div>
    `).join('');
}

// Функция для отображения корзины
function renderCart() {
  const cartContent = document.getElementById('cart-content');
  if (!cartContent) return;

  if (cart.length === 0) {
    cartContent.innerHTML = `
            <div class="cart-empty">
                <p>Ваша корзина пуста</p>
                <a href="index.html#catalog" class="btn">Перейти к покупкам</a>
            </div>
        `;
    return;
  }

  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  cartContent.innerHTML = `
        <div class="cart-items">
            ${cart.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <h3>${item.name}</h3>
                        <p>Размер: ${item.selectedSize || 'One size'}</p>
                    </div>
                    <div class="cart-item-price">${item.price.toLocaleString()} ₽</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 'decrease')">-</button>
                        <span class="quantity-value">${item.quantity || 1}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 'increase')">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Удалить">✕</button>
                </div>
            `).join('')}
        </div>
        <div class="cart-summary">
            <div class="cart-total">
                <span>Итого:</span>
                <span>${total.toLocaleString()} ₽</span>
            </div>
            <div class="cart-actions">
                <button class="clear-cart-btn" onclick="clearCart()">Очистить корзину</button>
                <button class="checkout-btn" onclick="checkout()">Оформить заказ</button>
            </div>
        </div>
    `;
}

// Функция добавления в корзину
window.addToCart = function (productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  // Получаем выбранный размер, если есть
  const selectedSize = document.querySelector('.size-btn.active')?.dataset.size;

  const existingItem = cart.find(item =>
    item.id === productId && item.selectedSize === selectedSize
  );

  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      selectedSize: selectedSize || 'One size',
      quantity: 1
    });
  }

  saveCart();

  // Показываем уведомление
  showNotification('Товар добавлен в корзину!');
};

// Функция обновления количества
window.updateQuantity = function (productId, action) {
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex === -1) return;

  if (action === 'increase') {
    cart[itemIndex].quantity = (cart[itemIndex].quantity || 1) + 1;
  } else if (action === 'decrease') {
    const newQuantity = (cart[itemIndex].quantity || 1) - 1;
    if (newQuantity <= 0) {
      cart.splice(itemIndex, 1);
    } else {
      cart[itemIndex].quantity = newQuantity;
    }
  }

  saveCart();
};

// Функция удаления из корзины
window.removeFromCart = function (productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  showNotification('Товар удален из корзины');
};

// Функция очистки корзины
window.clearCart = function () {
  if (confirm('Вы уверены, что хотите очистить корзину?')) {
    cart = [];
    saveCart();
    showNotification('Корзина очищена');
  }
};

// Функция оформления заказа
window.checkout = function () {
  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  alert(`Спасибо за заказ!\nСумма заказа: ${total.toLocaleString()} ₽\nНаш менеджер свяжется с вами для подтверждения.`);
  // Здесь можно добавить редирект на страницу оформления
};

// Функция показа уведомлений
function showNotification(message) {
  // Создаем уведомление
  const notification = document.createElement('div');
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #ff3e3e, #ff1a1a);
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        box-shadow: 0 5px 20px rgba(255, 62, 62, 0.3);
    `;
  notification.textContent = message;

  // Добавляем анимацию
  const style = document.createElement('style');
  style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
  document.head.appendChild(style);

  document.body.appendChild(notification);

  // Удаляем через 3 секунды
  setTimeout(() => {
    notification.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
  updateCartCount();

  // Инициализация главной страницы
  if (document.getElementById('products-grid')) {
    renderProducts();

    // Обработчики фильтров
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderProducts(this.dataset.category);
      });
    });
  }

  // Инициализация страницы товара
  if (document.getElementById('product-detail')) {
    renderProductDetail();
  }

  // Инициализация страницы корзины
  if (document.getElementById('cart-content')) {
    renderCart();
  }

  // Обработка формы контактов
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
      this.reset();
    });
  }
});
