const CUR = 'ج.م';
const PRODUCTS = [
  {id:1,name:'بُنّ إثيوبي يرغاتشيف 250جم',cat:'حبوب القهوة',price:320,icon:'☕',bg:'#F2D9B3',desc:'نكهات زهرية وحمضيات، تحميص خفيف مناسب للفلتر.'},
  {id:2,name:'بُنّ برازيلي سانتوس 250جم',cat:'حبوب القهوة',price:260,icon:'🫘',bg:'#E7C9A5',desc:'قوام كثيف ونكهة شوكولاتة وبندق، ممتاز للإسبريسو.'},
  {id:3,name:'بُنّ كولومبي هويلا 250جم',cat:'حبوب القهوة',price:295,icon:'☕',bg:'#EBD2B4',desc:'توازن بين الحلاوة والحموضة، تحميص متوسط.'},
  {id:4,name:'محضّر V60 سيراميك',cat:'أدوات التحضير',price:540,icon:'⏳',bg:'#D6E2D8',desc:'قمع تقطير بحجم 02 يعطي كوبًا نظيفًا وواضح النكهة.'},
  {id:5,name:'كيمكس زجاجي 600مل',cat:'أدوات التحضير',price:1450,icon:'🧪',bg:'#DDE3E6',desc:'إبريق تقطير زجاجي بحزام خشبي، يكفي لكوبين أو ثلاثة.'},
  {id:6,name:'مطحنة يدوية بشفرات معدنية',cat:'أدوات التحضير',price:980,icon:'⚙️',bg:'#E4E0DA',desc:'طحن منتظم بـ 20 درجة ضبط، وتتّسع لـ 30 جم.'},
  {id:7,name:'ميزان رقمي بمؤقّت',cat:'أدوات التحضير',price:690,icon:'⚖️',bg:'#EADBC0',desc:'دقة 0.1 جم مع مؤقّت مدمج لضبط وقت الاستخلاص.'},
  {id:8,name:'إبريق ذو عنق إوزة 800مل',cat:'أدوات التحضير',price:760,icon:'🫖',bg:'#D6E2D8',desc:'صبّ دقيق ومتحكَّم فيه، من الستانلس ستيل.'},
  {id:9,name:'كوب سيراميك 250مل',cat:'الأكواب',price:180,icon:'🍵',bg:'#F2D9B3',desc:'كوب سميك يحفظ الحرارة، آمن في غسالة الأطباق.'},
  {id:10,name:'كوب سفر معزول 350مل',cat:'الأكواب',price:420,icon:'🥤',bg:'#DDE3E6',desc:'يبقي مشروبك ساخنًا 6 ساعات وبارد 12 ساعة.'},
  {id:11,name:'طقم فناجين إسبريسو (2)',cat:'الأكواب',price:310,icon:'☕',bg:'#E7C9A5',desc:'فنجانان بطبقين، سعة 80مل لكل منهما.'},
  {id:12,name:'فلاتر ورقية V60 (100)',cat:'إكسسوارات',price:120,icon:'📄',bg:'#E4E0DA',desc:'ورق مقاس 02 بدون طعم، لا يترك رائحة في القهوة.'}
];

// ---- رسومات المنتجات (بديل تلقائي) + دعم الصور الحقيقية من مجلد images/
const ST='stroke="#2B2420" stroke-opacity=".3"';
const cup=x=>`<g transform="translate(${x} 0)"><ellipse cx="22" cy="78" rx="18" ry="5" fill="#F6F2EC" ${ST}/><path d="M8 52h28v12a14 14 0 0 1-28 0z" fill="#F6F2EC" ${ST}/><path d="M36 56h4a6 6 0 0 1 0 12h-4" fill="none" stroke="#E4DACB" stroke-width="4"/><ellipse cx="22" cy="52" rx="14" ry="3" fill="#6B3F27"/></g>`;
const SVG={
 bag:c=>`<path d="M28 18h44l6 10v58a4 4 0 0 1-4 4H26a4 4 0 0 1-4-4V28z" fill="${c}"/><path d="M28 18h44l6 10H22z" fill="#000" opacity=".18"/><rect x="32" y="44" width="36" height="30" rx="4" fill="#F3ECE2"/><g transform="rotate(25 50 56)"><ellipse cx="50" cy="56" rx="6" ry="9" fill="${c}"/><path d="M50 48v16" stroke="#F3ECE2" stroke-width="1.5"/></g><rect x="38" y="67" width="24" height="2.5" rx="1" fill="${c}" opacity=".5"/>`,
 dripper:()=>`<rect x="34" y="70" width="32" height="20" rx="3" fill="#fff" opacity=".55" ${ST}/><rect x="36" y="80" width="28" height="10" rx="2" fill="#7A4E32" opacity=".8"/><path d="M18 24h64L58 66H42z" fill="#F6F2EC" ${ST}/><path d="M30 24l14 42M44 24l5 42M56 24l-5 42M70 24L56 66" stroke="#2B2420" stroke-opacity=".15"/><path d="M82 28c10 0 10 14 0 14" fill="none" stroke="#C9BDAE" stroke-width="4"/><rect x="40" y="66" width="20" height="5" rx="2" fill="#E5DED3"/>`,
 chemex:()=>`<path d="M24 14h52L58 50l18 36H24l18-36z" fill="#CFE0DA" opacity=".8" ${ST}/><path d="M24 14h52L58 50H42z" fill="#fff" opacity=".35"/><path d="M40 44h20l2 10H38z" fill="#8A5A3B"/><path d="M34 72h32l6 14H28z" fill="#7A4E32" opacity=".55"/>`,
 grinder:()=>`<rect x="38" y="10" width="24" height="6" rx="3" fill="#8A5A3B"/><rect x="48" y="14" width="4" height="14" fill="#2B2420" opacity=".7"/><path d="M34 28h32l-4 20H38z" fill="#4A423B"/><rect x="36" y="48" width="28" height="30" rx="3" fill="#6E655C"/><rect x="30" y="78" width="40" height="10" rx="3" fill="#3A332E"/><rect x="40" y="56" width="20" height="3" rx="1.5" fill="#fff" opacity=".25"/>`,
 scale:()=>`<rect x="14" y="40" width="72" height="34" rx="7" fill="#F4F1EC" ${ST}/><rect x="24" y="48" width="52" height="14" rx="3" fill="#2B2420"/><text x="50" y="59" font-size="9" fill="#9FD3B3" text-anchor="middle" font-family="monospace">18.0 g</text><circle cx="36" cy="68" r="2" fill="#5F8A72"/><circle cx="64" cy="68" r="2" fill="#D8B48A"/>`,
 kettle:()=>`<path d="M70 52c10 0 14-14 22-26" stroke="#B9B1A6" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M28 50c-14 0-14 24 0 24" fill="none" stroke="#2B2420" stroke-width="4" opacity=".75"/><path d="M30 44h40l4 42H26z" fill="#D9D3CA" ${ST}/><rect x="34" y="50" width="6" height="30" rx="3" fill="#fff" opacity=".45"/><rect x="32" y="38" width="36" height="8" rx="3" fill="#8A5A3B"/><circle cx="50" cy="35" r="4" fill="#2B2420" opacity=".7"/>`,
 mug:()=>`<path d="M68 48h6a9 9 0 0 1 0 18h-6" fill="none" stroke="#E4DACB" stroke-width="6"/><path d="M26 38h42v32a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14z" fill="#F6F2EC" ${ST}/><ellipse cx="47" cy="38" rx="21" ry="4" fill="#6B3F27"/><path d="M40 28c-4-4 4-6 0-10M54 28c-4-4 4-6 0-10" stroke="#2B2420" stroke-opacity=".3" fill="none" stroke-width="2" stroke-linecap="round"/>`,
 travel:()=>`<rect x="32" y="22" width="36" height="66" rx="8" fill="#5F8A72"/><rect x="34" y="12" width="32" height="12" rx="5" fill="#2B2420" opacity=".85"/><rect x="32" y="50" width="36" height="6" fill="#fff" opacity=".25"/><rect x="38" y="28" width="5" height="52" rx="2.5" fill="#fff" opacity=".2"/>`,
 espresso:()=>cup(2)+cup(48),
 filters:()=>`<ellipse cx="50" cy="72" rx="30" ry="9" fill="#EFE8DC" ${ST}/><ellipse cx="50" cy="64" rx="30" ry="9" fill="#F6F2EC" ${ST}/><ellipse cx="50" cy="56" rx="30" ry="9" fill="#FBF8F3" ${ST}/>`
};
const TYPE={1:['bag','#6B4A33'],2:['bag','#4E3A2D'],3:['bag','#7A5A3E'],4:['dripper'],5:['chemex'],6:['grinder'],7:['scale'],8:['kettle'],9:['mug'],10:['travel'],11:['espresso'],12:['filters']};
const REMOTE={
 4:'https://coffeetown.store/wp-content/uploads/2026/10/cde795cf-7e5e-47e1-bb92-547da6b2617c.png',
 5:'https://img.kwcdn.com/product/fancy/e0b82511-6e87-4caa-b0c8-a5d6662abb7d.jpg?imageView2/2/w/500/q/70/format/avif',
 6:'https://img.kwcdn.com/product/fancy/92ed1e12-3aae-40fb-880f-d59342210607.jpg?imageView2/2/w/500/q/70/format/avif',
 7:'https://img.kwcdn.com/product/fancy/30049158-8a3b-44cf-a051-607131f622a9.jpg?imageView2/2/w/500/q/70/format/avif',
 10:'https://f.nooncdn.com/p/pzsku/Z28720567DC5359F050FCZ/45/1756995628/94458516-d95b-40eb-acd6-91bd96fa80e0.jpg?width=600',
 12:'https://img.kwcdn.com/product/fancy/3b80d85e-fd11-4114-94e0-5462ffbf926a.jpg?imageView2/2/w/500/q/70/format/avif'
};
function art(p, photo=true) {
  const [t,c] = TYPE[p.id];
  const svg = `<svg viewBox="0 0 100 100" aria-hidden="true">${SVG[t](c)}</svg>`;
  const loc = (window.PHOTOS||{})[p.id] || `images/${p.id}.jpg`;
  const alt = REMOTE[p.id] ? ` data-u="${REMOTE[p.id]}"` : '';
  return svg + (photo ? `<img src="${loc}"${alt} alt="${p.name}" loading="lazy" referrerpolicy="no-referrer" onerror="if(this.dataset.u&&!this.dataset.t){this.dataset.t=1;this.src=this.dataset.u}else this.remove()">` : '');
}
const $ = s => document.querySelector(s);
const fmt = n => n.toLocaleString('ar-EG') + ' ' + CUR;
let cart = [], cat = 'الكل';
try { cart = JSON.parse(localStorage.getItem('bunn-cart')) || []; } catch(e) { cart = []; }
const save = () => { try { localStorage.setItem('bunn-cart', JSON.stringify(cart)); } catch(e) {} };

// ---- الأقسام والمنتجات
const cats = ['الكل', ...new Set(PRODUCTS.map(p => p.cat))];
function renderChips() {
  $('#chips').innerHTML = cats.map(c => `<button class="chip" role="tab" aria-selected="${c===cat}" data-c="${c}">${c}</button>`).join('');
}
function renderGrid() {
  const q = $('#search').value.trim(), s = $('#sort').value;
  let list = PRODUCTS.filter(p => (cat==='الكل' || p.cat===cat) && (p.name+p.cat).includes(q));
  if (s==='low') list.sort((a,b)=>a.price-b.price);
  if (s==='high') list.sort((a,b)=>b.price-a.price);
  $('#grid').innerHTML = list.map(p => `
    <article class="card">
      <button class="thumb" style="background:${p.bg}" data-view="${p.id}" aria-label="تفاصيل ${p.name}">${art(p)}</button>
      <div class="info"><span class="cat">${p.cat}</span><h3>${p.name}</h3>
        <div class="row"><span class="price">${fmt(p.price)}</span><button class="add" data-add="${p.id}">أضف للسلة</button></div>
      </div></article>`).join('');
  $('#empty').hidden = list.length > 0;
}

// ---- السلة
function addToCart(id) {
  const it = cart.find(i => i.id===id);
  it ? it.q++ : cart.push({id, q:1});
  save(); renderCart(); toast('تمت الإضافة إلى السلة');
}
function renderCart() {
  const count = cart.reduce((a,i)=>a+i.q,0);
  $('#cartCount').textContent = count.toLocaleString('ar-EG');
  const total = cart.reduce((a,i)=>a+i.q*PRODUCTS.find(p=>p.id===i.id).price,0);
  $('#total').textContent = fmt(total);
  $('#checkout').disabled = !count;
  $('#cartItems').innerHTML = count ? cart.map(i => {
    const p = PRODUCTS.find(x=>x.id===i.id);
    return `<div class="ci"><div class="mini" style="background:${p.bg}">${art(p,false)}</div>
      <div><strong>${p.name}</strong><div class="qty"><button data-q="${p.id}" data-d="-1" aria-label="إنقاص">−</button>${i.q.toLocaleString('ar-EG')}<button data-q="${p.id}" data-d="1" aria-label="زيادة">+</button></div></div>
      <div><div class="price">${fmt(p.price*i.q)}</div><button class="rm" data-rm="${p.id}">حذف</button></div></div>`;
  }).join('') : '<p class="empty">سلتك فارغة. أضف منتجًا لتبدأ.</p>';
}
function setQty(id, d) {
  const it = cart.find(i=>i.id===id); if (!it) return;
  it.q += d; if (it.q<=0) cart = cart.filter(i=>i.id!==id);
  save(); renderCart();
}
function drawer(open) {
  $('#drawer').classList.toggle('open', open);
  $('#drawer').setAttribute('aria-hidden', !open);
  $('#overlay').hidden = !open;
}

// ---- نافذة تفاصيل المنتج
function openModal(id) {
  const p = PRODUCTS.find(x=>x.id===id);
  $('#modalBox').innerHTML = `<div class="thumb" style="background:${p.bg}">${art(p)}</div>
    <div class="modal-body"><span class="cat">${p.cat}</span><h3>${p.name}</h3><p>${p.desc}</p>
    <div class="row"><span class="price">${fmt(p.price)}</span><button class="btn sm" data-add="${p.id}">أضف للسلة</button></div>
    <button class="close" id="closeModal">إغلاق</button></div>`;
  $('#modal').hidden = false; $('#closeModal').focus();
}
let tt;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(tt); tt = setTimeout(()=>t.classList.remove('show'), 1800);
}

// ---- الأحداث
document.addEventListener('click', e => {
  const t = e.target;
  if (t.dataset.c) { cat = t.dataset.c; renderChips(); renderGrid(); }
  if (t.dataset.add) addToCart(+t.dataset.add);
  if (t.dataset.view) openModal(+t.dataset.view);
  if (t.dataset.q) setQty(+t.dataset.q, +t.dataset.d);
  if (t.dataset.rm) setQty(+t.dataset.rm, -999);
  if (t.id==='closeModal' || t.id==='modal') $('#modal').hidden = true;
  if (t.closest('#menu a')) { $('#menu').classList.remove('open'); $('#burger').setAttribute('aria-expanded', false); }
});
$('#openCart').onclick = () => drawer(true);
$('#closeCart').onclick = $('#overlay').onclick = () => drawer(false);
$('#burger').onclick = () => {
  const o = $('#menu').classList.toggle('open'); $('#burger').setAttribute('aria-expanded', o);
};
$('#search').oninput = renderGrid; $('#sort').onchange = renderGrid;
$('#checkout').onclick = () => { drawer(false); cart = []; save(); renderCart(); toast('تم استلام طلبك، سنتواصل معك للتأكيد'); };
$('#news').onsubmit = e => { e.preventDefault(); $('#newsMsg').textContent = 'تم الاشتراك. شكرًا لك!'; e.target.reset(); };
document.addEventListener('keydown', e => { if (e.key==='Escape') { $('#modal').hidden = true; drawer(false); } });

renderChips(); renderGrid(); renderCart();
