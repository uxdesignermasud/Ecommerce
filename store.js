/* E-com shared store: catalog + cart + helpers (loaded in <head>, before page scripts) */
(function () {
  const U = (id, w) => "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=" + (w || 800) + "&q=80";
  const IMG = {
    headphone: U("photo-1505740420928-5e560c06d30e"),
    headphoneW: U("photo-1583394838336-acd977736f90"),
    headphoneB: U("photo-1546435770-a3e426bf472b"),
    headphoneC: U("photo-1484704849700-f032a568e944"),
    hpYellow: U("photo-1545127398-14699f92334b"),
    hpBlack: U("photo-1585771724684-38269d6639fd"),
    watch: U("photo-1523275335684-37898b6baf30"),
    watchGold: U("photo-1524592094714-0f0654e20314"),
    watchBlack: U("photo-1547996160-81dfa63595aa"),
    watchDress: U("photo-1434056886845-dac89ffe9b56"),
    smartwatch: U("photo-1546868871-7041f2a55e12"),
    smartwatch2: U("photo-1508685096489-7aacd43bd3b1"),
    smartwatch3: U("photo-1579586337278-3befd40fd17a"),
    perfume: U("photo-1541643600914-78b084683601"),
    perfume2: U("photo-1592945403244-b3fbafd7f539"),
    shoesRed: U("photo-1542291026-7eec264c27ff"),
    shoesWhite: U("photo-1549298916-b41d501d3772"),
    shoesHigh: U("photo-1595950653106-6c9ebd614d3a"),
    shoesCourt: U("photo-1560343090-f0409e92791a"),
    shoesRun: U("photo-1552346154-21d32810aba3"),
    sunglasses: U("photo-1572635196237-14b3f281503f"),
    rayban: U("photo-1511499767150-a48a237f0083"),
    camera: U("photo-1526170375885-4d8ecf77b99f"),
    cameraFilm: U("photo-1516035069371-29a1b244cc32"),
    cameraPro: U("photo-1502920917128-1aa500764cbd"),
    handbag: U("photo-1584917865442-de89df76afd3"),
    handbagRed: U("photo-1548036328-c9fa89d128fa"),
    tote: U("photo-1591561954557-26941169b49e"),
    backpack: U("photo-1553062407-98eeb64c6a62"),
    backpack2: U("photo-1491637639811-60e2756cc1c7"),
    phone: U("photo-1511707171634-5f897ff02aa9"),
    phone2: U("photo-1592750475338-74b7b21085ab"),
    iphone: U("photo-1591337676887-a217a6970a8a"),
    iphoneX: U("photo-1510557880182-3d4d3cba35a5"),
    galaxyA: U("photo-1610945265064-0e34e5519bbf"),
    oneplus: U("photo-1580910051074-3eb694886505"),
    tablet: U("photo-1544244015-0df4b3ffc6b0"),
    tablet2: U("photo-1561154464-82e9adf32764"),
    sofa: U("photo-1555041469-a586c61ea9bc"),
    armchair: U("photo-1493663284031-b7e3aefcae8e"),
    chair: U("photo-1586023492125-27b2c045efd7"),
    lamp: U("photo-1513506003901-1e6a229e2d15"),
    lampDesk: U("photo-1507473885765-e6ed057f782c"),
    tshirt: U("photo-1521572163474-6864f9cf17ab"),
    tshirt2: U("photo-1620799140408-edc6dcb6d633"),
    tshirt3: U("photo-1576566588028-4147f3842f27"),
    shirt: U("photo-1596755094514-f87e34085b2c"),
    jeans: U("photo-1542272604-787c3835535d"),
    jeans2: U("photo-1541099649105-f69ad21f3246"),
    blazer: U("photo-1594938298603-c8148c4dae35"),
    suit: U("photo-1507679799987-c73779587ccf"),
    earbuds: U("photo-1590658268037-6bf12165a8df"),
    airpods: U("photo-1572569511254-d8f925fe2cbb"),
    speaker: U("photo-1608043152269-423dbba4e7e1"),
    speakerSmart: U("photo-1545454675-3531b543be5d"),
    laptop: U("photo-1496181133206-80ce9b88a853"),
    laptopXPS: U("photo-1593642702821-c8da6771f0c6"),
    laptopPro: U("photo-1603302576837-37561b2e2302"),
    keyboard: U("photo-1587829741301-dc798b83add3"),
    keyboard2: U("photo-1618384887929-16ec33fab9ef"),
    mouse: U("photo-1527864550417-7fd91fc51a46"),
    monitor: U("photo-1615663245857-ac93bb7c39e7"),
    drone: U("photo-1473968512647-3e447244af8f"),
    tv: U("photo-1593359677879-a4bb92f829d1"),
    tv2: U("photo-1593784991095-a205069470b6"),
    pcbuild: U("photo-1587202372775-e229f172b9d7"),
    jacket: U("photo-1551028719-00167b16eac5"),
    jacket2: U("photo-1591047139829-d91aecb6caea"),
    dress: U("photo-1595777457583-95e059d581b8"),
    dress2: U("photo-1515372039744-b8f02a3ae446"),
    dress3: U("photo-1594633312681-425c7b97ccd1"),
    fashion1: U("photo-1490481651871-ab68de25d43d"),
    fashion2: U("photo-1529139574466-a303027c1d8b"),
    fridge: U("photo-1571175443880-49e1d25b2bc5"),
    washer: U("photo-1626806787461-102c1bfaaea1"),
    micro: U("photo-1574269909862-7e1d70bb8078"),
    cookware: U("photo-1556911220-bff31c812dba"),
    dinner: U("photo-1556911220-e15b29be8c8f"),
    serum: U("photo-1620916566398-39f1143ab7be"),
    cream: U("photo-1608248543803-ba4f8c70ae0b"),
    skincare: U("photo-1571781926291-c477ebfd024b"),
    skincare2: U("photo-1556228453-efd6c1ff04f6"),
    palette: U("photo-1522335789203-aabd1fc54bc9"),
    lipstick: U("photo-1487412947147-5cebf100ffc2"),
    brushes: U("photo-1596462502278-27bfdc403348"),
    cosmetics: U("photo-1512496015851-a90fb38ba796"),
    baby: U("photo-1519689680058-324335c77eba"),
    toys: U("photo-1515488042361-ee00e0ddd4e4"),
    toys2: U("photo-1596461404969-9ae70f2830c1"),
    gym: U("photo-1517836357463-d25dfeac3438"),
    fitness: U("photo-1571019613454-1cb2f99b2d8b"),
    yoga: U("photo-1544367567-0f2fcb009e0b"),
    yoga2: U("photo-1506126613408-eca07ce68773")
  };

  const P = (o) => Object.assign({ stock: "In Stock", warranty: "1 Year", reviews: 98, rating: 4.8, old: null, pid: "P0512" + Math.floor(100000 + Math.random() * 899999), model: "", brand: "Generic" }, o);
  const B = (...a) => a;

  window.ECOM_PRODUCTS = [
    P({ id: "p-headphone", name: "Premium Wireless Headphone", cat: "Electronics & Gadget", sub: "Headphones", brand: "SonicPro", model: "WH-1000XM Pro", price: 199, old: 249, rating: 4.9, reviews: 98, img: IMG.headphone, gallery: [IMG.headphone, IMG.headphoneW, IMG.headphoneB, IMG.headphoneC], warranty: "2 Years", bullets: B("Driver & Sound: 40mm drivers, deep bass, crisp highs", "Battery & Charging: 40-hr playtime, 10-min fast charge", "Comfort & Build: foldable comfort-fit, soft cushions", "Connectivity: Bluetooth 5.3 + 3.5mm wired backup"), specs: [{ g: "Audio", rows: [["Driver", "40mm dynamic, 20Hz-20kHz"], ["Noise Control", "Hybrid ANC with transparency mode"]] }, { g: "Battery", rows: [["Capacity", "40 hours (ANC on), fast charge"]] }, { g: "Connectivity", rows: [["Bluetooth", "v5.3, multipoint, 10m range"]] }, { g: "Warranty", rows: [["Period", "2 Years official warranty"]] }] }),
    P({ id: "p-headphone2", name: "Studio DJ Monitor Headphones", cat: "Electronics & Gadget", sub: "Headphones", brand: "Sony", model: "MDR-7506 Studio", price: 159, old: 199, rating: 4.7, reviews: 214, img: IMG.headphoneW, gallery: [IMG.headphoneW, IMG.headphone], warranty: "1 Year", bullets: B("Sound: flat studio response for mixing", "Design: closed-back, swivel earcups", "Cable: 3m coiled with gold plug", "Foldable: compact travel fit") }),
    P({ id: "p-headphone3", name: "Bass Boost Over-Ear Headset", cat: "Electronics & Gadget", sub: "Headphones", brand: "SonicPro", model: "BassGo 500", price: 129, old: 169, rating: 4.5, reviews: 167, img: IMG.hpYellow, gallery: [IMG.hpYellow, IMG.hpBlack], warranty: "1 Year", bullets: B("Bass: extra-deep low-end tuning", "Battery: 35-hr playtime", "Comfort: memory-foam cushions", "Mic: built-in clear-call mic") }),
    P({ id: "p-earbuds", name: "AirBass True Wireless Earbuds", cat: "Electronics & Gadget", sub: "Earbuds", brand: "Anker", model: "Soundcore R50i", price: 49, old: 79, rating: 4.5, reviews: 512, img: IMG.earbuds, gallery: [IMG.earbuds, IMG.airpods], warranty: "1 Year", bullets: B("Drivers: 10mm bass boost", "Battery: 30-hr with case", "Calls: AI clear-mic", "Rating: IPX5 sweat-proof") }),
    P({ id: "p-earbuds2", name: "Pods Pro 2 with ANC", cat: "Electronics & Gadget", sub: "Earbuds", brand: "Apple", model: "AirPods Pro 2", price: 189, old: 249, rating: 4.8, reviews: 430, img: IMG.airpods, gallery: [IMG.airpods, IMG.earbuds], warranty: "1 Year", bullets: B("ANC: 2x stronger noise cancelling", "Audio: adaptive transparency", "Battery: 30-hr with MagSafe case", "Fit: 4 ear-tip sizes") }),
    P({ id: "p-speaker", name: "Boom 360 Bluetooth Speaker", cat: "Electronics & Gadget", sub: "Speakers", brand: "Sony", model: "SRS-XB33", price: 99, old: 129, rating: 4.6, reviews: 187, img: IMG.speaker, gallery: [IMG.speaker, IMG.speakerSmart], warranty: "1 Year", bullets: B("Sound: 360-degree stereo pair", "Battery: 24-hr playtime", "Build: IP67 dust + waterproof", "Extra: party lights + mic") }),
    P({ id: "p-speaker2", name: "Home Smart Speaker Mini", cat: "Electronics & Gadget", sub: "Speakers", brand: "Anker", model: "Nest Mini Go", price: 79, old: 99, rating: 4.4, reviews: 143, img: IMG.speakerSmart, gallery: [IMG.speakerSmart, IMG.speaker], warranty: "1 Year", bullets: B("Voice: built-in assistant support", "Sound: room-filling 360 audio", "Multi-room: pair two for stereo", "Size: compact fabric finish") }),
    P({ id: "p-smartwatch", name: "Smart Watch Series 7", cat: "Electronics & Gadget", sub: "Smart Watch", brand: "Apple", model: "Watch S7 GPS", price: 299, old: 349, rating: 4.8, reviews: 301, img: IMG.smartwatch, gallery: [IMG.smartwatch, IMG.smartwatch2], warranty: "1 Year", bullets: B("Display: always-on Retina", "Health: ECG, SpO2, sleep tracking", "Battery: 18-hr + fast charge", "Water: 50m resistant") }),
    P({ id: "p-smartwatch2", name: "Fit Versa Health Watch", cat: "Electronics & Gadget", sub: "Smart Watch", brand: "Xiaomi", model: "Fit Versa 4", price: 149, old: 199, rating: 4.5, reviews: 265, img: IMG.smartwatch3, gallery: [IMG.smartwatch3, IMG.smartwatch], warranty: "1 Year", bullets: B("Health: heart, SpO2 + 40 sport modes", "Battery: 6-day typical use", "Display: AMOLED always-on", "Water: 5ATM swim-proof") }),
    P({ id: "p-laptop", name: "UltraBook Pro 14 16/512", cat: "Electronics & Gadget", sub: "Laptops", brand: "HP", model: "UltraBook 14", price: 899, old: 1099, rating: 4.8, reviews: 133, img: IMG.laptop, gallery: [IMG.laptop, IMG.laptopXPS], warranty: "2 Years", bullets: B("CPU: Intel Core i7 13th gen", "RAM & SSD: 16GB + 512GB NVMe", "Display: 14-inch 2.8K IPS", "Battery: 12-hr, 65W fast charge") }),
    P({ id: "p-laptop2", name: "Creator Laptop 15 RTX", cat: "Electronics & Gadget", sub: "Laptops", brand: "Dell", model: "XPS Creator 15", price: 1299, old: 1499, rating: 4.7, reviews: 89, img: IMG.laptopXPS, gallery: [IMG.laptopXPS, IMG.laptopPro], warranty: "2 Years", bullets: B("GPU: RTX 4050 6GB studio-ready", "RAM & SSD: 16GB + 1TB NVMe", "Display: 15.6-inch OLED", "Cooling: dual-fan vapor chamber") }),
    P({ id: "p-keyboard", name: "Mechanical Keyboard RGB", cat: "Electronics & Gadget", sub: "Keyboards", brand: "HP", model: "K500F", price: 79, old: 99, rating: 4.4, reviews: 118, img: IMG.keyboard, gallery: [IMG.keyboard, IMG.keyboard2], warranty: "1 Year", bullets: B("Switches: tactile blue", "Backlight: RGB 6-mode", "Connect: USB-C wired", "Build: metal top plate") }),
    P({ id: "p-mouse", name: "Silent Wireless Mouse", cat: "Electronics & Gadget", sub: "Mouse", brand: "HP", model: "M220 Silent", price: 29, old: 39, rating: 4.3, reviews: 342, img: IMG.mouse, gallery: [IMG.mouse], warranty: "1 Year", bullets: B("Clicks: 90% quieter buttons", "Battery: 18-month life", "Range: 10m wireless", "Grip: contoured comfort") }),
    P({ id: "p-monitor", name: "27-inch 4K UHD Monitor", cat: "Electronics & Gadget", sub: "Monitors", brand: "Samsung", model: "U28R550 27", price: 329, old: 399, rating: 4.6, reviews: 97, img: IMG.monitor, gallery: [IMG.monitor], warranty: "2 Years", bullets: B("Panel: 27-inch 4K IPS", "Color: 99% sRGB factory tuned", "Eye care: flicker-free + low blue", "Ports: HDMI + DisplayPort") }),
    P({ id: "p-camera", name: "Instant Camera Pro", cat: "Electronics & Gadget", sub: "Cameras", brand: "Sony", model: "Alpha ZV Pro", price: 449, old: 529, rating: 4.7, reviews: 77, img: IMG.camera, gallery: [IMG.camera, IMG.cameraPro], warranty: "2 Years", bullets: B("Sensor: 24MP APS-C", "Video: 4K30 with stabilization", "Lens: 16-50mm kit included", "Screen: flip-out touchscreen") }),
    P({ id: "p-camera2", name: "Retro Film Camera 35mm", cat: "Electronics & Gadget", sub: "Cameras", brand: "Canon", model: "AE-1 Retro", price: 549, old: 649, rating: 4.8, reviews: 54, img: IMG.cameraFilm, gallery: [IMG.cameraFilm, IMG.camera], warranty: "1 Year", bullets: B("Format: classic 35mm film", "Lens: 50mm f/1.8 prime", "Build: metal retro body", "Best for: street + portrait") }),
    P({ id: "p-drone", name: "SkyHawk 4K Drone Combo", cat: "Electronics & Gadget", sub: "Drones", brand: "DJI", model: "Mini 4K Fly More", price: 499, old: 599, rating: 4.6, reviews: 48, img: IMG.drone, gallery: [IMG.drone], warranty: "1 Year", bullets: B("Camera: 4K/30 gimbal stabilized", "Flight: 31-min, 10km range", "Weight: sub-249g", "Combo: 2 batteries + bag") }),
    P({ id: "p-tv", name: "55-inch 4K Smart TV", cat: "Electronics & Gadget", sub: "Smart Home", brand: "Samsung", model: "Crystal 55UHD", price: 649, old: 799, rating: 4.6, reviews: 112, img: IMG.tv, gallery: [IMG.tv, IMG.tv2], warranty: "2 Years", bullets: B("Display: 55-inch Crystal 4K", "Sound: 20W Dolby speakers", "Smart: built-in apps + voice", "Ports: 3 HDMI + 1 USB") }),
    P({ id: "p-pc", name: "Pro Gaming PC RTX 4060", cat: "Electronics & Gadget", sub: "Consoles", brand: "CustomX", model: "Strike RTX 4060", price: 1299, old: 1499, rating: 4.9, reviews: 63, img: IMG.pcbuild, gallery: [IMG.pcbuild], warranty: "2 Years", bullets: B("GPU: RTX 4060 8GB GDDR6", "CPU: Ryzen 5 7600 + 16GB DDR5", "SSD: 1TB Gen4 NVMe", "Cooling: 240mm liquid + RGB") }),
    P({ id: "p-iphone", name: "iPhone 16 Pro 128GB", cat: "Mobiles & Tablets", sub: "iPhones", brand: "Apple", model: "iPhone 16 Pro", price: 100.98, old: 230, rating: 4.8, reviews: 212, img: IMG.iphone, gallery: [IMG.iphone, IMG.phone, IMG.phone2], warranty: "1 Year", bullets: B("Chip: A18 Pro with 6-core GPU", "Display: 6.3-inch Super Retina XDR 120Hz", "Camera: 48MP triple system, 5x zoom", "Battery: all-day + MagSafe charging") }),
    P({ id: "p-iphone2", name: "iPhone 13 128GB", cat: "Mobiles & Tablets", sub: "iPhones", brand: "Apple", model: "iPhone 13", price: 699, old: 799, rating: 4.7, reviews: 388, img: IMG.iphoneX, gallery: [IMG.iphoneX, IMG.iphone], warranty: "1 Year", bullets: B("Chip: A15 Bionic 5-core GPU", "Display: 6.1-inch Super Retina XDR", "Camera: dual 12MP night mode", "Battery: 19-hr video playback") }),
    P({ id: "p-phone", name: "Smartphone X12 Pro 256GB", cat: "Mobiles & Tablets", sub: "Android Phones", brand: "Samsung", model: "X12 Pro 5G", price: 699, old: 799, rating: 4.7, reviews: 402, img: IMG.phone, gallery: [IMG.phone, IMG.phone2], warranty: "1 Year", bullets: B("Display: 6.7-inch AMOLED 120Hz", "Chip: Snapdragon 8 Gen 2", "Camera: 108MP OIS triple", "Battery: 5000mAh, 65W charge") }),
    P({ id: "p-phone2", name: "Galaxy A55 5G 128GB", cat: "Mobiles & Tablets", sub: "Android Phones", brand: "Samsung", model: "Galaxy A55", price: 399, old: 449, rating: 4.5, reviews: 276, img: IMG.galaxyA, gallery: [IMG.galaxyA, IMG.phone], warranty: "1 Year", bullets: B("Display: 6.6-inch AMOLED 120Hz", "Camera: 50MP OIS triple", "Battery: 5000mAh 2-day life", "Build: metal frame, IP67") }),
    P({ id: "p-phone3", name: "Nord CE4 5G 256GB", cat: "Mobiles & Tablets", sub: "Android Phones", brand: "Xiaomi", model: "Nord CE4", price: 299, old: 349, rating: 4.4, reviews: 198, img: IMG.oneplus, gallery: [IMG.oneplus, IMG.phone2], warranty: "1 Year", bullets: B("Chip: Snapdragon 7 Gen 3", "Display: 6.7-inch AMOLED 120Hz", "Charge: 100W SUPERVOOC", "Camera: 50MP Sony OIS") }),
    P({ id: "p-tablet", name: "Tab S9 11-inch 128GB", cat: "Mobiles & Tablets", sub: "Tablets", brand: "Samsung", model: "Galaxy Tab S9", price: 549, old: 649, rating: 4.6, reviews: 134, img: IMG.tablet, gallery: [IMG.tablet, IMG.tablet2], warranty: "1 Year", bullets: B("Display: 11-inch 120Hz LCD", "Pen: S Pen in box", "Battery: 8000mAh", "Audio: quad speakers Dolby") }),
    P({ id: "p-tablet2", name: "iPad 10th Gen 64GB", cat: "Mobiles & Tablets", sub: "Tablets", brand: "Apple", model: "iPad 10.9", price: 449, old: 499, rating: 4.7, reviews: 221, img: IMG.tablet2, gallery: [IMG.tablet2, IMG.tablet], warranty: "1 Year", bullets: B("Chip: A14 Bionic", "Display: 10.9-inch Liquid Retina", "Camera: 12MP Touch ID", "Support: Apple Pencil 1") }),
    P({ id: "p-fridge", name: "Double-Door Refrigerator 320L", cat: "Appliances", sub: "Refrigerators", brand: "LG", model: "GL-T322 320L", price: 799, old: 949, rating: 4.6, reviews: 76, img: IMG.fridge, gallery: [IMG.fridge], warranty: "2 Years", bullets: B("Capacity: 320L frost-free", "Cooling: multi-airflow + inverter", "Energy: 5-star rated", "Install: free doorstep setup") }),
    P({ id: "p-washer", name: "Front-Load Washer 8kg", cat: "Appliances", sub: "Washing Machines", brand: "LG", model: "FHM1408 8kg", price: 649, old: 749, rating: 4.5, reviews: 89, img: IMG.washer, gallery: [IMG.washer], warranty: "2 Years", bullets: B("Load: 8kg front-load steam", "Motor: direct-drive 10-yr cover", "Programs: 14 wash modes", "Install: free demo + setup") }),
    P({ id: "p-micro", name: "Convection Microwave 28L", cat: "Appliances", sub: "Microwaves", brand: "Samsung", model: "CE1041 28L", price: 249, old: 299, rating: 4.4, reviews: 67, img: IMG.micro, gallery: [IMG.micro], warranty: "1 Year", bullets: B("Capacity: 28L convection", "Modes: bake, grill + ferment", "Panel: touch + child lock", "Inside: ceramic easy-clean") }),
    P({ id: "p-cookware", name: "Non-Stick Cookware Set 10pc", cat: "Kitchen & Dining", sub: "Cookware Sets", brand: "Prestige", model: "NonStick 10pc", price: 149, old: 199, rating: 4.5, reviews: 143, img: IMG.cookware, gallery: [IMG.cookware, IMG.dinner], warranty: "1 Year", bullets: B("Pieces: 10pc pots, pans + lids", "Coating: 3-layer non-stick", "Stove: gas + induction ready", "Handle: cool-touch riveted") }),
    P({ id: "p-dinner", name: "Ceramic Dinner Set 24pc", cat: "Kitchen & Dining", sub: "Dinner Sets", brand: "HomeCentre", model: "Ceramic 24pc", price: 99, old: 129, rating: 4.4, reviews: 92, img: IMG.dinner, gallery: [IMG.dinner, IMG.cookware], warranty: "6 Months", bullets: B("Pieces: 24pc, serves 6", "Material: glazed ceramic", "Safe: microwave + dishwasher", "Finish: scratch-resistant glaze") }),
    P({ id: "p-sneaker", name: "Nike Air Zoom Runner", cat: "Fashion", sub: "Footwear Men", brand: "Nike", model: "Air Zoom Pegasus", price: 189, old: 229, rating: 4.7, reviews: 154, img: IMG.shoesRed, gallery: [IMG.shoesRed, IMG.shoesWhite], warranty: "6 Months", bullets: B("Cushioning: responsive Zoom Air units", "Upper: breathable engineered mesh", "Grip: rubber outsole, road-ready", "Fit: true to size, regular width") }),
    P({ id: "p-sneaker2", name: "Court Classic White Sneakers", cat: "Fashion", sub: "Footwear Men", brand: "Adidas", model: "Court Vision Low", price: 129, old: 159, rating: 4.6, reviews: 187, img: IMG.shoesWhite, gallery: [IMG.shoesWhite, IMG.shoesCourt], warranty: "6 Months", bullets: B("Upper: crisp leather + suede", "Sole: grippy cupsole", "Style: clean everyday classic", "Fit: regular, true to size") }),
    P({ id: "p-sneaker3", name: "Street High-Top Sneakers", cat: "Fashion", sub: "Footwear Men", brand: "Nike", model: "Blazer Mid 77", price: 159, old: 199, rating: 4.6, reviews: 129, img: IMG.shoesHigh, gallery: [IMG.shoesHigh, IMG.shoesRun], warranty: "6 Months", bullets: B("Style: retro high-top hoops look", "Upper: leather + textile", "Cushion: foam midsole", "Wear: street + casual daily") }),
    P({ id: "p-watch", name: "Minimal Steel Watch", cat: "Fashion", sub: "Watches", brand: "Hugo Boss", model: "Classic Steel 40mm", price: 349, old: 399, rating: 4.9, reviews: 88, img: IMG.watch, gallery: [IMG.watch, IMG.watchDress], warranty: "2 Years", bullets: B("Movement: Japanese quartz", "Case: 40mm stainless steel", "Glass: scratch-resistant mineral", "Strap: genuine leather + steel option") }),
    P({ id: "p-watch2", name: "Gold Classic Dress Watch", cat: "Fashion", sub: "Watches", brand: "Armani", model: "Gold Dress 42mm", price: 429, old: 499, rating: 4.8, reviews: 71, img: IMG.watchGold, gallery: [IMG.watchGold, IMG.watch], warranty: "2 Years", bullets: B("Finish: gold-tone steel", "Dial: clean minimal markers", "Glass: hardened mineral", "Water: 3ATM splash-proof") }),
    P({ id: "p-watch3", name: "Onyx Chrono Steel Watch", cat: "Fashion", sub: "Watches", brand: "Hugo Boss", model: "Onyx Chrono 44mm", price: 279, old: 329, rating: 4.7, reviews: 95, img: IMG.watchBlack, gallery: [IMG.watchBlack, IMG.watchDress], warranty: "2 Years", bullets: B("Function: triple chrono dials", "Case: 44mm black steel", "Strap: link bracelet", "Water: 5ATM resistant") }),
    P({ id: "p-sunglass", name: "Aviator Sunglasses UV400", cat: "Fashion", sub: "Sunglasses", brand: "Ray-Ban", model: "Aviator Classic", price: 99, old: 139, rating: 4.5, reviews: 91, img: IMG.sunglasses, gallery: [IMG.sunglasses, IMG.rayban], warranty: "6 Months", bullets: B("Lens: polarized UV400", "Frame: metal aviator", "Includes: hard case + cloth", "For: driving + outdoor") }),
    P({ id: "p-sunglass2", name: "Wayfarer Polarized Shades", cat: "Fashion", sub: "Sunglasses", brand: "Ray-Ban", model: "Wayfarer Polar", price: 119, old: 149, rating: 4.6, reviews: 83, img: IMG.rayban, gallery: [IMG.rayban, IMG.sunglasses], warranty: "6 Months", bullets: B("Lens: polarized anti-glare", "Frame: acetate wayfarer", "Hinge: reinforced 5-barrel", "Includes: case + cloth") }),
    P({ id: "p-handbag", name: "Classic Leather Handbag", cat: "Bags & Luggage", sub: "Handbags", brand: "Louis Vuitton", model: "Tote Classic", price: 249, old: 299, rating: 4.8, reviews: 59, img: IMG.handbag, gallery: [IMG.handbag, IMG.tote], warranty: "1 Year", bullets: B("Material: full-grain leather", "Lining: premium cotton twill", "Pockets: 3 inner + zip", "Strap: adjustable shoulder") }),
    P({ id: "p-handbag2", name: "Scarlet Leather Tote", cat: "Bags & Luggage", sub: "Handbags", brand: "Zara", model: "Scarlet Tote", price: 189, old: 229, rating: 4.6, reviews: 47, img: IMG.handbagRed, gallery: [IMG.handbagRed, IMG.handbag], warranty: "1 Year", bullets: B("Material: saffiano leather", "Fit: laptop + daily kit", "Closure: secure zip top", "Strap: detachable sling") }),
    P({ id: "p-backpack", name: "Voyager Travel Backpack 35L", cat: "Bags & Luggage", sub: "Backpacks", brand: "Wildcraft", model: "Voyager 35L", price: 119, old: 149, rating: 4.7, reviews: 156, img: IMG.backpack, gallery: [IMG.backpack, IMG.backpack2], warranty: "1 Year", bullets: B("Capacity: 35L + laptop sleeve", "Build: water-repellent shell", "Back: padded airflow panel", "Use: travel + daily commute") }),
    P({ id: "p-tshirt", name: "Cotton Casual T-Shirt", cat: "Fashion", sub: "Men's Clothing", brand: "Zara", model: "Essential Tee", price: 39, old: 49, rating: 4.3, reviews: 230, img: IMG.tshirt, gallery: [IMG.tshirt, IMG.tshirt2], warranty: "7-Day Return", bullets: B("Fabric: 100% combed cotton", "Fit: regular, pre-shrunk", "Sizes: S-XL", "Care: machine washable") }),
    P({ id: "p-tshirt2", name: "Essential Crew Tee 3-Pack", cat: "Fashion", sub: "Men's Clothing", brand: "H&M", model: "Crew 3-Pack", price: 59, old: 79, rating: 4.4, reviews: 178, img: IMG.tshirt2, gallery: [IMG.tshirt2, IMG.tshirt3], warranty: "7-Day Return", bullets: B("Pack: 3 everyday colors", "Fabric: soft cotton blend", "Fit: regular crew neck", "Care: machine washable") }),
    P({ id: "p-shirt", name: "Slim Fit Oxford Shirt", cat: "Fashion", sub: "Men's Clothing", brand: "Ralph Lauren", model: "Oxford Slim", price: 79, old: 99, rating: 4.5, reviews: 112, img: IMG.shirt, gallery: [IMG.shirt], warranty: "7-Day Return", bullets: B("Fabric: breathable oxford weave", "Fit: modern slim cut", "Collar: button-down", "Wear: office + casual") }),
    P({ id: "p-jeans", name: "Slim Stretch Jeans", cat: "Fashion", sub: "Men's Clothing", brand: "Levi's", model: "511 Slim", price: 89, old: 119, rating: 4.6, reviews: 203, img: IMG.jeans, gallery: [IMG.jeans, IMG.jeans2], warranty: "7-Day Return", bullets: B("Fit: slim through leg", "Stretch: 2% elastane comfort", "Wash: mid-blue fade-proof", "Sizes: 28-38 waist") }),
    P({ id: "p-jacket", name: "Denim Trucker Jacket", cat: "Fashion", sub: "Men's Clothing", brand: "Levi's", model: "Trucker III", price: 119, old: 149, rating: 4.5, reviews: 73, img: IMG.jacket, gallery: [IMG.jacket, IMG.jacket2], warranty: "7-Day Return", bullets: B("Fabric: 12oz denim", "Fit: regular trucker", "Pockets: 4 + inner", "Care: machine wash cold") }),
    P({ id: "p-blazer", name: "Single-Breast Blazer", cat: "Fashion", sub: "Men's Clothing", brand: "Hugo Boss", model: "Slim Blazer", price: 199, old: 259, rating: 4.7, reviews: 58, img: IMG.blazer, gallery: [IMG.blazer, IMG.suit], warranty: "7-Day Return", bullets: B("Cut: modern slim single-breast", "Fabric: wool-blend suiting", "Lining: breathable half-canvas", "Wear: wedding + office") }),
    P({ id: "p-dress", name: "Summer Floral Midi Dress", cat: "Fashion", sub: "Women's Clothing", brand: "Zara", model: "Floral Midi", price: 89, old: 119, rating: 4.6, reviews: 66, img: IMG.dress, gallery: [IMG.dress, IMG.dress3], warranty: "7-Day Return", bullets: B("Fabric: breathable rayon", "Fit: smocked waist midi", "Sizes: XS-L", "Occasion: daily + outing") }),
    P({ id: "p-dress2", name: "Evening Maxi Dress", cat: "Fashion", sub: "Women's Clothing", brand: "Gucci", model: "Evening Maxi", price: 149, old: 189, rating: 4.7, reviews: 49, img: IMG.dress2, gallery: [IMG.dress2, IMG.fashion1], warranty: "7-Day Return", bullets: B("Fabric: flowing chiffon", "Fit: flattering A-line maxi", "Detail: delicate straps", "Occasion: party + event") }),
    P({ id: "p-fashion", name: "Autumn Street Style Set", cat: "Fashion", sub: "Women's Clothing", brand: "Zara", model: "Street Set", price: 129, old: 159, rating: 4.5, reviews: 61, img: IMG.fashion2, gallery: [IMG.fashion2, IMG.dress3], warranty: "7-Day Return", bullets: B("Set: top + bottom co-ord", "Fabric: soft seasonal knit", "Sizes: XS-L", "Style: street-ready layering") }),
    P({ id: "p-perfume", name: "Luxury Perfume Essence 100ml", cat: "Personal Care", sub: "Perfume", brand: "Gucci", model: "Essence Noir", price: 129, old: 159, rating: 4.6, reviews: 64, img: IMG.perfume, gallery: [IMG.perfume, IMG.perfume2], warranty: "6 Months", bullets: B("Notes: bergamot, jasmine, sandalwood", "Lasting: 8-10 hours EDP", "Bottle: 100ml signature flacon", "For: unisex daily wear") }),
    P({ id: "p-perfume2", name: "Bleu Parfum 100ml", cat: "Personal Care", sub: "Perfume", brand: "Armani", model: "Bleu Homme", price: 149, old: 179, rating: 4.7, reviews: 58, img: IMG.perfume2, gallery: [IMG.perfume2, IMG.perfume], warranty: "6 Months", bullets: B("Notes: citrus, cedar, amber", "Lasting: 10-hour EDP", "Bottle: 100ml magnetic cap", "For: evening + office") }),
    P({ id: "p-serum", name: "Vitamin C Face Serum 30ml", cat: "Personal Care", sub: "Moisturizer", brand: "Lakme", model: "Vit-C 30ml", price: 29, old: 39, rating: 4.4, reviews: 312, img: IMG.serum, gallery: [IMG.serum, IMG.cream], warranty: "6 Months", bullets: B("Power: 15% vitamin C + E", "Result: bright spots in 2 weeks", "Skin: all types, patch-test", "Use: AM + PM, 3-4 drops") }),
    P({ id: "p-cream", name: "Hydra Boost Cream 50ml", cat: "Personal Care", sub: "Moisturizer", brand: "Nivea", model: "Hydra 50ml", price: 24, old: 32, rating: 4.5, reviews: 428, img: IMG.cream, gallery: [IMG.cream, IMG.skincare], warranty: "6 Months", bullets: B("Hydration: 72-hr hyaluronic", "Texture: light gel-cream", "Skin: dry to normal", "Use: AM + PM daily") }),
    P({ id: "p-skincare", name: "Glow Routine Kit 4-Step", cat: "Personal Care", sub: "Moisturizer", brand: "Lakme", model: "Glow Kit", price: 49, old: 69, rating: 4.6, reviews: 196, img: IMG.skincare, gallery: [IMG.skincare, IMG.skincare2], warranty: "6 Months", bullets: B("Kit: cleanser, toner, serum, cream", "Concern: dull + uneven tone", "Skin: all types", "Gift-ready box included") }),
    P({ id: "p-palette", name: "Nude Eyeshadow Palette", cat: "Personal Care", sub: "Makeup Kits", brand: "Lakme", model: "Nude 12-Shade", price: 39, old: 49, rating: 4.5, reviews: 154, img: IMG.palette, gallery: [IMG.palette, IMG.brushes], warranty: "6 Months", bullets: B("Shades: 12 matte + shimmer", "Pigment: one-swipe payoff", "Stay: 8-hr crease-proof", "Includes: dual brush") }),
    P({ id: "p-lipstick", name: "Matte Lipstick Set 6pc", cat: "Personal Care", sub: "Lipstick", brand: "Lakme", model: "Matte 6pc", price: 34, old: 44, rating: 4.4, reviews: 231, img: IMG.lipstick, gallery: [IMG.lipstick, IMG.cosmetics], warranty: "6 Months", bullets: B("Set: 6 bestseller shades", "Finish: weightless matte", "Stay: 6-hr + vitamin E", "For: daily + party looks") }),
    P({ id: "p-sofa", name: "Modern Lounge Sofa 3-Seater", cat: "Home & Living", sub: "Sofas", brand: "Hatil", model: "Lounge 3S", price: 899, old: 1099, rating: 4.7, reviews: 41, img: IMG.sofa, gallery: [IMG.sofa, IMG.armchair], warranty: "2 Years", bullets: B("Seats: 3-seater, solid wood frame", "Fabric: stain-resistant weave", "Cushion: high-density foam", "Assembly: free installation") }),
    P({ id: "p-armchair", name: "Accent Lounge Chair", cat: "Home & Living", sub: "Chairs", brand: "HomeCentre", model: "Accent Oak", price: 349, old: 429, rating: 4.6, reviews: 37, img: IMG.armchair, gallery: [IMG.armchair, IMG.chair], warranty: "1 Year", bullets: B("Frame: solid oak legs", "Seat: deep foam comfort", "Fabric: easy-clean weave", "Assembly: 10-min setup") }),
    P({ id: "p-chair", name: "Nordic Dining Chair Set of 2", cat: "Home & Living", sub: "Chairs", brand: "HomeCentre", model: "Nordic Pair", price: 129, old: 159, rating: 4.4, reviews: 52, img: IMG.chair, gallery: [IMG.chair, IMG.armchair], warranty: "1 Year", bullets: B("Set: 2 molded chairs", "Build: sturdy beech legs", "Seat: wipe-clean shell", "Use: dining + work desk") }),
    P({ id: "p-lamp", name: "Decor Glow Table Lamp", cat: "Home & Living", sub: "Lighting", brand: "Philips", model: "Glow 2700K", price: 89, old: 119, rating: 4.4, reviews: 52, img: IMG.lamp, gallery: [IMG.lamp, IMG.lampDesk], warranty: "1 Year", bullets: B("Light: warm 2700K dimmable", "Power: USB-C + touch control", "Build: metal + opal glass", "Use: bedroom / desk") }),
    P({ id: "p-lamp2", name: "Minimal Desk Lamp", cat: "Home & Living", sub: "Lighting", brand: "Philips", model: "Desk Air", price: 59, old: 79, rating: 4.3, reviews: 44, img: IMG.lampDesk, gallery: [IMG.lampDesk, IMG.lamp], warranty: "1 Year", bullets: B("Light: 3-tone eye-care LED", "Arm: foldable + swivel", "Power: USB powered", "Use: study + office") }),
    P({ id: "p-baby", name: "Organic Cotton Onesie 3pc", cat: "Baby & Kids", sub: "Kids Wear", brand: "Mothercare", model: "Onesie 3pc", price: 39, old: 49, rating: 4.7, reviews: 118, img: IMG.baby, gallery: [IMG.baby], warranty: "7-Day Return", bullets: B("Fabric: 100% organic cotton", "Pack: 3 soft prints", "Snaps: nickel-free bottom", "Sizes: 0-12 months") }),
    P({ id: "p-toys", name: "Learning Blocks Set 120pc", cat: "Baby & Kids", sub: "Toys", brand: "Funskool", model: "Blocks 120pc", price: 49, old: 69, rating: 4.6, reviews: 203, img: IMG.toys, gallery: [IMG.toys, IMG.toys2], warranty: "6 Months", bullets: B("Pieces: 120 safe blocks", "Skill: motor + color learning", "Safe: BPA-free, 3+ years", "Box: storage tub included") }),
    P({ id: "p-toys2", name: "RC Stunt Car 4WD", cat: "Baby & Kids", sub: "Toys", brand: "Funskool", model: "Stunt 4WD", price: 59, old: 79, rating: 4.5, reviews: 167, img: IMG.toys2, gallery: [IMG.toys2, IMG.toys], warranty: "6 Months", bullets: B("Drive: 4WD flips + spins", "Remote: 2.4GHz 50m range", "Battery: rechargeable 30-min", "Age: 6+ years") }),
    P({ id: "p-gym", name: "Hex Dumbbell Pair 10kg", cat: "Health & Wellness", sub: "Gym Gear", brand: "Kore", model: "Hex 10kg Pair", price: 89, old: 109, rating: 4.6, reviews: 141, img: IMG.gym, gallery: [IMG.gym, IMG.fitness], warranty: "1 Year", bullets: B("Pair: 2 x 10kg hex heads", "Grip: knurled steel handle", "Floor: rubber no-roll coat", "Use: home strength setup") }),
    P({ id: "p-fitness", name: "Home Gym Combo Kit", cat: "Health & Wellness", sub: "Gym Gear", brand: "Kore", model: "HomeGym 20kg", price: 129, old: 159, rating: 4.5, reviews: 98, img: IMG.fitness, gallery: [IMG.fitness, IMG.gym], warranty: "1 Year", bullets: B("Kit: rods, plates + gloves", "Weight: 20kg adjustable", "Build: chrome steel", "Chart: workout poster free") }),
    P({ id: "p-yoga", name: "Pro Yoga Mat 6mm", cat: "Health & Wellness", sub: "Yoga Mats", brand: "Boldfit", model: "Pro 6mm", price: 35, old: 45, rating: 4.5, reviews: 264, img: IMG.yoga, gallery: [IMG.yoga, IMG.yoga2], warranty: "6 Months", bullets: B("Thick: 6mm anti-tear TPE", "Grip: dual-texture non-slip", "Size: 183 x 61cm + strap", "Care: sweat-proof wipeable") })
  ];

  window.ECOM_ICONS = { cart: '<img src="Assets/Icon/Add to Card Icon.svg" alt="" width="20" height="20" />', eye: '<svg viewBox="0 0 24 24"><path d="M12 5c5 0 9.3 3 11 7-1.7 4-6 7-11 7S2.7 16 1 12c1.7-4 6-7 11-7zm0 2C8.2 7 4.8 9.2 3.2 12 4.8 14.8 8.2 17 12 17s7.2-2.2 8.8-5C19.2 9.2 15.8 7 12 7zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>', trash: '<svg viewBox="0 0 24 24"><path d="M6 7h12l-1 14H7L6 7zm3-4h6l1 2h4v2H4V5h4l1-2zm1 4h4v11h-2V7H9v10H7V7h2z"/></svg>' };
  window.ECOM_ICONS.pay = {
    cod: '<svg viewBox="0 0 24 24"><path d="M11 17c0 .6.4 1 1 1h1v1.5c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5V18h1c.6 0 1-.4 1-1v-3.6c0-.3-.1-.5-.3-.7l-3-3c-.2-.2-.4-.3-.7-.3H14V4c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h6zm1-8h3.6l2.4 2.4V16h-6V9z"/><circle cx="7.5" cy="18.5" r="1.5"/><circle cx="17.5" cy="18.5" r="1.5"/></svg>',
    card: '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4H4V6h16v2zM4 18v-6h16v6H4zm2-4h4v2H6v-2zm6 0h2v2h-2v-2z"/></svg>',
    bkash: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1.2 14.5-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7z"/></svg>',
    emi: '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 2h2v2h-2V5zm-4 0h2v2H8V5zm8 14H8v-2h8v2zm0-4H8v-2h8v2zm0-4H8V9h8v2z"/></svg>'
  };
  window.ECOM_IMG = IMG;
  window.ECOM_get = (id) => window.ECOM_PRODUCTS.find((p) => p.id === id) || window.ECOM_PRODUCTS[0];
  window.ECOM_byCat = (cat, sub) => window.ECOM_PRODUCTS.filter((p) => (!cat || cat === "all" || p.cat === cat) && (!sub || p.sub === sub));
  window.ECOM_search = (q, cat) => {
    q = (q || "").trim().toLowerCase();
    return window.ECOM_PRODUCTS.filter((p) => {
      const okCat = !cat || cat === "all" || p.cat.toLowerCase().includes(String(cat).toLowerCase()) || p.sub.toLowerCase().includes(String(cat).toLowerCase());
      return okCat && (!q || (p.name + " " + p.brand + " " + p.cat + " " + p.sub).toLowerCase().includes(q));
    });
  };

  const STAR = '<svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9 2.9-6z"/></svg>';
  window.ECOM_card = function (p) {
    return '<article class="mini" data-id="' + p.id + '" data-name="' + p.name.toLowerCase() + '" tabindex="0" aria-label="' + p.name.replace(/"/g, "") + '">' +
      '<div class="mini__img"><img src="' + p.img + '" alt="' + p.name.replace(/"/g, "") + '" loading="lazy" /><div class="mini__stepper"><div class="qty"><button aria-label="Decrease quantity">\u2212</button><span>1</span><button aria-label="Increase quantity">+</button></div></div></div>' +
      "<h3>" + p.name + "</h3>" + '<p class="stars">' + STAR + STAR + STAR + STAR + STAR + "</p>" +
      '<p class="mini__price" data-unit="' + p.price + '">$' + Number(p.price).toFixed(2) + "</p>" +
      '<div class="mini__actions"><button class="mini__cart">' + window.ECOM_ICONS.cart + ' Add to Cart</button><a class="mini__view" href="product-details.html?id=' + p.id + '" aria-label="View details">' + window.ECOM_ICONS.eye + '</a></div></article>';
  };

  const KEY = "ecom_cart_v1";
  window.ECOM_cart = {
    read() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } },
    write(c) { localStorage.setItem(KEY, JSON.stringify(c)); document.dispatchEvent(new CustomEvent("ecom:cart")); },
    add(id, qty) { const c = this.read(); c[id] = Math.min(99, (c[id] || 0) + (qty || 1)); this.write(c); },
    set(id, qty) { const c = this.read(); if (qty <= 0) delete c[id]; else c[id] = Math.min(99, qty); this.write(c); },
    remove(id) { const c = this.read(); delete c[id]; this.write(c); },
    clear() { this.write({}); },
    count() { return Object.values(this.read()).reduce((a, b) => a + b, 0); },
    lines() { const c = this.read(); return Object.keys(c).map((id) => ({ p: window.ECOM_get(id), qty: c[id] })).filter((l) => l.p); },
    subtotal() { return this.lines().reduce((a, l) => a + l.p.price * l.qty, 0); }
  };
  window.ECOM_money = (n) => "$" + Number(n).toFixed(2);

  /* ---- users + orders (localStorage demo auth) ---- */
  const UKEY = "ecom_users_v1", SKEY = "ecom_session_v1", OKEY = "ecom_orders_v1";
  const readJ = (k, fb) => { try { return JSON.parse(localStorage.getItem(k)) || fb; } catch (e) { return fb; } };
  const writeJ = (k, v) => localStorage.setItem(k, JSON.stringify(v));
  window.ECOM_user = {
    users() { return readJ(UKEY, []); },
    current() { const em = readJ(SKEY, null); return this.users().find((u) => u.email === em || u.mobile === em) || null; },
    signup(o) {
      const users = this.users();
      if (users.some((u) => u.email === o.email)) return { err: "Email already registered — please log in." };
      if (o.mobile && users.some((u) => u.mobile === o.mobile)) return { err: "Mobile already registered — please log in." };
      users.push(o); writeJ(UKEY, users); writeJ(SKEY, o.email || o.mobile);
      return { ok: true };
    },
    login(id, pass) {
      const u = this.users().find((x) => x.email === id || x.mobile === id);
      if (!u) return { err: "No account found — please sign up." };
      if (u.pass !== pass) return { err: "Wrong password — please try again." };
      writeJ(SKEY, u.email || u.mobile);
      return { ok: true };
    },
    logout() { localStorage.removeItem(SKEY); },
    save(patch) {
      const users = this.users(), me = this.current();
      const i = users.findIndex((u) => u.email === me.email);
      users[i] = Object.assign({}, users[i], patch);
      writeJ(UKEY, users);
      if (patch.email) writeJ(SKEY, patch.email);
    }
  };
  window.ECOM_orders = {
    all() { return readJ(OKEY, []); },
    mine() { const me = window.ECOM_user.current(); if (!me) return []; return this.all().filter((o) => o.email === (me.email || me.mobile)); },
    add(o) { const all = this.all(); all.unshift(o); writeJ(OKEY, all); }
  };
})();
