/**
 * EIRA JEWELS — Haute Joaillerie India E-Commerce Application Logic
 * INR Currency Engine, Indian Product Categorization, Lore & Bespoke Atelier
 */

(function () {
  'use strict';

  // --- INDIAN LUXURY PRODUCT DATA REPOSITORY (INR BASED) ---
  const PRODUCTS = [
    {
      id: 'eira-polki-01',
      name: 'Padmavati Celestial Polki & Diamond Choker',
      category: 'polki',
      categoryLabel: 'Jadau & Polki Heirlooms',
      price: 685000,
      image: 'assets/images/indian-hero.jpg',
      badge: 'Heritage Masterpiece',
      goldPurity: '22K Solid Gold (BIS 916)',
      grossWeight: '88.40 grams',
      netGoldWeight: '72.10 grams',
      diamonds: '16.50 Carats Uncut Polki & Brilliant Diamonds',
      hallmark: 'BIS Hallmarked with HUID: EH916-2026',
      rating: 5.0,
      reviewsCount: 42,
      description: 'Handcrafted in our Jaipur haveli atelier over 340 artisan hours. Features syndicate-grade uncut Polki diamonds set in 22K yellow gold foil with traditional pink Jaipur meenakari on the reverse and a cascade of Basra seed pearls.',
      sizes: ['Adjustable Dori (Free Size)']
    },
    {
      id: 'eira-chandbali-01',
      name: 'Noor Celestial Polki Chandbalis',
      category: 'chandbalis',
      categoryLabel: 'Chandbalis & Drops',
      price: 245000,
      image: 'assets/images/chandbali.jpg',
      badge: 'Maison Icon',
      goldPurity: '22K Yellow Gold (BIS 916)',
      grossWeight: '34.80 grams',
      netGoldWeight: '28.50 grams',
      diamonds: '5.80 Carats Natural Uncut Polki Diamonds',
      hallmark: 'BIS Hallmarked with HUID: EC916-8812',
      rating: 5.0,
      reviewsCount: 29,
      description: 'Regal crescent moon chandbali earrings inspired by the skies of Rajasthan. Inset with natural uncut diamonds, delicate celestial starburst filigree, and a lush fringing of hand-strung natural Basra pearls.',
      sizes: ['Standard Pierced Post']
    },
    {
      id: 'eira-ring-01',
      name: 'Dhruva Tara Celestial Solitaire Ring',
      category: 'rings',
      categoryLabel: 'Solitaires & Rings',
      price: 365000,
      image: 'assets/images/ring-celestial.jpg',
      badge: 'Signature Solitaire',
      goldPurity: '18K Yellow Gold (AU750)',
      grossWeight: '6.40 grams',
      netGoldWeight: '5.90 grams',
      diamonds: '1.80 Carat Ideal Cut Solitaire (VVS1 / Color E)',
      hallmark: 'BIS Hallmarked with HUID: ER750-4019',
      rating: 5.0,
      reviewsCount: 38,
      description: 'Inspired by the Dhruva Tara (North Star) in the letter A of the EIRA crest. An iconic 1.80ct round brilliant diamond lifted above a band hand-engraved with celestial constellations and micro-pavé stars.',
      sizes: ['10', '12', '14', '16', '18']
    },
    {
      id: 'eira-mangalsutra-01',
      name: 'Tara Modern Celestial Mangalsutra',
      category: 'mangalsutras',
      categoryLabel: 'Modern Mangalsutras',
      price: 185000,
      image: 'assets/images/mangalsutra.jpg',
      badge: 'Modern Bride Favorite',
      goldPurity: '18K Yellow Gold (AU750)',
      grossWeight: '9.20 grams',
      netGoldWeight: '8.40 grams',
      diamonds: '0.85 Carat Solitaire & Pavé Star (VVS / Color E-F)',
      hallmark: 'BIS Hallmarked with HUID: EM750-1093',
      rating: 4.9,
      reviewsCount: 51,
      description: 'A contemporary reinterpretation of the signature marital bond. Auspicious black tourmaline beads alternating with handcrafted 18k gold chain, centered by an eight-point celestial star diamond pendant.',
      sizes: ['16 Inch', '18 Inch', '20 Inch']
    },
    {
      id: 'eira-neck-01',
      name: 'Astraea Diamond Starburst Pendant',
      category: 'neckpieces',
      categoryLabel: 'Hasli, Chokers & Neckpieces',
      price: 275000,
      image: 'assets/images/necklace-starburst.jpg',
      badge: 'New Creation',
      goldPurity: '18K Solid Gold (AU750)',
      grossWeight: '12.80 grams',
      netGoldWeight: '11.90 grams',
      diamonds: '1.45 Carats Micro-Pavé & Center Diamond',
      hallmark: 'BIS Hallmarked with HUID: EN750-7741',
      rating: 4.9,
      reviewsCount: 23,
      description: 'An architectural eight-pointed celestial star pendant radiating timeless luxury. Layered two-tier gold geometry handset with brilliant round diamonds that shimmer with every breath.',
      sizes: ['16 Inch + 2" Extension']
    },
    {
      id: 'eira-kada-01',
      name: 'Nakshtra Constellation Sculpted Kada',
      category: 'kadas',
      categoryLabel: 'Kadas & Bangles',
      price: 490000,
      image: 'assets/images/bangle-constellation.jpg',
      badge: 'Atelier Masterpiece',
      goldPurity: '18K Solid Yellow Gold (AU750)',
      grossWeight: '44.50 grams',
      netGoldWeight: '41.20 grams',
      diamonds: '2.20 Carats Pavé Terminals (VVS2 / Color F)',
      hallmark: 'BIS Hallmarked with HUID: EK750-9321',
      rating: 5.0,
      reviewsCount: 31,
      description: 'A heavy torque kada with hand-beaten gold textures and internal astrological constellation engravings. The bulbous finials are pavé-set with over 180 brilliant diamonds for sublime wrist presence.',
      sizes: ['2.4 (Small)', '2.6 (Medium)', '2.8 (Large)']
    },
    {
      id: 'eira-ring-02',
      name: 'Maharani Emerald & Diamond Royal Ring',
      category: 'rings',
      categoryLabel: 'Solitaires & Rings',
      price: 580000,
      image: 'assets/images/emerald-celestial.jpg',
      badge: 'Haute Joaillerie',
      goldPurity: '18K Yellow Gold (AU750)',
      grossWeight: '11.30 grams',
      netGoldWeight: '9.80 grams',
      diamonds: '2.80ct Zambian Emerald & 1.30ct Baguette Diamonds',
      hallmark: 'BIS Hallmarked with HUID: ER750-5532',
      rating: 5.0,
      reviewsCount: 17,
      description: 'A vivid untreated emerald radiating deep royal greens, framed by a sunburst aura of tapered baguette and round brilliant diamonds. A modern talisman of royal Indian heritage.',
      sizes: ['12', '14', '16']
    },
    {
      id: 'eira-neck-02',
      name: 'Suryavanshi Diamond Collar Necklace',
      category: 'neckpieces',
      categoryLabel: 'Hasli, Chokers & Neckpieces',
      price: 1150000,
      image: 'assets/images/hero-jewellery.jpg',
      badge: 'Private Vault',
      goldPurity: '18K Yellow Gold (AU750)',
      grossWeight: '62.00 grams',
      netGoldWeight: '55.40 grams',
      diamonds: '5.50 Carats Hand-Linked Bezel Diamonds',
      hallmark: 'BIS Hallmarked with HUID: EN750-0012',
      rating: 5.0,
      reviewsCount: 11,
      description: 'A masterpiece of fluid Indian craftsmanship. Undulating golden waves articulated by master karigars to drape weightlessly upon the collarbone, blazing with river-bright diamonds.',
      sizes: ['Choker Collar 15"']
    }
  ];

  // --- APPLICATION STATE (INR FOCUSED) ---
  function readSaved(key) { try { const value = JSON.parse(localStorage.getItem(key) || '[]'); return Array.isArray(value) ? value : []; } catch { return []; } }
  let cart = readSaved('eira_inr_cart').filter(item => PRODUCTS.some(p => p.id === item.id) && Number.isFinite(item.quantity) && item.quantity > 0);
  let wishlist = readSaved('eira_inr_wishlist').filter(id => PRODUCTS.some(p => p.id === id));
  let savedOnly = false;
  let activeCategory = 'all';
  let activeSort = 'featured';

  // --- FORMAT INR CURRENCY (e.g. ₹2,85,000) ---
  function formatINR(amount) {
    return '₹' + Math.round(amount).toLocaleString('en-IN');
  }

  // --- INITIALIZATION ---
  document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initCatalogFilters();
    renderProducts();
    initCartDrawer();
    initWishlist();
    initSearchDrawer();

    initQuickViewModal();

    updateCartCount();
    updateWishlistCount();
    initStorefrontControls();
  });

  // --- HEADER SCROLL ---
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- CATALOG FILTERS & SORTING ---
  function initCatalogFilters() {
    const pillButtons = document.querySelectorAll('.pill-btn');
    pillButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        pillButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-category');
        savedOnly = false;
        pillButtons.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
        renderProducts();
      });
    });

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        activeSort = e.target.value;
        renderProducts();
      });
    }
  }

  function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    let items = savedOnly ? PRODUCTS.filter(p => wishlist.includes(p.id)) : [...PRODUCTS];

    // Filter by Category
    if (activeCategory !== 'all') {
      items = items.filter(p => p.category === activeCategory);
    }

    // Sort items
    if (activeSort === 'price-low') {
      items.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'price-high') {
      items.sort((a, b) => b.price - a.price);
    } else if (activeSort === 'rating') {
      items.sort((a, b) => b.rating - a.rating);
    }

    const counter = document.getElementById('productResultsCount');
    if (counter) counter.textContent = `${items.length} ${savedOnly ? 'saved ' : ''}piece${items.length === 1 ? '' : 's'}`;
    document.getElementById('clearWishlistFilter').hidden = !savedOnly;
    grid.innerHTML = items.length ? items.map(product => {
      const isWishlisted = wishlist.includes(product.id);
      return `
        <article class="product-card" data-id="${product.id}">
          <div class="product-image-container">
            <span class="product-badge ${product.badge.includes('Masterpiece') || product.badge.includes('Vault') ? 'gold' : ''}">
              ${product.badge}
            </span>
            <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-wishlist-id="${product.id}" title="Save piece" aria-label="${isWishlisted ? 'Remove from saved pieces' : 'Save piece'}: ${product.name}" aria-pressed="${isWishlisted}">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            <div class="quick-actions-bar">
              <button class="quick-view-btn" data-quick-id="${product.id}">Quick View</button>
              <button class="instant-add-btn" data-add-id="${product.id}">${product.sizes.length > 1 ? 'Choose Size' : 'Add to Bag'}</button>
            </div>
          </div>
          <div class="product-info">
            <span class="product-category-tag">${product.categoryLabel}</span>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-specs">${product.goldPurity} · Gross: ${product.grossWeight}</p>
            <div class="product-price-row">
              <span class="product-price">${formatINR(product.price)}</span>
              <span class="hallmark-tag">BIS 916/750</span>
            </div>
          </div>
        </article>
      `;
    }).join('') : '<p class="empty-products">No saved pieces yet. Select the heart on a piece to save it.</p>';

    attachProductCardEvents();
  }

  function attachProductCardEvents() {
    document.querySelectorAll('[data-add-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-add-id');
        const product = PRODUCTS.find(p => p.id === id);
        if (product.sizes.length > 1) openQuickView(id);
        else addToCart(id, product.sizes[0]);
      });
    });

    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-wishlist-id');
        toggleWishlist(id);
      });
    });

    document.querySelectorAll('[data-quick-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-quick-id');
        openQuickView(id);
      });
    });
  }

  // --- CART MANAGEMENT (INR) ---
  function initCartDrawer() {
    const cartBtn = document.getElementById('cartToggleBtn');
    const overlay = document.getElementById('cartOverlay');
    const closeBtn = document.getElementById('cartCloseBtn');
    const checkoutBtn = document.getElementById('checkoutBtn');

    if (cartBtn && overlay) {
      cartBtn.addEventListener('click', () => {
        overlay.classList.add('active');
        updateCartDrawer();
      });
    }

    if (closeBtn && overlay) {
      closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
      });
    }

    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('active');
        }
      });
    }

    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
          showToast('Your shopping bag is empty.');
          return;
        }
        showToast('Online checkout is not available yet. Your bag has been saved.');
      });
    }
  }

  function addToCart(productId, size = 'Standard', customNote = null, customPrice = null, customName = null) {
    const product = PRODUCTS.find(p => p.id === productId);
    const itemPrice = customPrice || (product ? product.price : 365000);
    const itemName = customName || (product ? product.name : 'Bespoke Creation');
    const itemImage = product ? product.image : 'assets/images/ring-celestial.jpg';
    const itemSpecs = customNote || (product ? `${product.goldPurity} · Size ${size}` : size);

    const existingIndex = cart.findIndex(item => item.id === productId && item.size === size && item.specs === itemSpecs);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        id: productId,
        name: itemName,
        price: itemPrice,
        image: itemImage,
        size: size,
        specs: itemSpecs,
        quantity: 1
      });
    }

    saveCart();
    updateCartCount();
    updateCartDrawer();

    const overlay = document.getElementById('cartOverlay');
    if (overlay) overlay.classList.add('active');

    showToast(`Added "${itemName}" to your shopping bag`);
  }

  function saveCart() {
    localStorage.setItem('eira_inr_cart', JSON.stringify(cart));
    updateCartCount();
  }

  function updateCartCount() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cartCountBadge');
    if (badge) {
      badge.textContent = totalCount;
      badge.style.display = totalCount > 0 ? 'flex' : 'none';
    }
  }

  function updateCartDrawer() {
    const container = document.getElementById('cartItemsList');
    const subtotalEl = document.getElementById('cartSubtotalAmt');
    const shippingBar = document.getElementById('shippingProgressFill');
    const shippingText = document.getElementById('shippingProgressText');
    if (!container) return;

    if (cart.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <div style="font-size: 2.2rem; color: var(--gold-primary); margin-bottom: 1rem;">✦</div>
          <p style="font-family: var(--font-logo); font-size: 1.15rem; color: var(--text-noir); margin-bottom: 0.5rem;">Your Shopping Bag is Empty</p>
          <p style="font-size: 0.85rem; max-width: 280px; margin: 0 auto 1.5rem; line-height: 1.6;">Explore rings, earrings, necklaces and bangles from the EIRA collection.</p>
          <button class="btn-outline-gold" onclick="document.getElementById('cartOverlay').classList.remove('active'); location.hash='#catalog';">Shop Jewellery</button>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = formatINR(0);
      if (shippingBar) shippingBar.style.width = '0%';
      if (shippingText) shippingText.textContent = `Complimentary Insured Courier on orders over ${formatINR(150000)}`;
      return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (subtotalEl) subtotalEl.textContent = formatINR(subtotal);

    container.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <p class="cart-item-specs">${item.specs}</p>
          <div class="cart-item-row">
            <div class="cart-qty-ctrl">
              <button class="qty-btn" onclick="window.EIRA.updateQuantity(${index}, -1)">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="window.EIRA.updateQuantity(${index}, 1)">+</button>
            </div>
            <span class="cart-item-price">${formatINR(item.price * item.quantity)}</span>
            <button onclick="window.EIRA.removeItem(${index})" style="color: var(--text-muted); font-size: 0.8rem; margin-left: 10px;" title="Remove">✕</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // --- WISHLIST MANAGEMENT ---
  function initWishlist() {
    const wishlistBtn = document.getElementById('wishlistToggleBtn');
    if (wishlistBtn) {
      wishlistBtn.addEventListener('click', () => {
        savedOnly = true;
        activeCategory = 'all';
        document.querySelectorAll('.pill-btn').forEach(b => { const active = b.dataset.category === 'all'; b.classList.toggle('active', active); b.setAttribute('aria-pressed', String(active)); });
        renderProducts();
        location.hash = '#catalog';
      });
    }
  }

  function toggleWishlist(productId) {
    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
      wishlist.splice(idx, 1);
      showToast('Removed piece from Wishlist');
    } else {
      wishlist.push(productId);
      showToast('Saved to your saved pieces');
    }
    localStorage.setItem('eira_inr_wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    renderProducts();
  }

  function updateWishlistCount() {
    const badge = document.getElementById('wishlistCountBadge');
    if (badge) {
      badge.textContent = wishlist.length;
      badge.style.display = wishlist.length > 0 ? 'flex' : 'none';
    }
  }

  // --- LIVE SEARCH DRAWER ---
  function initSearchDrawer() {
    const toggleBtn = document.getElementById('searchToggleBtn');
    const drawer = document.getElementById('searchDrawer');
    const closeBtn = document.getElementById('searchCloseBtn');
    const input = document.getElementById('searchInput');
    const preview = document.getElementById('searchResultsPreview');

    if (toggleBtn && drawer) {
      toggleBtn.addEventListener('click', () => {
        drawer.classList.toggle('active');
        if (drawer.classList.contains('active') && input) {
          input.focus();
        }
      });
    }

    if (closeBtn && drawer) {
      closeBtn.addEventListener('click', () => {
        drawer.classList.remove('active');
      });
    }

    if (input && preview) {
      input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
          preview.innerHTML = '';
          return;
        }

        const matches = PRODUCTS.filter(p => 
          p.name.toLowerCase().includes(query) ||
          p.categoryLabel.toLowerCase().includes(query) ||
          p.goldPurity.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
        );

        if (matches.length === 0) {
          preview.textContent = `No pieces found matching "${e.target.value}".`;
          return;
        }

        preview.innerHTML = matches.map(p => `
          <button type="button" style="display: flex; gap: 12px; align-items: center; text-align: left; padding: 8px; border: 1px solid var(--gold-border-light); background: #FFF; cursor: pointer; border-radius: 2px;" onclick="window.EIRA.openQuickView('${p.id}'); document.getElementById('searchDrawer').classList.remove('active');">
            <img src="${p.image}" alt="${p.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 2px;" />
            <div>
              <div style="font-family: var(--font-logo); font-size: 0.85rem; color: var(--text-noir); font-weight: 600;">${p.name}</div>
              <div style="font-size: 0.75rem; color: var(--gold-deep); font-weight: 700;">${formatINR(p.price)}</div>
            </div>
          </button>
        `).join('');
      });
    }
  }

  // --- QUICK VIEW MODAL ---
  function initQuickViewModal() {
    const overlay = document.getElementById('quickViewOverlay');
    const closeBtn = document.getElementById('quickViewCloseBtn');

    if (closeBtn && overlay) {
      closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
      });
    }

    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
      });
    }
  }

  function openQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const overlay = document.getElementById('quickViewOverlay');
    const imgEl = document.getElementById('modalProductImg');
    const titleEl = document.getElementById('modalProductTitle');
    const catEl = document.getElementById('modalProductCat');
    const priceEl = document.getElementById('modalProductPrice');
    const descEl = document.getElementById('modalProductDesc');
    const specsEl = document.getElementById('modalProductSpecs');
    const sizeSelect = document.getElementById('modalSizeSelect');
    const addBtn = document.getElementById('modalAddBtn');

    if (imgEl) { imgEl.src = product.image; imgEl.alt = product.name; }
    if (titleEl) titleEl.textContent = product.name;
    if (catEl) catEl.textContent = product.categoryLabel;
    if (priceEl) priceEl.textContent = formatINR(product.price);
    if (descEl) descEl.textContent = product.description;
    if (specsEl) specsEl.innerHTML = `
      <strong>Gold Purity:</strong> ${product.goldPurity} <br/>
      <strong>Gross Weight:</strong> ${product.grossWeight} (Net: ${product.netGoldWeight})<br/>
      <strong>Stones:</strong> ${product.diamonds}<br/>
      <strong>Certification:</strong> ${product.hallmark}
    `;

    if (sizeSelect) {
      sizeSelect.innerHTML = product.sizes.map(s => `<option value="${s}">${s}</option>`).join('');
    }

    if (addBtn) {
      addBtn.onclick = () => {
        const selectedSize = sizeSelect ? sizeSelect.value : 'Standard';
        addToCart(product.id, selectedSize);
        overlay.classList.remove('active');
      };
    }

    if (overlay) overlay.classList.add('active');
  }

  // --- TOAST NOTIFICATIONS ---
  function showToast(message) {
    let toast = document.getElementById('toastNotice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastNotice';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.setAttribute('role', 'status');
    toast.classList.add('show');

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  function initStorefrontControls() {
    const menu = document.getElementById('mainMenu');
    const toggle = document.getElementById('mobileMenuBtn');
    toggle.addEventListener('click', () => { const open = menu.classList.toggle('mobile-open'); toggle.setAttribute('aria-expanded', String(open)); });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.classList.remove('mobile-open'); toggle.setAttribute('aria-expanded', 'false'); }));
    document.querySelectorAll('[data-shop-category]').forEach(link => link.addEventListener('click', () => { document.querySelector(`[data-category="${link.dataset.shopCategory}"]`).click(); }));
    document.querySelector('[data-open-saved]').addEventListener('click', () => document.getElementById('wishlistToggleBtn').click());
    document.querySelector('[data-open-bag]').addEventListener('click', () => document.getElementById('cartToggleBtn').click());
    document.getElementById('clearWishlistFilter').addEventListener('click', () => { savedOnly = false; renderProducts(); });
    document.querySelectorAll('.pill-btn').forEach(b => b.setAttribute('aria-pressed', String(b.classList.contains('active'))));
    let returnFocus;
    const overlays = [...document.querySelectorAll('.modal-overlay, .cart-overlay')];
    overlays.forEach(overlay => {
      const sync = () => {
        const open = overlay.classList.contains('active');
        overlay.setAttribute('aria-hidden', String(!open));
        overlay.inert = !open;
        const anyOpen = overlays.some(o => o.classList.contains('active'));
        document.body.classList.toggle('dialog-open', anyOpen);
        document.querySelectorAll('body > main, body > header, body > footer, body > aside').forEach(el => el.inert = anyOpen);
        if (open) { returnFocus = document.activeElement; overlay.querySelector('button')?.focus(); }
        else if (!anyOpen && returnFocus?.isConnected) returnFocus.focus();
      };
      new MutationObserver(sync).observe(overlay, {attributes:true, attributeFilter:['class']});
      overlay.inert = true;
    });
    const drawer = document.getElementById('searchDrawer');
    const syncSearch = () => { const open = drawer.classList.contains('active'); drawer.inert = !open; drawer.setAttribute('aria-hidden', String(!open)); document.getElementById('searchToggleBtn').setAttribute('aria-expanded', String(open)); if (open) document.getElementById('searchInput').focus(); };
    drawer.inert = true; new MutationObserver(syncSearch).observe(drawer,{attributes:true,attributeFilter:['class']});
    document.addEventListener('keydown', e => {
      if(e.key === 'Escape') { overlays.forEach(o => o.classList.remove('active')); drawer.classList.remove('active'); menu.classList.remove('mobile-open'); toggle.setAttribute('aria-expanded','false'); }
      const active = overlays.find(o=>o.classList.contains('active'));
      if(e.key === 'Tab' && active) { const focusable = [...active.querySelectorAll('button:not([disabled]),select,a[href],input')].filter(el=>el.getClientRects().length); const first=focusable[0], last=focusable.at(-1); if(e.shiftKey && document.activeElement===first){ e.preventDefault();last.focus(); } else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();} }
    });
  }

  window.EIRA = {
    updateQuantity: (index, delta) => {
      if (cart[index]) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
          cart.splice(index, 1);
        }
        saveCart();
        updateCartDrawer();
      }
    },
    removeItem: (index) => {
      if (cart[index]) {
        cart.splice(index, 1);
        saveCart();
        updateCartDrawer();
        showToast('Item removed from shopping bag');
      }
    },
    openQuickView: openQuickView,
    addToCart: addToCart
  };

})();
