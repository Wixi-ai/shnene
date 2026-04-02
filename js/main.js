// База данных товаров
const products = [
  {
    id: 1,
    name: "Худи оверсайз 'Киберпанк'",
    category: "hoodies",
    categoryName: "Худи",
    price: 8900,
    description: "Оверсайз худи из плотного хлопка. Светоотражающий принт, капюшон на регуляторах, объемный кенгуру карман.",
    fullDescription: "Худи 'Киберпанк' — воплощение уличного стиля. Плотный хлопок 320 г/м². Светоотражающий принт. Регулируемый капюшон.",
    specs: ["Материал: 100% хлопок", "Плотность: 320 г/м²", "Размеры: S, M, L, XL"],
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
    fullDescription: "Худи с вышивкой 'Гоша' — базовая модель. Мягкий футер с начесом, объемная вышивка.",
    specs: ["Материал: 80% хлопок, 20% полиэстер", "Плотность: 280 г/м²", "Размеры: S, M, L, XL"],
    image: "pictures/goshahudi.jpg",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 3,
    name: "Футболка 'Urban'",
    category: "tshirts",
    categoryName: "Футболки",
    price: 3900,
    description: "Базовая футболка из премиального хлопка. Принт на груди и рукаве.",
    fullDescription: "Футболка 'Urban' из плотного хлопка 200 г/м². Принт на груди и рукаве.",
    specs: ["Материал: 100% хлопок", "Плотность: 200 г/м²", "Размеры: XS, S, M, L, XL"],
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
    fullDescription: "Лонгслив 'Neon' с неоновым принтом. Свободный крой, мягкий хлопок с эластаном.",
    specs: ["Материал: 95% хлопок, 5% эластан", "Неоновый принт", "Размеры: S, M, L, XL"],
    image: "pictures/neon.jpg",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 5,
    name: "Карго 'Street'",
    category: "pants",
    categoryName: "Штаны",
    price: 6900,
    description: "Удобные карго штаны с накладными карманами. Свободный крой.",
    fullDescription: "Карго штаны 'Street' с 4 карманами. Свободный крой, утяжки на щиколотках.",
    specs: ["Материал: 98% хлопок, 2% эластан", "4 кармана", "Размеры: S, M, L, XL"],
    image: "pictures/shtana.jpg",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 6,
    name: "Джоггеры 'Sport'",
    category: "pants",
    categoryName: "Штаны",
    price: 5900,
    description: "Спортивные джоггеры с трикотажными манжетами.",
    fullDescription: "Джоггеры 'Sport' с начесом. Эластичный пояс, манжеты, 3 кармана.",
    specs: ["Материал: 80% хлопок, 20% полиэстер", "Футер с начесом", "Размеры: S, M, L, XL"],
    image: "pictures/shtanina.jpg",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 7,
    name: "Бейсболка 'Gosha'",
    category: "accessories",
    categoryName: "Аксессуары",
    price: 2900,
    description: "Классическая бейсболка с вышивкой. Регулируемый размер.",
    fullDescription: "Бейсболка 'Gosha' с объемной вышивкой. Регулируемый размер 58-62 см.",
    specs: ["Материал: 100% хлопок", "Объемная вышивка", "Размер: One size"],
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
    fullDescription: "Шоппер 'Neon' из полиэстера 600D. Внутренний карман, светоотражающий принт.",
    specs: ["Материал: полиэстер 600D", "Размер: 40x35x10 см", "One size"],
    image: "pictures/sumka.jpg",
    sizes: ["One size"]
  }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = cart.reduce((s, i) => s + (i.quantity || 1), 0);
  });
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  if (window.location.pathname.includes('cart.html')) renderCart();
}

function renderProducts(category = 'all') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  const filtered = category === 'all' ? products : products.filter(p => p.category === category);
  grid.innerHTML = filtered.map(p => `
    <div class="product-card" onclick="location.href='product.html?id=${p.id}'">
      <img src="${p.image}" class="product-image">
      <div class="product-info">
        <div class="product-category">${p.categoryName}</div>
        <h3 class="product-title">${p.name}</h3>
        <p class="product-description">${p.description}</p>
        <div class="product-price">${p.price.toLocaleString()} ₽</div>
        <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${p.id})">В корзину</button>
      </div>
    </div>
  `).join('');
}

function renderProductDetail() {
  const id = parseInt(new URLSearchParams(location.search).get('id'));
  const product = products.find(p => p.id === id);
  if (!product) return;
  document.getElementById('product-category').textContent = product.categoryName;
  document.getElementById('product-detail').innerHTML = `
    <img src="${product.image}" class="product-detail-image">
    <div class="product-detail-info">
      <h1>${product.name}</h1>
      <div class="product-detail-category">${product.categoryName}</div>
      <div class="product-detail-price">${product.price.toLocaleString()} ₽</div>
      <p class="product-detail-description">${product.fullDescription}</p>
      <div class="product-specs"><h3>Характеристики:</h3><ul>${product.specs.map(s => `<li>${s}</li>`).join('')}</ul></div>
      <div class="size-selector"><h3>Размер:</h3><div class="sizes">${product.sizes.map(s => `<button class="size-btn" data-size="${s}">${s}</button>`).join('')}</div></div>
      <button class="add-to-cart-large" onclick="addToCart(${product.id})">Добавить в корзину</button>
    </div>
  `;
  document.querySelectorAll('.size-btn').forEach(btn => btn.onclick = function () {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
  document.getElementById('related-products').innerHTML = related.map(p => `
    <div class="product-card" onclick="location.href='product.html?id=${p.id}'">
      <img src="${p.image}" class="product-image">
      <div class="product-info"><h3 class="product-title">${p.name}</h3><div class="product-price">${p.price.toLocaleString()} ₽</div></div>
    </div>
  `).join('');
}

function renderCart() {
  const container = document.getElementById('cart-content');
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty"><p>Корзина пуста</p><a href="index.html#catalog" class="btn">В каталог</a></div>`;
    return;
  }
  const total = cart.reduce((s, i) => s + i.price * (i.quantity || 1), 0);
  container.innerHTML = `
    <div class="cart-items">${cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" class="cart-item-image">
        <div class="cart-item-info"><h3>${item.name}</h3><p>Размер: ${item.selectedSize || 'One size'}</p></div>
        <div class="cart-item-price">${item.price.toLocaleString()} ₽</div>
        <div class="cart-item-quantity">
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, 'decrease')">-</button>
          <span class="quantity-value">${item.quantity || 1}</span>
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, 'increase')">+</button>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
      </div>
    `).join('')}</div>
    <div class="cart-summary">
      <div class="cart-total"><span>Итого:</span><span>${total.toLocaleString()} ₽</span></div>
      <div class="cart-actions">
        <button class="clear-cart-btn" onclick="clearCart()">Очистить</button>
        <button class="checkout-btn" onclick="checkout()">Оформить</button>
      </div>
    </div>
  `;
}

window.addToCart = function (id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const size = document.querySelector('.size-btn.active')?.dataset.size;
  const existing = cart.find(i => i.id === id && i.selectedSize === size);
  if (existing) existing.quantity = (existing.quantity || 1) + 1;
  else cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, selectedSize: size || 'One size', quantity: 1 });
  saveCart();
  showNotification('Товар добавлен!');
};

window.updateQuantity = function (id, action) {
  const idx = cart.findIndex(i => i.id === id);
  if (idx === -1) return;
  if (action === 'increase') cart[idx].quantity = (cart[idx].quantity || 1) + 1;
  else if (action === 'decrease') {
    const newQ = (cart[idx].quantity || 1) - 1;
    if (newQ <= 0) cart.splice(idx, 1);
    else cart[idx].quantity = newQ;
  }
  saveCart();
};

window.removeFromCart = function (id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  showNotification('Товар удален');
};

window.clearCart = function () {
  if (confirm('Очистить корзину?')) { cart = []; saveCart(); showNotification('Корзина очищена'); }
};

function showNotification(msg) {
  const n = document.createElement('div');
  n.textContent = msg;
  n.style.cssText = 'position:fixed;top:20px;right:20px;background:#ff3e3e;color:#fff;padding:15px 25px;border-radius:5px;z-index:9999;animation:slideIn 0.3s';
  document.body.appendChild(n);
  setTimeout(() => n.remove(), 3000);
}

// Оформление заказа с отправкой на почту
window.checkout = function () {
  if (cart.length === 0) { showNotification('Корзина пуста'); return; }
  const total = cart.reduce((s, i) => s + i.price * (i.quantity || 1), 0);
  const details = cart.map(i => `${i.name} x ${i.quantity} шт. = ${(i.price * i.quantity).toLocaleString()} ₽ (${i.selectedSize || 'One size'})`).join('\n');
  document.getElementById('orderDetails').value = details;
  document.getElementById('totalAmount').value = `${total.toLocaleString()} ₽`;
  document.getElementById('checkoutModal').style.display = 'flex';
};

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  if (document.getElementById('products-grid')) {
    renderProducts();
    document.querySelectorAll('.filter-btn').forEach(btn => btn.onclick = () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.category);
    });
  }
  if (document.getElementById('product-detail')) renderProductDetail();
  if (document.getElementById('cart-content')) renderCart();
  document.getElementById('contactForm')?.addEventListener('submit', e => { e.preventDefault(); alert('Спасибо! Мы свяжемся с вами.'); e.target.reset(); });

  const modal = document.getElementById('checkoutModal');
  document.querySelector('.close-modal')?.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

  document.getElementById('orderForm')?.addEventListener('submit', async e => {
    e.preventDefault();
    const email = document.getElementById('orderEmail').value;
    document.getElementById('customerEmail').value = email;
    const fd = new FormData(e.target);
    try {
      const res = await fetch(e.target.action, { method: 'POST', body: fd, headers: { 'Accept': 'application/json' } });
      if (res.ok) {
        showNotification('Заказ отправлен! Мы свяжемся с вами.');
        modal.style.display = 'none';
        e.target.reset();
        cart = [];
        saveCart();
        renderCart();
      } else showNotification('Ошибка отправки');
    } catch { showNotification('Ошибка отправки'); }
  });
});
