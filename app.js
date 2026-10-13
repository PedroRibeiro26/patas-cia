const f = v => 'R$ ' + v.toFixed(2).replace('.', ',');
const P = [
    { n: 'Ração Premium Cães', e: '🦴', c: 'Alimentos', s: [['1 kg', 24.9], ['10 kg', 189.9], ['15 kg', 259.9]], h: 1 },
    { n: 'Ração Gatos Castrados', e: '🐟', c: 'Alimentos', s: [['1 kg', 29.9], ['3 kg', 79.9], ['10 kg', 219.9]], h: 1 },
    { n: 'Petisco Crocante', e: '🍪', c: 'Alimentos', s: [['65 g', 7.9], ['500 g', 39.9]] },
    { n: 'Bolinha Maluca', e: '🎾', c: 'Brinquedos', s: [['Pequena', 9.9], ['Grande', 16.9], ['Kit 3 un', 34.9]], h: 1 },
    { n: 'Coleira Arco-íris', e: '🌈', c: 'Passeio', s: [['P', 19.9], ['M', 24.9], ['G', 29.9]] },
    { n: 'Caminha Nuvem', e: '☁️', c: 'Conforto', s: [['P', 69.9], ['M', 99.9], ['G', 139.9]], h: 1 },
    { n: 'Shampoo Pelo de Seda', e: '🧼', c: 'Higiene', s: [['250 ml', 22.9], ['500 ml', 38.9]] },
    { n: 'Areia Sanitária', e: '🐱', c: 'Higiene', s: [['4 kg', 17.9], ['12 kg', 44.9]] }];
const O = { 0: 20, 3: 30, 6: 15 };
const S = [['Banho simples', '🛁', 'Shampoo neutro, secagem e limpeza de ouvidos', '40 min', 45],
['Banho hidratante', '💧', 'Banho com máscara de hidratação e perfume', '1 h', 65],
['Tosa higiênica', '✂️', 'Barriga, patinhas e região íntima', '30 min', 35],
['Tosa completa', '🐩', 'Máquina ou tesoura, acabamento na raça', '1 h 30', 85],
['Dia de spa', '🛋️', 'Banho, tosa, escovação de dentes e hidratação', '2 h', 130]];
const M = [['P', 1], ['M', 1.3], ['G', 1.7]];
const nav = [['index.html', 'Início'], ['tosa.html', 'Tosa e Banho'], ['produtos.html', 'Produtos'], ['fotos.html', 'Fotos'], ['contato.html', 'Contato'], ['feedback.html', 'Feedback']];
const pg = location.pathname.split('/').pop() || 'index.html';
document.body.insertAdjacentHTML('afterbegin', '<nav><a class="logo" href="index.html">🐾 Patas &amp; Cia</a><button class="bg" aria-label="Menu" onclick="document.querySelector(\'.links\').classList.toggle(\'o\')">☰</button><div class="links">' + nav.map(n => `<a href="${n[0]}" class="${n[0] == pg || (pg == 'compra.html' && n[0] == 'produtos.html') ? 'on' : ''}">${n[1]}</a>`).join('') + '</div></nav>');
document.body.insertAdjacentHTML('beforeend', '<footer>Feito com 🧡 para quem tem rabinho. <b>Patas &amp; Cia</b> · Rua dos Focinhos, 123 · (51) 99999-0000</footer>');
let lt = 0; addEventListener('mousemove', e => { if (Date.now() - lt < 110) return; lt = Date.now(); const p = document.createElement('i'); p.className = 'pw'; p.textContent = '🐾'; p.style.left = e.clientX + 'px'; p.style.top = e.clientY + 'px'; document.body.append(p); setTimeout(() => p.remove(), 1100) });
const io = new IntersectionObserver(r => r.forEach(x => x.isIntersecting && x.target.classList.add('in')), { threshold: .1 });
function rv() { document.querySelectorAll('.rv:not(.in)').forEach(e => io.observe(e)) }
function pcard(p, i) { const o = O[i]; return `<a class="card rv" href="compra.html?id=${i}">${o ? `<span class="tag">-${o}%</span>` : ''}<span class="big">${p.e}</span><h3>${p.n}</h3><p><span class="old">${o ? f(p.s[0][1]) : ''}</span><span class="price">${f(p.s[0][1] * (1 - (o || 0) / 100))}</span></p><div>${p.s.map((s, j) => `<span class="chip" onclick="event.preventDefault();location.href='compra.html?id=${i}&s=${j}'">${s[0]}</span>`).join('')}</div></a>` }
function toast(t) { const d = document.createElement('div'); d.className = 'toast'; d.textContent = t; document.body.append(d); setTimeout(() => d.remove(), 2600) }
