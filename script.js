/* ===== EDIT THIS SECTION TO CUSTOMIZE ===== */
var CURRENCY = "₱";
 
var SOCIALS = [
  { name: "Facebook Messenger", icon: "💬", url: "https://m.me/61595768060612" },
];
var MESSENGER_USER = "61595768060612";                // Messenger username of the page/profile
var ORDER_LINK = "https://m.me/" + MESSENGER_USER;  // "Send Order" opens this chat with the order already typed in
 
var CONTACT = {
  phone:   "0969 011 1220",
  email:   "",   // leave empty to hide the email card
  address: "Zone 1, Lebueg, Laoac, Pangasinan",
  hours:   "Mon–Sun, 8:00 AM – 7:00 PM"
};
 
/* OWNER: put the photo in the images folder, e.g. owner.jpg */
var OWNER = {
  name:  "Chelsie",
  role:  "Owner of Chelsie's Kakanin",
  photo: "Owner.png",
  emoji: "👩‍🍳",
  quote: "Luto ng may pagmamahal, para sa bawat handaan mo.",
  bio: [
    "Hi, ako si Chelsie! Nagsimula akong magluto ng kakanin sa bahay, at ngayon ay tumatanggap na ako ng order para sa biko, kutsinta, puto, sapin-sapin at maja blanca.",
    "Bukod sa kakanin, nagluluto rin ako ng pancit, palabok, spaghetti at lumpiang shanghai. Lahat ay sariwa at luto kapag may order, para sa birthday, fiesta, meeting o merienda ninyo."
  ]
};
 
var CATEGORY_ICONS = { "All": "🍽️", "Kakanin": "🍚", "Pancit, Palabok & Shanghai": "🍜", "Pasta": "🍝", "Fiesta Bundle": "🎉" };

/* PAYMENT NUMBERS: customers see these when they pick GCash or MariBank.
   CHECK AND CHANGE THESE to your real account numbers and account names. */
var GCASH_NUMBER    = "0969 011 1220";
var GCASH_NAME      = "Chelsie Novillos";
var MARIBANK_NUMBER = "0969 011 1220";
var MARIBANK_NAME   = "Chelsie Novillos";

/* PAYMENT METHODS shown in the cart and sent along in the Messenger message.
   only:  "delivery" or "pickup" = shown only for that option (leave out = always shown)
   proof: true = customer is told to send their payment screenshot in Messenger */
var PAYMENT_METHODS = [
  { name: "GCash",            icon: "📱", proof: true,
    detail: "Send payment to GCash number:\n" + GCASH_NUMBER + " (" + GCASH_NAME + ")" },
  { name: "MariBank",         icon: "🏦", proof: true,
    detail: "Send payment to MariBank account number:\n" + MARIBANK_NUMBER + " (" + MARIBANK_NAME + ")" },
  { name: "Cash on Delivery", icon: "🛵", only: "delivery", detail: "Babayaran mo ang order pagdating nito sa iyo." },
  { name: "Cash on Pick-up",  icon: "🏪", only: "pickup",   detail: "Babayaran mo ang order pag-pick up mo." }
];
/* DELIVERY FEE: charged for delivery in the towns listed below.
   free: barangays in that town with FREE delivery (names must match what customers will pick). */
var DELIVERY_FEE = 50;
var DELIVERY_AREAS = [
  { town: "Laoac",     free: ["Lebueg", "Anis", "D. Alarcio", "Cabilaoan", "Santiago", "Casantiagoan"] },
  { town: "Binalonan", free: [] },
  { town: "Urdaneta",  free: [] },
  { town: "Manaoag",   free: [] }
];

var PROOF_NOTE = "After paying, send your payment screenshot to us here in Messenger.";

/* HOW TO EDIT A DISH
   - img:   put the photo in the images folder and write its file name here. No photo yet? The emoji shows instead.
            Customers can tap a photo to see it bigger.
   - sizes: every size and its price. One size = no size picker. Two or more = customers choose a size.
   - Prices follow Chelsie's printed menu. Puto Pao with Salted Egg is not on that menu and still has a placeholder price. price: null shows "Ask for price". */
var MENU = [
  { cat: "Kakanin", emoji: "🧀", img: "PutoCheese.png", name: "Puto Cheese", desc: "Soft, fluffy steamed rice cake topped with melted cheese.", badge: "Bestseller",
    sizes: [ { label: "50 pcs", price: 350 }, { label: "75 pcs", price: 450 }, { label: "100 pcs", price: 550 } ] },
  { cat: "Kakanin", emoji: "🥟", img: "PutoPao.png", name: "Puto Pao", desc: "Puto with a savory-sweet filling inside, soft like a siopao.", badge: "Bestseller",
    sizes: [ { label: "50 pcs", price: 350 }, { label: "75 pcs", price: 550 }, { label: "100 pcs", price: 650 } ] },
  { cat: "Kakanin", emoji: "🍮", img: "PutoFlan.png", name: "Puto Flan", desc: "Fluffy puto topped with a smooth, sweet leche flan.", badge: "Bestseller",
    sizes: [ { label: "50 pcs", price: 350 }, { label: "75 pcs", price: 550 }, { label: "100 pcs", price: 650 } ] },
  { cat: "Kakanin", emoji: "🧁", img: "PutoAssorted.png", name: "Puto Assorted", desc: "A mix of our puto flavors in one order, perfect for sharing.", badge: "Bestseller",
    sizes: [ { label: "50 pcs", price: 350 }, { label: "75 pcs", price: 500 }, { label: "100 pcs", price: 600 } ] },
  { cat: "Kakanin", emoji: "🧀", img: "PutoCheeseHalfPutoPao.png", name: "Puto Cheese & Half Pao", desc: "Half puto cheese, half puto pao in one order.",
    sizes: [ { label: "50 pcs", price: 350 }, { label: "75 pcs", price: 550 }, { label: "100 pcs", price: 650 } ] },
  { cat: "Kakanin", emoji: "🍮", img: "PutoCheeseHalfPutoFlan.png", name: "Puto Cheese & Half Flan", desc: "Half puto cheese, half puto flan in one order.",
    sizes: [ { label: "50 pcs", price: 350 }, { label: "75 pcs", price: 550 }, { label: "100 pcs", price: 650 } ] },
  { cat: "Kakanin", emoji: "🥟", img: "PutoFlanHalfPutoPao.png", name: "Puto Pao & Half Flan", desc: "Half puto pao, half puto flan in one order.",
    sizes: [ { label: "50 pcs", price: 350 }, { label: "75 pcs", price: 550 }, { label: "100 pcs", price: 650 } ] },
  { cat: "Kakanin", emoji: "🥚", img: "PutoPaoWithSaltedegg.png", name: "Puto Pao with Salted Egg", desc: "Puto pao paired with salted egg in one order.",
    sizes: [ { label: "50 pcs", price: 350 }, { label: "75 pcs", price: 550 }, { label: "100 pcs", price: 650 } ] },
  { cat: "Kakanin", emoji: "🍚", img: "Biko.png", name: "Biko", desc: "Sticky rice cooked in coconut milk and brown sugar, topped with latik.", badge: "Bestseller",
    sizes: [ { label: "Medium", price: 600 }, { label: "Large", price: 700 }, { label: "Extra Large", price: 900 } ] },
  { cat: "Kakanin", emoji: "💜", img: "UbeBiko.png", name: "Ube Biko", desc: "Our biko made with sweet, creamy ube, topped with latik.", badge: "Bestseller",
    sizes: [ { label: "Medium", price: 650 }, { label: "Large", price: 750 }, { label: "Extra Large", price: 950 } ] },
  { cat: "Kakanin", emoji: "🍚", img: "UbeBikoHalfBiko.png", name: "Biko & Half Ube", desc: "Half classic biko, half ube biko in one bilao. Can't decide? Get both!",
    sizes: [ { label: "Medium", price: 650 }, { label: "Large", price: 750 }, { label: "Extra Large", price: 950 } ] },
  { cat: "Kakanin", emoji: "🍩", img: "Buchi.png", name: "Buchi", desc: "Crispy, chewy fried glutinous rice balls with sweet filling, coated in sesame seeds.", badge: "Bestseller",
    sizes: [ { label: "50 pcs", price: 350 }, { label: "75 pcs", price: 550 }, { label: "100 pcs", price: 700 } ] },
  { cat: "Kakanin", emoji: "🍮", img: "Kutsinta.png", name: "Kutsinta", desc: "Soft, chewy steamed rice cakes served with grated cheese.",
    sizes: [ { label: "50 pcs", price: 350 }, { label: "75 pcs", price: 450 }, { label: "100 pcs", price: 550 } ] },
  { cat: "Kakanin", emoji: "🍰", img: "SapinSapin.png", name: "Sapin-sapin", desc: "Colorful layered glutinous rice cake with a sweet coconut flavor, topped with desiccated coconut and grated cheese.",
    sizes: [ { label: "50 pcs", price: 350 }, { label: "75 pcs", price: 550 }, { label: "100 pcs", price: 700 } ] },
  { cat: "Kakanin", emoji: "🥥", img: "Maja.png", name: "Maja Blanca", desc: "Creamy and smooth coconut pudding mixed with sweet corn, topped with extra sweet corn kernels and grated cheese.",
    sizes: [ { label: "Medium", price: 500 }, { label: "Large", price: 600 }, { label: "Extra Large", price: 800 } ] },

  { cat: "Pancit, Palabok & Shanghai", emoji: "🍜", img: "PancitBihon.png", name: "Pancit Bihon Guisado", desc: "Light rice noodles with vegetables and meat, served with calamansi.",
    sizes: [ { label: "Medium", price: 600 }, { label: "Large", price: 700 }, { label: "Extra Large", price: 900 } ] },
  { cat: "Pancit, Palabok & Shanghai", emoji: "🦐", img: "Palabok.png", name: "Palabok", desc: "Rice noodles topped with rich savory sauce, seasoned ground pork, fresh squid, and sliced boiled eggs, served with calamansi. ",
    sizes: [ { label: "Medium", price: 600 }, { label: "Large", price: 700 }, { label: "Extra Large", price: 900 } ] },
  { cat: "Pancit, Palabok & Shanghai", emoji: "🥟", img: "Shanghai.png", name: "Lumpiang Shanghai", desc: "Crispy, bite-sized pork spring rolls with sweet chili dip.", badge: "Bestseller",
    sizes: [ { label: "50 pcs", price: 350 }, { label: "75 pcs", price: 550 }, { label: "100 pcs", price: 700 } ] },

  { cat: "Pasta", emoji: "🍝", img: "Spaghetti.png", name: "Filipino-style Spaghetti", desc: "Sweet-style meaty sauce with hotdog and cheese, loved by kids and adults.", badge: "Popular",
    sizes: [ { label: "Medium", price: 650 }, { label: "Large", price: 850 }, { label: "Extra Large", price: 1050 } ] },

  /* FIESTA BUNDLE: 10 bundles. Photos are bundle1.jpg ... bundle10.jpg. Edit the desc (inclusions) and price here. */
  { cat: "Fiesta Bundle", emoji: "🎉", img: "Bundle1.jpg", name: "Fiesta Bundle 1", desc: "Includes: Large Pancit Bihon, Large Palabok, 50 Pork Shanghai, 50 Buchi, 50 Puto Assorted", sizes: [ { label: "per bundle", price: 2450 } ] },
  { cat: "Fiesta Bundle", emoji: "🎉", img: "Bundle2.jpg", name: "Fiesta Bundle 2", desc: "Includes: Large Pancit Bihon, Large Palabok, Medium Ube/Plain Biko, 75 Puto Cheese", sizes: [ { label: "per bundle", price: 2500 } ] },
  { cat: "Fiesta Bundle", emoji: "🎉", img: "Bundle3.jpg", name: "Fiesta Bundle 3", desc: "Includes: Large Pancit Bihon, Large Palabok, Large Spaghetti, Large Puto Assorted", sizes: [ { label: "per bundle", price: 2850 } ] },
  { cat: "Fiesta Bundle", emoji: "🎉", img: "Bundle4.jpg", name: "Fiesta Bundle 4", desc: "Includes: 75 Puto Assorted, 75 Sapin-sapin, 75 Pork Shanghai, Maja Blanca", sizes: [ { label: "per bundle", price: 2100 } ] },
  { cat: "Fiesta Bundle", emoji: "🎉", img: "Bundle5.jpg", name: "Fiesta Bundle 5", desc: "Includes: Large Pancit Bihon, Large Palabok, 100 Puto Assorted, 100 Buchi", sizes: [ { label: "per bundle", price: 2700 } ] },
  { cat: "Fiesta Bundle", emoji: "🎉", img: "Bundle6.jpg", name: "Fiesta Bundle 6", desc: "Includes: Medium Palabok, 50 Sapin-sapin, 50 Puto Assorted, 50 Pork Shanghai, 50 Buchi", sizes: [ { label: "per bundle", price: 2000 } ] },
  { cat: "Fiesta Bundle", emoji: "🎉", img: "Bundle7.png", name: "Fiesta Bundle 7", desc: "Includes: Large Spaghetti, Large Pancit Bihon, Large Palabok, Large Ube/Plain Biko, Large Maja Blanca, 100 Buchi, 100 Pork Shanghai, 100 Puto Assorted + FREE 20 pcs Buchi!", sizes: [ { label: "per bundle", price: 6200 } ] },
  { cat: "Fiesta Bundle", emoji: "🎉", img: "Bundle8.jpg", name: "Fiesta Bundle 8", desc: "Includes: Large Pancit Bihon, Large Spaghetti, 100 Pork Shanghai, 100 Puto Assorted", sizes: [ { label: "per bundle", price: 2850 } ] },
  { cat: "Fiesta Bundle", emoji: "🎉", img: "Bundle9.png", name: "Fiesta Bundle 9", desc: "Includes: Medium Pancit Bihon, Medium Spaghetti, Medium Palabok, Medium Maja Blanca, 75 Puto Assorted, 75 Pork Shanghai", sizes: [ { label: "per bundle", price: 3700 } ] },
  { cat: "Fiesta Bundle", emoji: "🎉", img: "Bundle10.jpg", name: "Fiesta Bundle 10", desc: "Includes: Large Pancit Bihon, Large Palabok, Medium Ube/Plain Biko, Medium Maja Blanca", sizes: [ { label: "per bundle", price: 2750 } ] }
];
/* ========================================= */
 
function esc(s) {
  return String(s).replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
  });
}
function money(n) { if (n == null) return "Ask for price";  return CURRENCY + n.toLocaleString("en-PH", { minimumFractionDigits: 0, maximumFractionDigits: 2 }); }
 
/* If a photo file is missing, remove it so the emoji behind it shows */
function watchImages(root) {
  Array.prototype.forEach.call(root.querySelectorAll("img"), function (im) {
    function bad() { im.remove(); }
    im.addEventListener("error", bad);
    if (im.complete && im.naturalWidth === 0) bad();
  });
}
 
var cats = ["All"];
MENU.forEach(function (m) { if (cats.indexOf(m.cat) < 0) cats.push(m.cat); });
var active = "All";
var query = "";
var cart = {};   // "menuIndex|sizeIndex" -> quantity
var sel = {};    // menuIndex -> chosen size index
var payment = "";  // chosen payment method name
var fulfil = { type: "", date: "", time: "", town: "", brgy: "", address: "" };   // type: "pickup" | "delivery"
var custName = "", custNote = "";
var STORE_KEY = "chelsie-kakanin-order";
 
function sizeOf(i) { return sel[i] || 0; }
function priceOf(i, s) { return MENU[i].sizes[s].price; }
 
function countFor(c) {
  return c === "All" ? MENU.length : MENU.filter(function (m) { return m.cat === c; }).length;
}
 
function renderCats() {
  var bar = document.getElementById("catbar");
  bar.innerHTML = cats.map(function (c) {
    return '<button class="cat" type="button" role="tab" data-cat="' + esc(c) + '" aria-selected="' + (c === active) + '">' +
      '<span class="ico">' + (CATEGORY_ICONS[c] || "🍴") + '</span>' + esc(c) +
      '<span class="count">' + countFor(c) + '</span>' + '</button>';
  }).join("");
  Array.prototype.forEach.call(bar.querySelectorAll(".cat"), function (b) {
    b.addEventListener("click", function () {
      switchCategory(b.getAttribute("data-cat"));
    });
  });
}
 
/* Changing category makes the list shorter or longer. Keep the page from jumping down to
   "Meet the Owner" / "Contact" and bring the user back to the top of the menu list. */
function switchCategory(c) {
  if (c === active) return;
  var grid = document.getElementById("grid");
  grid.style.minHeight = grid.offsetHeight + "px";      // hold the height while the cards change
  active = c;
  renderCats();
  renderGrid();
  var barH = document.getElementById("catbar").offsetHeight;
  var navH = document.getElementById("navbar").offsetHeight;
  var target = grid.getBoundingClientRect().top + window.scrollY - navH - barH - 16;
  if (window.scrollY > target) window.scrollTo({ top: Math.max(0, target), behavior: "instant" });
  grid.style.minHeight = "";
}

function footHTML(i) {
  var k = i + "|" + sizeOf(i), q = cart[k] || 0;
  return q
    ? '<div class="qty"><button type="button" data-minus="' + k + '" aria-label="Remove one">−</button><span>' + q + '</span><button type="button" data-plus="' + k + '" aria-label="Add one">+</button></div>'
    : '<button type="button" class="btn btn-sm" data-plus="' + k + '">Add</button>';
}
 
function priceHTML(i) {
  var m = MENU[i], s = sizeOf(i);
  return '<span class="price">' + money(priceOf(i, s)) + '</span>' + (m.sizes.length === 1 ? '<small class="unit">' + esc(m.sizes[0].label) + '</small>' : '');
}
 
function sizeHTML(i) {
  var m = MENU[i];
  if (m.sizes.length < 2) return "";
  return '<label class="size-pick"><span>Size</span><select data-size="' + i + '">' +
    m.sizes.map(function (z, s) { return '<option value="' + s + '"' + (s === sizeOf(i) ? " selected" : "") + '>' + esc(z.label) + (z.price == null ? "" : " – " + money(z.price)) + '</option>'; }).join("") +
    '</select></label>';
}
 
function renderGrid() {
  var html = "", n = 0;
  MENU.forEach(function (m, i) {
    if (active !== "All" && m.cat !== active) return;
    if (query && (m.name + " " + m.desc + " " + m.cat).toLowerCase().indexOf(query) < 0) return;
    html += '<article class="card" data-i="' + i + '" style="animation-delay:' + (n++ * 60) + 'ms">' +
      (m.badge ? '<span class="badge">' + esc(m.badge) + '</span>' : '') +
      '<div class="media"><span class="emoji">' + m.emoji + '</span>' +
      (m.img ? '<img src="' + esc(m.img) + '" alt="' + esc(m.name) + '" loading="lazy" data-zoom>' : '') + '</div>' +
      '<span class="card-cat">' + esc(m.cat) + '</span>' +
      '<h3>' + esc(m.name) + '</h3>' +
      '<p>' + esc(m.desc) + '</p>' +
      '<div class="size-slot">' + sizeHTML(i) + '</div>' +
      '<div class="card-foot"><div class="price-box">' + priceHTML(i) + '</div>' +
      '<div class="foot-action">' + footHTML(i) + '</div></div></article>';
  });
  var grid = document.getElementById("grid");
  grid.innerHTML = html || '<p class="no-results">Walang nahanap para sa "' + esc(query) + '". Subukan ang ibang salita.</p>';
  watchImages(grid);
}
 
function refreshCard(i) {
  var card = document.querySelector('.card[data-i="' + i + '"]');
  if (!card) return;
  card.querySelector(".price-box").innerHTML = priceHTML(i);
  card.querySelector(".foot-action").innerHTML = footHTML(i);
  var dd = card.querySelector("select[data-size]");
  if (dd) dd.value = sizeOf(i);
}
 
function cartLines() {
  return Object.keys(cart).map(function (k) {
    var p = k.split("|"), i = +p[0], z = MENU[i].sizes[+p[1]];
    return { key: k, i: i, s: +p[1], m: MENU[i], z: z, q: cart[k], sub: z.price == null ? null : cart[k] * z.price };
  });
}
function cartTotals() {
  var items = 0, total = 0, tbc = false;
  cartLines().forEach(function (l) {
    items += l.q;
    if (l.sub == null) tbc = true; else total += l.sub;
  });
  var d = deliveryInfo();
  return { items: items, total: total, tbc: tbc, fee: d.fee, feeKnown: d.known, delivery: fulfil.type === "delivery" };
}
/* noFee = show the food subtotal only (used on the floating cart bar) */
function totalText(t, noFee) { return money(t.total + (noFee ? 0 : t.fee)) + (t.tbc ? " + items to confirm" : ""); }

/* ===== Delivery fee ===== */
function townList() {
  var t = DELIVERY_AREAS.map(function (a) { return a.town; });
  return t.length < 2 ? t.join("") : t.slice(0, -1).join(", ") + " at " + t[t.length - 1];
}
function areaOf(town) { return DELIVERY_AREAS.filter(function (a) { return a.town === town; })[0]; }
function deliveryInfo() {
  if (fulfil.type !== "delivery") return { fee: 0, known: false };
  var a = areaOf(fulfil.town);
  if (!a) return { fee: 0, known: false };
  if (a.free.length) {
    if (!fulfil.brgy) return { fee: 0, known: false };
    if (a.free.indexOf(fulfil.brgy) >= 0) return { fee: 0, known: true };
  }
  return { fee: DELIVERY_FEE, known: true };
}
function feeLabel(fee) { return fee ? money(fee) : "Free"; }

/* Remember the order if the page is refreshed */
function saveCart() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify({
      pay: payment, name: custName, note: custNote,
      fulfil: fulfil,
      items: cartLines().map(function (l) { return { n: l.m.name, z: l.z.label, q: l.q }; })
    }));
  } catch (e) {}
}
function loadCart() {
  try {
    var data = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
    if (!data) return;
    (data.items || []).forEach(function (it) {
      var q = Math.floor(+it.q);
      if (!(q > 0)) return;
      MENU.forEach(function (m, i) {
        if (m.name !== it.n) return;
        m.sizes.forEach(function (z, s) { if (z.label === it.z) cart[i + "|" + s] = Math.min(q, 999); });
      });
    });
    custName = String(data.name || "").slice(0, 60); custNote = String(data.note || "").slice(0, 200);
    if (data.fulfil) {
      fulfil.type = data.fulfil.type === "pickup" || data.fulfil.type === "delivery" ? data.fulfil.type : "";
      fulfil.date = String(data.fulfil.date || ""); fulfil.time = String(data.fulfil.time || "");
      fulfil.address = String(data.fulfil.address || "").slice(0, 300);
      fulfil.town = areaOf(data.fulfil.town) ? data.fulfil.town : "";
      var ar = areaOf(fulfil.town);
      fulfil.brgy = ar && ar.free.length && (ar.free.indexOf(data.fulfil.brgy) >= 0 || data.fulfil.brgy === "other") ? data.fulfil.brgy : "";
    }
    if (payOptions().some(function (p) { return p.name === data.pay; })) payment = data.pay;
  } catch (e) {}
}

function renderCart() {
  var t = cartTotals();
  document.getElementById("cart-count").textContent = t.items + (t.items === 1 ? " item" : " items");
  document.getElementById("cart-total").textContent = "Total " + totalText(t, true);
  document.getElementById("cartbar").classList.toggle("show", t.items > 0);
  document.body.classList.toggle("has-cart", t.items > 0);
  saveCart();
  if (!document.getElementById("drawer").hidden) renderDrawer(t);
}

function changeQty(k, d) {
  var q = Math.max(0, (cart[k] || 0) + d);
  if (q) cart[k] = q; else delete cart[k];
  refreshCard(+k.split("|")[0]);
  renderCart();
}
function removeLine(k) {
  delete cart[k];
  refreshCard(+k.split("|")[0]);
  renderCart();
}
/* change the size of an item that is already in the cart */
function changeLineSize(k, ns) {
  var i = +k.split("|")[0], nk = i + "|" + ns;
  if (nk === k) return;
  cart[nk] = (cart[nk] || 0) + (cart[k] || 0);
  delete cart[k];
  refreshCard(i);
  renderCart();
}
function clearCart() {
  cart = {};
  Array.prototype.forEach.call(document.querySelectorAll("#grid .card"), function (c) { refreshCard(+c.getAttribute("data-i")); });
  renderCart();
}

/* ===== Cart panel (review and edit the order) ===== */
function lineHTML(l) {
  var m = l.m, k = esc(l.key);
  var size = m.sizes.length > 1
    ? '<select class="line-size" data-line-size="' + k + '" aria-label="Size for ' + esc(m.name) + '">' +
        m.sizes.map(function (z, s) {
          return '<option value="' + s + '"' + (s === l.s ? " selected" : "") + '>' + esc(z.label) + (z.price == null ? "" : " – " + money(z.price)) + '</option>';
        }).join("") + '</select>'
    : '<span class="line-unit">' + esc(l.z.label) + '</span>';
  return '<div class="line">' +
    '<div class="thumb"><span>' + m.emoji + '</span>' + (m.img ? '<img src="' + esc(m.img) + '" alt="">' : '') + '</div>' +
    '<div class="line-main">' +
      '<div class="line-top"><h4>' + esc(m.name) + '</h4>' +
        '<button type="button" class="line-del" data-remove="' + k + '" aria-label="Remove ' + esc(m.name) + '">🗑</button></div>' +
      size +
      '<div class="line-bottom"><span class="line-price">' + (l.sub == null ? "Price to confirm" : money(l.sub)) + '</span>' +
        '<div class="qty"><button type="button" data-minus="' + k + '" aria-label="Remove one">−</button><span>' + l.q + '</span>' +
        '<button type="button" data-plus="' + k + '" aria-label="Add one">+</button></div></div>' +
    '</div></div>';
}

function payOptions() {
  return PAYMENT_METHODS.filter(function (p) { return !p.only || !fulfil.type || p.only === fulfil.type; });
}
function renderPay() {
  document.getElementById("pay-options").innerHTML = payOptions().map(function (p) {
    var on = p.name === payment;
    return '<button type="button" class="pay-opt' + (on ? " on" : "") + '" role="radio" aria-checked="' + on + '" data-pay="' + esc(p.name) + '">' +
      '<span class="pay-ico">' + p.icon + '</span>' + esc(p.name) + '</button>';
  }).join("");
  var cur = PAYMENT_METHODS.filter(function (p) { return p.name === payment; })[0];
  var d = document.getElementById("pay-detail");
  d.textContent = cur ? [cur.detail, cur.proof ? PROOF_NOTE : ""].filter(Boolean).join("\n") : "";
  d.hidden = !d.textContent;
}

/* ===== Pick up / delivery, date and time, address ===== */
function pad2(n) { return (n < 10 ? "0" : "") + n; }
function todayStr() { var d = new Date(); return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate()); }
function niceDate(s) {
  var p = s.split("-"), d = new Date(+p[0], +p[1] - 1, +p[2]);
  return d.toLocaleDateString("en-PH", { weekday: "short", month: "long", day: "numeric", year: "numeric" });
}
function niceTime(s) {
  var p = s.split(":"), h = +p[0], m = p[1];
  return ((h % 12) || 12) + ":" + m + " " + (h >= 12 ? "PM" : "AM");
}
function syncFulfil() {
  Array.prototype.forEach.call(document.querySelectorAll("#fulfil-options .pay-opt"), function (b) {
    var on = b.getAttribute("data-fulfil") === fulfil.type;
    b.classList.toggle("on", on); b.setAttribute("aria-checked", on);
  });
  var date = document.getElementById("f-date");
  date.min = todayStr();
  date.value = fulfil.date;
  document.getElementById("f-time").value = fulfil.time;
  document.getElementById("f-address").value = fulfil.address;
  document.getElementById("f-name").value = custName;
  document.getElementById("f-note").value = custNote;
  document.getElementById("f-delivery").hidden = fulfil.type !== "delivery";
  document.getElementById("f-town").value = fulfil.town;
  renderBrgy();
  updateFeeNote();
}
function renderBrgy() {
  var a = areaOf(fulfil.town), wrap = document.getElementById("f-brgy-wrap"), sel = document.getElementById("f-brgy");
  wrap.hidden = !(a && a.free.length);
  if (wrap.hidden) { sel.innerHTML = ""; return; }
  sel.innerHTML = '<option value="">Select barangay</option>' +
    a.free.map(function (b) { return '<option value="' + esc(b) + '">' + esc(b) + ' – Free delivery</option>'; }).join("") +
    '<option value="other">Other barangay in ' + esc(a.town) + ' – ' + money(DELIVERY_FEE) + '</option>';
  sel.value = fulfil.brgy;
}
function updateFeeNote() {
  var d = deliveryInfo(), n = document.getElementById("fee-note");
  if (d.known) n.textContent = d.fee ? "Delivery fee: " + money(d.fee) : "Free delivery sa barangay mo! 🎉";
  else n.textContent = "Delivery fee: " + money(DELIVERY_FEE) + " sa " + townList() + ". Libre sa piling barangay sa Laoac.";
}
function fulfilProblem() {
  if (!fulfil.type) return "Pili muna kung Pick up o Delivery.";
  if (!fulfil.date) return "Pili ng petsa kung kailan mo kailangan ang order.";
  if (fulfil.date < todayStr()) return "Pili ng petsa na hindi pa lumipas.";
  if (!fulfil.time) return "Pili ng oras kung anong oras mo kailangan ang order.";
  var when = new Date(fulfil.date + "T" + fulfil.time);
  if (when < new Date()) return "Pili ng oras na hindi pa lumipas.";
  if (fulfil.type === "delivery") {
    if (!fulfil.town) return "Pili ng bayan (" + townList().replace(" at ", " o ") + ") para sa delivery.";
    var a = areaOf(fulfil.town);
    if (a.free.length && !fulfil.brgy) return "Pili ng barangay mo sa " + a.town + ".";
    if (!fulfil.address.trim()) return "Ilagay ang complete delivery address mo.";
  }
  return "";
}
function showFulfilError(msg) {
  var e = document.getElementById("fulfil-error");
  e.textContent = msg; e.hidden = !msg;
}
function setupFulfil() {
  document.getElementById("fulfil-options").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-fulfil]");
    if (!b) return;
    fulfil.type = b.getAttribute("data-fulfil");
    if (payment && payOptions().every(function (p) { return p.name !== payment; })) payment = "";   // e.g. Cash on Delivery does not fit pick up
    showFulfilError("");
    syncFulfil(); renderPay(); renderCart();
  });
  function bind(id, key) {
    document.getElementById(id).addEventListener("input", function (e) {
      fulfil[key] = e.target.value; showFulfilError(""); saveCart();
    });
  }
  bind("f-date", "date"); bind("f-time", "time"); bind("f-address", "address");
  var town = document.getElementById("f-town");
  town.innerHTML = '<option value="">Select town</option>' + DELIVERY_AREAS.map(function (a) { return '<option value="' + esc(a.town) + '">' + esc(a.town) + '</option>'; }).join("");
  town.addEventListener("change", function () {
    fulfil.town = town.value; fulfil.brgy = ""; showFulfilError("");
    renderBrgy(); updateFeeNote(); renderCart();
  });
  document.getElementById("f-brgy").addEventListener("change", function (e) {
    fulfil.brgy = e.target.value; showFulfilError("");
    updateFeeNote(); renderCart();
  });
}

function renderDrawer(t) {
  t = t || cartTotals();
  var box = document.getElementById("cart-items");
  if (!t.items) {
    box.innerHTML = '<div class="empty"><span>🛒</span><p>Wala pang laman ang order mo.</p>' +
      '<button type="button" class="btn btn-sm" data-close>Back to menu</button></div>';
  } else {
    box.innerHTML = cartLines().map(lineHTML).join("");
    watchImages(box);
  }
  document.getElementById("drawer").classList.toggle("is-empty", !t.items);
  document.getElementById("drawer-total").textContent = totalText(t);
  var showFee = t.delivery && t.feeKnown;
  document.getElementById("drawer-sub-row").hidden = !showFee;
  document.getElementById("drawer-fee-row").hidden = !showFee;
  document.getElementById("drawer-sub").textContent = money(t.total) + (t.tbc ? " + items to confirm" : "");
  document.getElementById("drawer-fee").textContent = feeLabel(t.fee);
  renderPay();
}

var drawerOpener = null;
function openDrawer() {
  drawerOpener = document.activeElement;
  document.getElementById("drawer").classList.remove("is-sent");
  document.getElementById("drawer").hidden = false;
  document.body.classList.add("drawer-open");
  syncFulfil();
  renderDrawer();
  document.getElementById("drawer-close").focus();
}
function closeDrawer() {
  document.getElementById("drawer").hidden = true;
  document.body.classList.remove("drawer-open");
  if (drawerOpener && drawerOpener.focus) drawerOpener.focus();
}

function toast(msg) {
  var t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast.id);
  toast.id = setTimeout(function () { t.classList.remove("show"); }, 4500);
}

var orderId = "";
function newOrderId() {
  var d = new Date();
  return "CK-" + pad2(d.getMonth() + 1) + pad2(d.getDate()) + "-" + Math.floor(1000 + Math.random() * 9000);
}
function cleanName() { return custName.trim().replace(/\s+/g, " "); }
function nameProblem() {
  var w = cleanName().split(" ");
  if (w.length < 2 || w.some(function (x) { return x.length < 2; })) return "Ilagay ang buo mong pangalan (first name at last name).";
  return "";
}
function orderText() {
  var lines = ["Hello Chelsie's Kakanin! I'd like to order (Order #" + orderId + "):"];
  cartLines().forEach(function (l) {
    lines.push("• " + l.q + " x " + l.m.name + (l.m.sizes.length > 1 || l.z.label !== "per bundle" ? " (" + l.z.label + ")" : "") + " – " + (l.sub == null ? "price to confirm" : money(l.sub)));
  });
  var tt = cartTotals();
  if (tt.delivery) {
    lines.push("Subtotal: " + money(tt.total) + (tt.tbc ? " + items to confirm" : ""));
    lines.push("Delivery fee: " + feeLabel(tt.fee));
  }
  lines.push("Total: " + totalText(tt));
  lines.push("Full name: " + cleanName());
  lines.push("Pick up / delivery: " + (fulfil.type === "delivery" ? "Delivery" : "Pick up"));
  lines.push("Date and time needed: " + niceDate(fulfil.date) + " at " + niceTime(fulfil.time));
  if (fulfil.type === "delivery") {
    lines.push("Delivery area: " + (fulfil.brgy && fulfil.brgy !== "other" ? "Brgy. " + fulfil.brgy + ", " : "") + fulfil.town);
    lines.push("Delivery address: " + fulfil.address.trim().replace(/\s*\n\s*/g, ", "));
  }
  lines.push("Payment method: " + payment);
  var cur = PAYMENT_METHODS.filter(function (p) { return p.name === payment; })[0];
  if (custNote.trim()) lines.push("Notes: " + custNote.trim().replace(/\s*\n\s*/g, " "));
  if (cur && cur.proof) lines.push("I will send my payment screenshot here after this message.");
  return lines.join("\n");
}

function sendOrder() {
  if (!cartTotals().items) { toast("Wala pang laman ang order."); return; }
  var err = document.getElementById("pay-error");
  var np = nameProblem(), ne = document.getElementById("who-error");
  ne.textContent = np; ne.hidden = !np;
  if (np) {
    err.hidden = true;
    document.getElementById("who").scrollIntoView({ block: "center", behavior: "smooth" });
    document.getElementById("f-name").focus({ preventScroll: true });
    return;
  }
  var problem = fulfilProblem();
  if (problem) {
    showFulfilError(problem);
    err.hidden = true;
    document.getElementById("fulfil").scrollIntoView({ block: "center", behavior: "smooth" });
    return;
  }
  showFulfilError("");
  if (!payment) {
    err.hidden = false;
    document.getElementById("pay").scrollIntoView({ block: "center", behavior: "smooth" });
    return;
  }
  err.hidden = true;
  orderId = newOrderId();
  var text = orderText();
  var link = ORDER_LINK + (ORDER_LINK.indexOf("?") < 0 ? "?" : "&") + "text=" + encodeURIComponent(text);
  lastOrder = { id: orderId, text: text, link: link };

  // copy it, in case Messenger does not fill in the message by itself
  copyText(text);
  // open Messenger (must happen right inside the click)
  window.open(link, "_blank", "noopener");
  showSent();
}

var lastOrder = null;
function copyText(text, cb) {
  function ok() { if (cb) cb(true); }
  function fallback() {
    var ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    var done = false;
    try { done = document.execCommand("copy"); } catch (e) {}
    ta.remove();
    if (cb) cb(done);
  }
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(ok, fallback);
  else fallback();
}
function showSent() {
  document.getElementById("sent-text").textContent = lastOrder.text;
  document.getElementById("sent-id").textContent = "#" + lastOrder.id;
  document.getElementById("sent-note").textContent = "Buksan ang Messenger at i-send ang order. Kung walang laman ang message box, i-paste lang (na-copy na ito).";
  document.getElementById("drawer").classList.add("is-sent");
}
function finishOrder() {
  document.getElementById("drawer").classList.remove("is-sent");
  payment = ""; fulfil.type = ""; fulfil.date = ""; fulfil.time = ""; fulfil.town = ""; fulfil.brgy = ""; fulfil.address = "";
  custNote = "";
  clearCart();
  syncFulfil();
  closeDrawer();
  toast("Salamat sa order! 💛");
}

function setupExtras() {
  // back-to-top button
  var top = document.getElementById("to-top"), ticking = false;
  function check() { top.classList.toggle("show", window.scrollY > 700); ticking = false; }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(check); } }, { passive: true });
  top.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  check();
  // images: lazy load + decode off the main thread (faster on phones)
  var imgs = document.querySelectorAll("img:not(.logo-img):not(.hero-logo)");
  for (var i = 0; i < imgs.length; i++) { imgs[i].loading = "lazy"; imgs[i].decoding = "async"; }
  // update the grid images too whenever the menu is redrawn
  new MutationObserver(function (ms) {
    ms.forEach(function (m) { m.addedNodes.forEach(function (n) {
      if (n.querySelectorAll) n.querySelectorAll("img").forEach(function (im) { im.loading = "lazy"; im.decoding = "async"; });
    }); });
  }).observe(document.getElementById("grid"), { childList: true });
}

function setupSearch() {
  var box = document.getElementById("menu-search");
  box.addEventListener("input", function () {
    query = box.value.trim().toLowerCase();
    renderGrid();
  });
}

function setupCart() {
  var grid = document.getElementById("grid");
  grid.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (b) {
      if (b.hasAttribute("data-plus")) changeQty(b.getAttribute("data-plus"), 1);
      else if (b.hasAttribute("data-minus")) changeQty(b.getAttribute("data-minus"), -1);
      return;
    }
    var im = e.target.closest("img[data-zoom]");
    if (im) openLightbox(im.getAttribute("src"), im.getAttribute("alt"));
  });
  grid.addEventListener("change", function (e) {
    var sl = e.target.closest("select[data-size]");
    if (!sl) return;
    var i = +sl.getAttribute("data-size");
    sel[i] = +sl.value;
    refreshCard(i);
  });

  /* cart panel */
  var box = document.getElementById("cart-items");
  box.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    if (b.hasAttribute("data-close")) { closeDrawer(); return; }
    var attr = ["data-plus", "data-minus", "data-remove"].filter(function (a) { return b.hasAttribute(a); })[0];
    if (!attr) return;
    var k = b.getAttribute(attr);
    if (attr === "data-plus") changeQty(k, 1);
    else if (attr === "data-minus") changeQty(k, -1);
    else removeLine(k);
    var again = box.querySelector("[" + attr + '="' + k + '"]');   // keep keyboard focus on the same button
    if (again) again.focus();
  });
  box.addEventListener("change", function (e) {
    var sl = e.target.closest("select[data-line-size]");
    if (sl) changeLineSize(sl.getAttribute("data-line-size"), +sl.value);
  });
  document.getElementById("pay-options").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-pay]");
    if (!b) return;
    payment = b.getAttribute("data-pay");
    document.getElementById("pay-error").hidden = true;
    saveCart();
    renderPay();
  });
  setupFulfil();
  document.getElementById("f-name").addEventListener("input", function (e) {
    custName = e.target.value; document.getElementById("who-error").hidden = true; saveCart();
  });
  document.getElementById("f-note").addEventListener("input", function (e) { custNote = e.target.value; saveCart(); });
  document.getElementById("cart-open").addEventListener("click", openDrawer);
  document.getElementById("cart-view").addEventListener("click", openDrawer);
  document.getElementById("drawer-close").addEventListener("click", closeDrawer);
  document.getElementById("drawer-backdrop").addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !document.getElementById("drawer").hidden) closeDrawer();
  });
  document.getElementById("cart-send").addEventListener("click", sendOrder);
  document.getElementById("sent-messenger").addEventListener("click", function () {
    if (lastOrder) window.open(lastOrder.link, "_blank", "noopener");
  });
  document.getElementById("sent-copy").addEventListener("click", function () {
    if (lastOrder) copyText(lastOrder.text, function (ok) { toast(ok ? "Na-copy ang order." : "Hindi ma-copy ang order."); });
  });
  document.getElementById("sent-done").addEventListener("click", finishOrder);
  document.getElementById("cart-clear").addEventListener("click", function () {
    if (window.confirm("Alisin lahat ng nasa order?")) clearCart();
  });
}

/* Tap a photo to see it bigger */
function openLightbox(src, alt) {
  var lb = document.getElementById("lightbox");
  var im = lb.querySelector("img");
  im.src = src; im.alt = alt || "";
  lb.hidden = false;
}
function setupLightbox() {
  var lb = document.getElementById("lightbox");
  lb.addEventListener("click", function () { lb.hidden = true; });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") lb.hidden = true; });
}
 
function renderOwner() {
  var photo = document.getElementById("owner-photo");
  photo.innerHTML = '<span class="emoji">' + OWNER.emoji + '</span>' +
    (OWNER.photo ? '<img src="' + esc(OWNER.photo) + '" alt="' + esc(OWNER.name) + '" loading="lazy">' : '');
  watchImages(photo);
  document.getElementById("owner-name").textContent = OWNER.name;
  document.getElementById("owner-role").textContent = OWNER.role;
  document.getElementById("owner-quote").textContent = "“" + OWNER.quote + "”";
  document.getElementById("owner-bio").innerHTML = OWNER.bio.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
}
 
function renderStatic() {
  document.getElementById("socials").innerHTML = SOCIALS.map(function (s) {
    return '<a class="social" href="' + esc(s.url) + '" target="_blank" rel="noopener">' + s.icon + ' ' + esc(s.name) + '</a>';
  }).join("");
  document.getElementById("c-phone").innerHTML = '<a href="tel:' + esc(CONTACT.phone.replace(/[^+\d]/g, "")) + '">' + esc(CONTACT.phone) + '</a>';
  var em = document.getElementById("c-email");
  if (CONTACT.email) em.innerHTML = '<a href="mailto:' + esc(CONTACT.email) + '">' + esc(CONTACT.email) + '</a>';
  else em.parentNode.remove();
  document.getElementById("c-address").textContent = CONTACT.address;
  document.getElementById("c-hours").textContent = CONTACT.hours;
  var free = DELIVERY_AREAS.filter(function (a) { return a.free.length; })[0];
  var towns = townList();
  document.getElementById("step3-text").textContent = "Kokompirmahin namin ang total at oras, tapos lulutuin namin ito nang sariwa. Delivery fee: " + money(DELIVERY_FEE) + " sa " + towns + "." +
    (free ? " Libre ang delivery sa " + free.town + " para sa Brgy. " + free.free.slice(0, -1).join(", ") + " at " + free.free[free.free.length - 1] + "." : "");
  document.getElementById("yr").textContent = new Date().getFullYear();
}
 
function setupNav() {
  var nav = document.getElementById("nav");
  var burger = document.getElementById("burger");
  var navbar = document.getElementById("navbar");
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
 
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  links.concat([document.querySelector(".nav-cta")]).forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
 
  // tap outside the menu (or press Escape) to close it on phones
  function closeNav() { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
  document.addEventListener("click", function (e) {
    if (nav.classList.contains("open") && !nav.contains(e.target) && !burger.contains(e.target)) closeNav();
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeNav(); });

  function onScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 10);
    var pos = window.scrollY + 140, current = "home";
    ["home", "menu", "owner", "order", "contact"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.offsetTop <= pos) current = id;
    });
    links.forEach(function (a) {      
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
 
function setupReveal() {
  var els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(els, function (e) { e.classList.add("visible"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
    });
  }, { threshold: 0.15 });
  Array.prototype.forEach.call(els, function (e) { io.observe(e); });
}
 
loadCart();
renderCats();
renderGrid();
renderOwner();
renderStatic();
setupCart();
setupSearch();
setupExtras();
renderCart();
setupLightbox();
setupNav();
setupReveal();
