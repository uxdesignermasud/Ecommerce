/* E-com interactions v2 — suggest, drawer, catalog links, steppers, countdown */
(function () {
  "use strict";
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const money = (n) => "$" + Number(n).toFixed(2);
  const P = () => window.ECOM_PRODUCTS || [];
  const getP = (id) => (window.ECOM_get ? window.ECOM_get(id) : P()[0]);

  /* ---------- toast + drawer injection ---------- */
  let toastEl;
  function toast(msg) {
    if (!toastEl) { toastEl = document.createElement("div"); toastEl.className = "toast"; toastEl.setAttribute("role", "status"); document.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add("show");
    clearTimeout(toastEl._t); toastEl._t = setTimeout(() => toastEl.classList.remove("show"), 2200);
  }
  function ensureChrome() {
    if (!$("#ecomScrim")) {
      const sc = document.createElement("div"); sc.className = "scrim"; sc.id = "ecomScrim"; document.body.appendChild(sc);
      sc.addEventListener("click", closeDrawer);
    }
    if (!$("#ecomDrawer")) {
      const d = document.createElement("aside");
      d.className = "drawer"; d.id = "ecomDrawer"; d.setAttribute("aria-label", "Shopping cart");
      d.innerHTML = '<div class="drawer__head"><span id="drawerTitle">0 items</span><button id="drawerClose" aria-label="Close cart">×</button></div><div class="drawer__items" id="drawerItems"></div><div class="drawer__foot"><div class="drawer__total"><span>Sub Total:</span><strong id="drawerTotal">$0.00</strong></div><div class="drawer__btns"><a class="to-cart" href="cart.html">Go to Cart</a><a class="to-check" href="checkout.html">Check out</a></div></div>';
      document.body.appendChild(d);
      $("#drawerClose").addEventListener("click", closeDrawer);
      document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeDrawer(); hideSuggest(); } });
    }
    if (!$(".skip")) { const a = document.createElement("a"); a.className = "skip"; a.href = "#main"; a.textContent = "Skip to content"; document.body.prepend(a); }
    const main = $("main"); if (main && !main.id) main.id = "main";
  }
  function openDrawer() { ensureChrome(); renderCart(); $("#ecomDrawer").classList.add("open"); $("#ecomScrim").classList.add("show"); document.body.style.overflow = "hidden"; }
  function closeDrawer() { const d = $("#ecomDrawer"); if (d) d.classList.remove("open"); const s = $("#ecomScrim"); if (s) s.classList.remove("show"); document.body.style.overflow = ""; }
  function trashIcon() { return (window.ECOM_ICONS && window.ECOM_ICONS.trash) || "Remove"; }
  function renderCart() {
    if (!window.ECOM_cart) return;
    const lines = window.ECOM_cart.lines();
    const box = $("#drawerItems"); if (!box) return;
    $("#drawerTitle").textContent = window.ECOM_cart.count() + " items";
    $("#drawerTotal").textContent = money(window.ECOM_cart.subtotal());
    if (!lines.length) { box.innerHTML = '<p class="drawer__empty">Your cart is empty.<br>Discover something you love.</p>'; }
    else {
      box.innerHTML = lines.map((l) => '<div class="ditem"><img src="' + l.p.img + '" alt="' + l.p.name.replace(/"/g, "") + '" /><div><strong>' + l.p.name + '</strong><p class="pr">' + money(l.p.price) + (l.p.old ? " <s>" + money(l.p.old) + "</s>" : "") + '</p><div class="dstep"><button data-a="dec" data-id="' + l.p.id + '" aria-label="Decrease">+</button><span>' + l.qty + '</span><button data-a="inc" data-id="' + l.p.id + '" aria-label="Increase">−</button></div></div><button class="ditem__rm" data-a="rm" data-id="' + l.p.id + '" aria-label="Remove">' + trashIcon() + '</button></div>').join("");
    }
    $$(".h-icon .count").forEach((el) => { if (el.dataset.k === "cart") el.textContent = window.ECOM_cart.count(); });
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("#ecomDrawer [data-a]");
    if (!b) return;
    const id = b.dataset.id, c = window.ECOM_cart, cur = (c.read()[id] || 0);
    if (b.dataset.a === "inc") c.set(id, cur + 1);
    if (b.dataset.a === "dec") c.set(id, Math.max(0, cur - 1));
    if (b.dataset.a === "rm") c.remove(id);
    renderCart();
  });
  document.addEventListener("ecom:cart", renderCart);
  window.ECOM_add = (id, qty) => { window.ECOM_cart.add(id, qty || 1); renderCart(); toast(getP(id).name + " added to cart"); };
  window.ECOM_openCart = openDrawer;

  /* ---------- header: auth-aware sign-in ---------- */
  function initAuth() {
    const u = window.ECOM_user ? window.ECOM_user.current() : null;
    $$(".h-icon").forEach((a) => {
      const t = (a.textContent || "").toLowerCase();
      if (t.includes("sign in") || t.includes("account") || t.includes("profile")) {
        a.href = u ? "profile.html" : "auth.html";
        const sp = a.querySelector("span");
        if (sp) sp.textContent = u ? (u.name || "Account").split(" ")[0] : "Sign in";
        a.setAttribute("aria-label", u ? "Your account" : "Sign in");
      }
    });
  }

  /* ---------- header badges ---------- */
  function badgeCartIcons() {
    $$(".h-icon").forEach((a) => {
      const t = (a.textContent || "").toLowerCase();
      if (t.includes("cart") && !a.querySelector(".count")) { const s = document.createElement("span"); s.className = "count"; s.dataset.k = "cart"; s.textContent = window.ECOM_cart ? window.ECOM_cart.count() : 0; a.appendChild(s); a.href = "cart.html"; a.addEventListener("click", (e) => { if (a.getAttribute("href") === "cart.html" && e.shiftKey) return; e.preventDefault(); openDrawer(); }); }
      if (t.includes("wishlist")) { a.href = "category.html?q=&wish=1"; }
    });
  }

  /* ---------- mega menu ---------- */
  const CATS = { "Fashion": ["Iron", "Ladies Undergarments", "Perfume", "Rain Coat", "Trimmer", "Watches", "Men's Clothing", "Footwear Kids", "Women's Clothing", "Kids' Clothing", "Footwear Women", "Traditional Wear", "Footwear Men", "Activewear", "Underwear & Socks", "Winter Wear", "Sunglasses", "Belts & Wallets"], "Electronics & Gadget": ["Smartphones", "Laptops", "Smart Watch", "Headphones", "Earbuds", "Speakers", "Cameras", "Drones", "Chargers", "Power Banks", "Cables", "Keyboards", "Mouse", "Monitors", "Tablets", "Consoles", "VR Headsets", "Smart Home"], "Appliances": ["Refrigerators", "Washing Machines", "Microwaves", "Air Conditioners", "Air Fryers", "Vacuum Cleaners", "Fans", "Heaters", "Irons", "Blenders", "Rice Cookers", "Water Heaters"], "Mobiles & Tablets": ["Android Phones", "iPhones", "Feature Phones", "Tablets", "Phone Cases", "Screen Guards", "Stylus", "Docks", "Memory Cards", "SIM Accessories"], "Kitchen & Dining": ["Cookware Sets", "Knives", "Cutting Boards", "Storage Boxes", "Dinner Sets", "Flasks", "Lunch Boxes", "Gas Stoves", "Chimneys", "Aprons"], "Travel Accessories": ["Backpacks", "Trolleys", "Duffel Bags", "Neck Pillows", "Travel Organizers", "Locks", "Adapters", "Water Bottles", "Umbrellas", "Rain Coats"], "Bags & Luggage": ["Handbags", "Shoulder Bags", "Tote Bags", "Wallets", "Laptop Bags", "School Bags", "Suitcases", "Gym Bags", "Clutches", "Crossbody Bags"], "Personal Care": ["Shampoo", "Face Wash", "Moisturizer", "Sunscreen", "Razors", "Trimmers", "Hair Dryers", "Makeup Kits", "Lipstick", "Deodorants"], "Food & Grocery": ["Rice & Grains", "Cooking Oil", "Spices", "Snacks", "Beverages", "Baby Food", "Frozen Foods", "Dairy", "Dry Fruits", "Noodles & Pasta"], "Automobiles & Helmets": ["Helmets", "Bike Covers", "Car Fresheners", "Seat Covers", "Mobile Holders", "Air Pumps", "Cleaning Kits", "LED Lights"], "Religion Necessaries": ["Prayer Mats", "Tasbih", "Caps", "Attar", "Quran Stands", "Lanterns", "Miswak", "Hijabs"], "Medical Supplies": ["Thermometers", "BP Monitors", "Masks", "Sanitizers", "First Aid Kits", "Nebulizers", "Gloves", "Oximeters"], "Health Care": ["Vitamins", "Supplements", "Protein", "Herbal Tea", "Honey", "Dry Fruits", "Fitness Bands", "Yoga Mats"], "Baby & Kids": ["Diapers", "Baby Food", "Feeding Bottles", "Toys", "School Supplies", "Kids Shoes", "Kids Wear", "Strollers"], "Health & Wellness": ["Skincare", "Haircare", "Essential Oils", "Massagers", "Humidifiers", "Sleep Aids", "Detox Teas", "Gym Gear"], "Books & Stationery": ["Notebooks", "Pens", "Novels", "Textbooks", "Art Supplies", "Calculators", "Backpacks", "Desk Lamps"] };
  function initMega() {
    const side = $("#megaSide"); if (!side || side.dataset.done) return; side.dataset.done = "1";
    const subs = $("#megaSubs"), title = $("#megaTitle"), et = $("#exploreTitle"), ex = $("#exploreText");
    const link = (cat, sub) => "category.html?cat=" + encodeURIComponent(cat) + (sub ? "&sub=" + encodeURIComponent(sub) : "");
    function render(cat) {
      if (title) title.textContent = cat;
      if (et) et.textContent = cat;
      if (ex) ex.textContent = "Browse the top picks in " + cat.toLowerCase() + " from verified sellers.";
      if (subs) subs.innerHTML = CATS[cat].map((s) => '<a href="' + link(cat, s) + '">' + s + "</a>").join("");
      $$("li", side).forEach((li) => li.classList.toggle("active", li.dataset.cat === cat));
      const va = $(".megamenu__head a"); if (va) va.href = link(cat);
      const shop = $(".megamenu__explore .btn"); if (shop) shop.href = link(cat);
    }
    Object.keys(CATS).forEach((cat, i) => {
      const li = document.createElement("li"); if (i === 0) li.classList.add("active"); li.dataset.cat = cat;
      const b = document.createElement("button"); b.type = "button";
      b.innerHTML = "<span>" + cat + "</span>";
      b.addEventListener("click", () => render(cat)); b.addEventListener("mouseenter", () => render(cat));
      li.appendChild(b); side.appendChild(li);
    });
    render("Fashion");
    const all = $("#allCatsBtn"), mega = $("#megaMenu");
    if (all && mega) {
      all.addEventListener("click", (e) => { e.stopPropagation(); mega.hidden = !mega.hidden; all.setAttribute("aria-expanded", String(!mega.hidden)); });
      document.addEventListener("click", (e) => { if (!mega.hidden && !e.target.closest(".catstrip")) { mega.hidden = true; all.setAttribute("aria-expanded", "false"); } });
    }
    $$(".catstrip__nav a").forEach((a) => { const t = a.textContent.trim(); if (CATS[t]) a.href = link(t); });
  }

  /* ---------- search suggest ---------- */
  let sugEl, sugIdx = -1, sugList = [];
  function ensureSuggest() {
    if (sugEl) return sugEl;
    const wrap = $(".searchwrap"); if (!wrap) return null;
    wrap.style.position = "relative";
    sugEl = document.createElement("div"); sugEl.className = "suggest"; sugEl.id = "suggest"; sugEl.hidden = true; sugEl.setAttribute("role", "listbox");
    wrap.appendChild(sugEl); return sugEl;
  }
  function hideSuggest() { if (sugEl) sugEl.hidden = true; sugIdx = -1; }
  function showSuggest(items, q) {
    const el = ensureSuggest(); if (!el) return;
    sugList = items; sugIdx = -1;
    if (!q.trim()) { el.hidden = true; return; }
    el.innerHTML = items.length ? items.map((p, i) => '<button class="suggest__row" role="option" data-i="' + i + '" data-id="' + p.id + '"><img src="' + p.img + '" alt="" /><span><strong>' + p.name + '</strong><small>' + p.brand + " · " + p.cat + '</small></span><em>' + money(p.price) + "</em></button>").join("") : '<p class="suggest__empty">No matches for “' + q.replace(/</g, "&lt;") + '” — try “watch”, “phone”, “shoes”.</p>';
    el.hidden = false;
  }
  function initSearch() {
    const form = $("#searchForm"), input = $("#searchInput");
    const catBtn = $("#searchCatBtn"), catMenu = $("#searchCatMenu"), catLabel = $("#searchCatLabel");
    let cat = "all";
    if (catBtn && catMenu) {
      catBtn.addEventListener("click", (e) => { e.stopPropagation(); catMenu.hidden = !catMenu.hidden; });
      $$("button", catMenu).forEach((o) => o.addEventListener("click", () => { $$("button", catMenu).forEach((b) => b.classList.remove("active")); o.classList.add("active"); cat = o.dataset.value; if (catLabel) catLabel.textContent = o.textContent; catMenu.hidden = true; if (input) showSuggest(window.ECOM_search(input.value, cat).slice(0, 6), input.value); }));
      document.addEventListener("click", (e) => { if (!e.target.closest(".search__cat")) catMenu.hidden = true; });
    }
    if (!form || !input) return;
    input.addEventListener("input", () => showSuggest(window.ECOM_search(input.value, cat).slice(0, 6), input.value));
    input.addEventListener("focus", () => { if (input.value.trim()) showSuggest(window.ECOM_search(input.value, cat).slice(0, 6), input.value); });
    input.addEventListener("keydown", (e) => {
      const rows = $$(".suggest__row", sugEl || document);
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        if (!rows.length) return;
        sugIdx = e.key === "ArrowDown" ? Math.min(rows.length - 1, sugIdx + 1) : Math.max(0, sugIdx - 1);
        rows.forEach((r, i) => r.classList.toggle("active", i === sugIdx));
        rows[sugIdx].scrollIntoView({ block: "nearest" });
      } else if (e.key === "Enter" && sugIdx >= 0 && rows[sugIdx]) {
        e.preventDefault(); location.href = "product-details.html?id=" + rows[sugIdx].dataset.id;
      } else if (e.key === "Escape") hideSuggest();
    });
    document.addEventListener("click", (e) => {
      const r = e.target.closest(".suggest__row");
      if (r) { location.href = "product-details.html?id=" + r.dataset.id; return; }
      if (!e.target.closest(".searchwrap")) hideSuggest();
    });
    form.addEventListener("submit", (e) => { e.preventDefault(); hideSuggest(); location.href = "category.html?q=" + encodeURIComponent(input.value) + "&cat=" + encodeURIComponent(cat); });
    /* voice search: Web Speech API -> main search box, hands-free accessible */
    const mic = $("#voiceBtn");
    if (mic && input) {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SR) { mic.disabled = true; mic.title = "Voice search not supported in this browser"; }
      else {
        const rec = new SR();
        rec.lang = "en-US"; rec.interimResults = false; rec.maxAlternatives = 1;
        let on = false;
        const say = (m) => { try { const u = new SpeechSynthesisUtterance(m); u.lang = "en-US"; speechSynthesis.speak(u); } catch (e) {} };
        rec.onresult = (e) => {
          const text = e.results[0][0].transcript || "";
          input.value = text;
          showSuggest(window.ECOM_search(text, cat).slice(0, 6), text);
          toast("Heard: " + text);
          say("Searching for " + text);
          location.href = "category.html?q=" + encodeURIComponent(text) + "&cat=" + encodeURIComponent(cat);
        };
        rec.onerror = () => { on = false; mic.classList.remove("listening"); mic.setAttribute("aria-pressed", "false"); toast("Could not hear — please try again"); };
        rec.onend = () => { on = false; mic.classList.remove("listening"); mic.setAttribute("aria-pressed", "false"); };
        mic.addEventListener("click", () => {
          try { if (on) { rec.stop(); return; } rec.start(); on = true; mic.classList.add("listening"); mic.setAttribute("aria-pressed", "true"); toast("Listening… speak what you want"); }
          catch (e) { toast("Mic blocked — allow microphone access"); }
        });
      }
    }
    const imB = $("#imgSearchBtn"), imI = $("#imgSearchInput"), imP = $("#imgPanel"), imV = $("#imgPreview");
    if (imB && imI) imB.addEventListener("click", () => imI.click());
    if (imI) imI.addEventListener("change", () => { const f = imI.files[0]; if (!f) return; if (imV) imV.src = URL.createObjectURL(f); if (imP) imP.hidden = false; toast("Image added — showing similar picks"); });
  }

  /* ---------- cards: ids + click-to-PDP + add-to-cart ---------- */
  function starRow() { const s = '<svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9 2.9-6z"/></svg>'; return '<p class="stars">' + s.repeat(5) + "</p>"; }
  function cardHTML(p) {
    return '<article class="mini" data-id="' + p.id + '" data-name="' + p.name.toLowerCase() + '" tabindex="0" aria-label="' + p.name.replace(/"/g, "") + '">' +
      '<div class="mini__img"><img src="' + p.img + '" alt="' + p.name.replace(/"/g, "") + '" loading="lazy" /><div class="mini__stepper"><div class="qty"><button aria-label="Decrease quantity">−</button><span>1</span><button aria-label="Increase quantity">+</button></div></div></div>' +
      "<h3>" + p.name + "</h3>" + starRow() +
      '<p class="mini__price" data-unit="' + p.price + '">' + money(p.price) + "</p>" +
      '<div class="mini__actions"><button class="mini__cart">' + ((window.ECOM_ICONS&&window.ECOM_ICONS.cart)||'') + ' Add to Cart</button><a class="mini__view" href="product-details.html?id=' + p.id + '" aria-label="View details">' + ((window.ECOM_ICONS&&window.ECOM_ICONS.eye)||'') + '</a></div></article>';
  }
  window.ECOM_card = cardHTML;
  function hydrateCards() {
    const all = P(); if (!all.length) return;
    $$(".mini").forEach((card, i) => {
      if (!card.dataset.id) {
        const nm = (card.dataset.name || (card.querySelector("h3") || {}).textContent || "").toLowerCase();
        const hit = all.find((p) => nm && (p.name.toLowerCase().includes(nm.split(" ")[0]) || nm.includes(p.name.toLowerCase().split(" ")[0])));
        const p = hit || all[i % all.length];
        card.dataset.id = p.id;
        const img = card.querySelector(".mini__img img"); if (img && img.src.includes("unsplash") && !card.dataset.keep) { /* keep editorial images */ }
        const vw = card.querySelector(".mini__view"); if (vw) vw.href = "product-details.html?id=" + p.id;
      } else { const vw = card.querySelector(".mini__view"); if (vw) vw.href = "product-details.html?id=" + card.dataset.id; }
      if (!card.hasAttribute("tabindex")) card.tabIndex = 0;
    });
  }
  document.addEventListener("click", (e) => {
    const cartB = e.target.closest(".mini__cart");
    if (cartB) { e.stopPropagation(); const card = cartB.closest(".mini"); const q = parseInt(((card || {}).querySelector || (() => null)).call(card, ".qty span")?.textContent || "1", 10) || 1; window.ECOM_add(card.dataset.id, q); return; }
    if (e.target.closest(".qty button")) {
      const btn = e.target.closest(".qty button"), card = btn.closest(".mini"); e.stopPropagation();
      if (!card) return;
      const num = card.querySelector(".qty span"), pe = card.querySelector(".mini__price");
      const unit = parseFloat((pe && pe.dataset.unit) || (getP(card.dataset.id) || {}).price || 199);
      let q = parseInt(num.textContent, 10) || 1;
      q = btn.getAttribute("aria-label") === "Decrease quantity" ? Math.max(1, q - 1) : Math.min(99, q + 1);
      num.textContent = q; if (pe) pe.textContent = money(unit * q);
      return;
    }
    const vw = e.target.closest(".mini__view"); if (vw) return;
    const card = e.target.closest(".mini");
    if (card && card.dataset.id) location.href = "product-details.html?id=" + card.dataset.id;
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Enter" && e.target.classList && e.target.classList.contains("mini")) location.href = "product-details.html?id=" + e.target.dataset.id; });

  /* ---------- password eye toggle (delegated, auth + profile) ---------- */
  document.addEventListener("click", (e) => {
    const eye = e.target.closest(".pw-eye");
    if (!eye) return;
    const input = document.getElementById(eye.dataset.eye);
    if (!input) return;
    const show = input.type === "password";
    input.type = show ? "text" : "password";
    eye.classList.toggle("show", show);
    eye.setAttribute("aria-pressed", String(show));
    eye.setAttribute("aria-label", show ? "Hide password" : "Show password");
  });

  /* ---------- countdown + marquee ---------- */
  function initMisc() {
    const end = Date.now() + ((8 * 24 + 5) * 60 + 10) * 60 * 1000 + 30000;
    const pad = (n) => String(n).padStart(2, "0");
    const d = $("#cd-d"); if (d) { const tick = () => { let diff = Math.max(0, end - Date.now()); d.textContent = pad(Math.floor(diff / 864e5)); $("#cd-h").textContent = pad(Math.floor(diff % 864e5 / 36e5)); $("#cd-m").textContent = pad(Math.floor(diff % 36e5 / 6e4)); $("#cd-s").textContent = pad(Math.floor(diff % 6e4 / 1e3)); }; tick(); setInterval(tick, 1000); }
    const bt = $("#brandTrack"); if (bt && !bt.dataset.dup) { bt.dataset.dup = "1"; bt.innerHTML += bt.innerHTML; }
    const mb = $("#menuBtn"), mn = $("#mainNav"); if (mb && mn) mb.addEventListener("click", () => mn.classList.toggle("open"));
  }

  ensureChrome(); initAuth(); badgeCartIcons(); initMega(); initSearch(); hydrateCards(); renderCart(); initMisc();
})();
