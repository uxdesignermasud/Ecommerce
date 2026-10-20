// Mobile nav toggle (only if hamburger exists)
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// ── Brand marquee: duplicate track for seamless loop ──
const brandTrack = document.getElementById("brandTrack");
if (brandTrack) {
  brandTrack.innerHTML += brandTrack.innerHTML;
}

// ── Mega menu data (ref-image categories) ──
const CATS = {
  "Fashion": ["Iron", "Ladies Undergarments", "Perfume", "Rain Coat", "Trimmer", "Watches", "Men's Clothing", "Footwear Kids", "Women's Clothing", "Kids' Clothing", "Footwear Women", "Traditional Wear", "Footwear Men", "Activewear", "Underwear & Socks", "Winter Wear", "Sunglasses", "Belts & Wallets"],
  "Electronics & Gadget": ["Smartphones", "Laptops", "Smart Watch", "Headphones", "Earbuds", "Speakers", "Cameras", "Drones", "Chargers", "Power Banks", "Cables", "Keyboards", "Mouse", "Monitors", "Tablets", "Consoles", "VR Headsets", "Smart Home"],
  "Appliances": ["Refrigerators", "Washing Machines", "Microwaves", "Air Conditioners", "Air Fryers", "Vacuum Cleaners", "Fans", "Heaters", "Irons", "Blenders", "Rice Cookers", "Water Heaters"],
  "Mobiles & Tablets": ["Android Phones", "iPhones", "Feature Phones", "Tablets", "Phone Cases", "Screen Guards", "Stylus", "Docks", "Memory Cards", "SIM Accessories"],
  "Kitchen & Dining": ["Cookware Sets", "Knives", "Cutting Boards", "Storage Boxes", "Dinner Sets", "Flasks", "Lunch Boxes", "Gas Stoves", "Chimneys", "Aprons"],
  "Travel Accessories": ["Backpacks", "Trolleys", "Duffel Bags", "Neck Pillows", "Travel Organizers", "Locks", "Adapters", "Water Bottles", "Umbrellas", "Rain Coats"],
  "Bags & Luggage": ["Handbags", "Shoulder Bags", "Tote Bags", "Wallets", "Laptop Bags", "School Bags", "Suitcases", "Gym Bags", "Clutches", "Crossbody Bags"],
  "Personal Care": ["Shampoo", "Face Wash", "Moisturizer", "Sunscreen", "Razors", "Trimmers", "Hair Dryers", "Makeup Kits", "Lipstick", "Deodorants"],
  "Food & Grocery": ["Rice & Grains", "Cooking Oil", "Spices", "Snacks", "Beverages", "Baby Food", "Frozen Foods", "Dairy", "Dry Fruits", "Noodles & Pasta"],
  "Automobiles & Helmets": ["Helmets", "Bike Covers", "Car Fresheners", "Seat Covers", "Mobile Holders", "Air Pumps", "Cleaning Kits", "LED Lights"],
  "Religion Necessaries": ["Prayer Mats", "Tasbih", "Caps", "Attar", "Quran Stands", "Lanterns", "Miswak", "Hijabs"],
  "Medical Supplies": ["Thermometers", "BP Monitors", "Masks", "Sanitizers", "First Aid Kits", "Nebulizers", "Gloves", "Oximeters"],
  "Health Care": ["Vitamins", "Supplements", "Protein", "Herbal Tea", "Honey", "Dry Fruits", "Fitness Bands", "Yoga Mats"],
  "Baby & Kids": ["Diapers", "Baby Food", "Feeding Bottles", "Toys", "School Supplies", "Kids Shoes", "Kids Wear", "Strollers"],
  "Health & Wellness": ["Skincare", "Haircare", "Essential Oils", "Massagers", "Humidifiers", "Sleep Aids", "Detox Teas", "Gym Gear"],
  "Books & Stationery": ["Notebooks", "Pens", "Novels", "Textbooks", "Art Supplies", "Calculators", "Backpacks", "Desk Lamps"]
};

const allCatsBtn = document.getElementById("allCatsBtn");
const megaMenu = document.getElementById("megaMenu");
const megaSide = document.getElementById("megaSide");
const megaSubs = document.getElementById("megaSubs");
const megaTitle = document.getElementById("megaTitle");
const exploreTitle = document.getElementById("exploreTitle");
const exploreText = document.getElementById("exploreText");

function renderMega(cat) {
  megaTitle.textContent = cat;
  exploreTitle.textContent = cat;
  exploreText.textContent = "Browse the top picks in " + cat.toLowerCase() + " from verified sellers.";
  megaSubs.innerHTML = "";
  CATS[cat].forEach((s) => {
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = s;
    megaSubs.appendChild(a);
  });
  megaSide.querySelectorAll("li").forEach((li) => {
    li.classList.toggle("active", li.dataset.cat === cat);
  });
}

Object.keys(CATS).forEach((cat, i) => {
  const li = document.createElement("li");
  if (i === 0) li.classList.add("active");
  li.dataset.cat = cat;
  const b = document.createElement("button");
  b.innerHTML = "<span>" + cat + "</span>";
  const chev = document.createElement("span");
  chev.className = "icon icon-16";
  chev.innerHTML = '<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  b.appendChild(chev);
  b.addEventListener("click", () => renderMega(cat));
  b.addEventListener("mouseenter", () => renderMega(cat));
  li.appendChild(b);
  megaSide.appendChild(li);
});
renderMega("Fashion");

allCatsBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = megaMenu.hidden;
  megaMenu.hidden = !open;
  allCatsBtn.setAttribute("aria-expanded", open ? "true" : "false");
});
document.addEventListener("click", (e) => {
  if (!megaMenu.hidden && !e.target.closest(".catstrip")) {
    megaMenu.hidden = true;
    allCatsBtn.setAttribute("aria-expanded", "false");
  }
});

// ── Deals countdown (workable, ticks every second) ──
const end = Date.now() + ((8 * 24 + 5) * 60 + 10) * 60 * 1000 + 30000;
const pad = (n) => String(n).padStart(2, "0");

function tick() {
  let diff = Math.max(0, end - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById("cd-d").textContent = pad(d);
  document.getElementById("cd-h").textContent = pad(h);
  document.getElementById("cd-m").textContent = pad(m);
  document.getElementById("cd-s").textContent = pad(s);
}

tick();
setInterval(tick, 1000);

// ── Search category dropdown (ref-image style) ──
const searchCatBtn = document.getElementById("searchCatBtn");
const searchCatMenu = document.getElementById("searchCatMenu");
const searchCatLabel = document.getElementById("searchCatLabel");
let searchCat = "all";

searchCatBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = searchCatMenu.hidden;
  searchCatMenu.hidden = !open;
  searchCatBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

searchCatMenu.querySelectorAll("button").forEach((opt) => {
  opt.addEventListener("click", () => {
    searchCatMenu.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
    opt.classList.add("active");
    searchCat = opt.dataset.value;
    searchCatLabel.textContent = opt.textContent;
    searchCatMenu.hidden = true;
    searchCatBtn.setAttribute("aria-expanded", "false");
    filterProducts(searchInput.value);
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search__cat")) {
    searchCatMenu.hidden = true;
    searchCatBtn.setAttribute("aria-expanded", "false");
  }
});

// ── Smart search: text filter ──
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

function filterProducts(query) {
  const q = query.trim().toLowerCase();
  document.querySelectorAll(".mini").forEach((card) => {
    const name = (card.dataset.name || card.querySelector("h3").textContent).toLowerCase();
    card.style.display = !q || name.includes(q) ? "" : "none";
  });
  if (q) {
    document.getElementById("new-arrival").scrollIntoView({ behavior: "smooth" });
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  filterProducts(searchInput.value);
});
searchInput.addEventListener("input", () => filterProducts(searchInput.value));

// ── Image search: upload → preview + naive match ──
const imgSearchBtn = document.getElementById("imgSearchBtn");
const imgSearchInput = document.getElementById("imgSearchInput");
const imgPanel = document.getElementById("imgPanel");
const imgPreview = document.getElementById("imgPreview");
const aiPanel = document.getElementById("aiPanel");

imgSearchBtn.addEventListener("click", () => imgSearchInput.click());

imgSearchInput.addEventListener("change", () => {
  const file = imgSearchInput.files[0];
  if (!file) return;
  aiPanel.hidden = true;
  const url = URL.createObjectURL(file);
  imgPreview.src = url;
  imgPanel.hidden = false;
  document.querySelectorAll(".mini").forEach((card) => (card.style.display = ""));
  document.getElementById("new-arrival").scrollIntoView({ behavior: "smooth" });
});

// ── AI search: keyword extraction → filter + suggestion chips ──
const aiSearchBtn = document.getElementById("aiSearchBtn");
const aiInput = document.getElementById("aiInput");
const aiGo = document.getElementById("aiGo");
const aiChips = document.getElementById("aiChips");

const STOP = new Set(["under", "with", "show", "find", "search", "for", "and", "the", "red", "want", "need", "please", "give", "get"]);

aiSearchBtn.addEventListener("click", () => {
  imgPanel.hidden = true;
  aiPanel.hidden = !aiPanel.hidden;
  if (!aiPanel.hidden) aiInput.focus();
});

function aiSearch(query) {
  const words = query
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP.has(w));
  const keys = [...new Set(words)].slice(0, 4);
  aiChips.innerHTML = "";
  keys.forEach((k) => {
    const b = document.createElement("button");
    b.textContent = k;
    b.addEventListener("click", () => {
      searchInput.value = k;
      filterProducts(k);
    });
    aiChips.appendChild(b);
  });
  filterProducts(keys.join(" ") || query);
  searchInput.value = query;
}

aiGo.addEventListener("click", () => aiSearch(aiInput.value));
aiInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    aiSearch(aiInput.value);
  }
});

// ── Quantity steppers: qty + live total price ──
const money = (n) => "$" + n.toFixed(2);

document.querySelectorAll(".mini").forEach((card) => {
  const num = card.querySelector(".qty span");
  const [minus, plus] = card.querySelectorAll(".qty button");
  const priceEl = card.querySelector(".mini__price");
  const unit = parseFloat(priceEl.dataset.unit || "199");
  const render = () => {
    const q = parseInt(num.textContent, 10);
    priceEl.textContent = money(unit * q);
  };
  minus.addEventListener("click", () => {
    num.textContent = Math.max(1, parseInt(num.textContent, 10) - 1);
    render();
  });
  plus.addEventListener("click", () => {
    num.textContent = Math.min(99, parseInt(num.textContent, 10) + 1);
    render();
  });
});
