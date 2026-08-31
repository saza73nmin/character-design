const STORAGE = {
  completed: 'odai-atelier-completed-v2',
  stock: 'odai-atelier-stock-v1',
};

const choices = {
  '髪色': [
    ['漆黒','#1c1b23','#fff'],['アッシュグレー','#9a9693','#29254a'],['プラチナブロンド','#f1e7cb','#29254a'],['深いネイビー','#273b67','#fff'],['ワインレッド','#702f43','#fff'],['ハニーゴールド','#d9a72d','#29254a'],['チョコレートブラウン','#633d30','#fff'],['シルバー','#c8cbd1','#29254a'],['ダークグリーン','#31584c','#fff'],['ミルクティーベージュ','#c7a680','#29254a'],['ラベンダーグレー','#9c93b1','#29254a'],['青みのある黒','#202839','#fff'],['チェリーブラウン','#884a45','#fff'],['アイスブルー','#a9c8d9','#29254a'],['ローズピンク','#cc768e','#fff'],['サンセットオレンジ','#cf7043','#fff'],['ピーコックブルー','#167e92','#fff'],['白金','#ddd9cb','#29254a'],
  ].map(([name,color,ink]) => ({ name,color,ink })),
  '瞳の色': [
    ['琥珀色','#c98523','#29254a'],['サファイアブルー','#2774b8','#fff'],['エメラルドグリーン','#238d78','#fff'],['アメジストパープル','#8460ac','#fff'],['深い赤','#9d3445','#fff'],['グレー','#9fa3ab','#29254a'],['こげ茶','#53382e','#fff'],['金色','#d2ad28','#29254a'],['夜空のような紺色','#293f89','#fff'],['左右で違うオッドアイ','linear-gradient(135deg,#388dc8 0 48%,#d08a2b 52% 100%)','#fff'],['ローズピンク','#c45a78','#fff'],['淡い水色','#8fcbd9','#29254a'],['ライムグリーン','#92b949','#29254a'],['桃色','#e396a6','#29254a'],['白銀','#d9dde1','#29254a'],['虹彩グラデーション','linear-gradient(135deg,#d96787,#d8b44d,#60a896,#6386c8)','#fff'],
  ].map(([name,color,ink]) => ({ name,color,ink })),
  '背景色': [
    ['朝焼けのピーチ','#f6b29d','#29254a'],['レモンクリーム','#f4df81','#29254a'],['若草','#b9d892','#29254a'],['空色','#9dcae5','#29254a'],['藤色','#c2acd8','#29254a'],['桜色','#edb5c3','#29254a'],['夕暮れの橙','#e88d67','#29254a'],['深い海','#2f5f7d','#fff'],['ミッドナイトブルー','#25365b','#fff'],['深い森','#355b4d','#fff'],['くすみローズ','#b77b83','#fff'],['スモークグレー','#92939b','#fff'],['真珠色','#e7e1dc','#29254a'],['薄明の紫','#8c83b7','#fff'],['珊瑚色','#e88978','#29254a'],['砂漠のベージュ','#d8bd8c','#29254a'],['アクアマリン','#75c9be','#29254a'],['ブルーベリー','#5365a5','#fff'],['オーロラ','linear-gradient(135deg,#f5a7c1,#b5a2dc,#8fd1cc)','#29254a'],['夜明け','linear-gradient(135deg,#7063a9,#e58d9b,#f3bf74)','#fff'],['モノクローム','linear-gradient(135deg,#eee 0 48%,#454545 52% 100%)','#29254a'],['海辺のグラデーション','linear-gradient(135deg,#90d2e1,#4e8fbb)','#fff'],['新緑のグラデーション','linear-gradient(135deg,#d4e3a2,#71ad76)','#29254a'],['いちごミルク','linear-gradient(135deg,#f3c3ca,#f7e5e0)','#29254a'],
  ].map(([name,color,ink]) => ({ name,color,ink })),
  '髪型': ['マッシュショート','センターパート','無造作な短髪','襟足長めのウルフ','ゆるいパーマヘア','高めのポニーテール','ハーフアップ','編み込みの入ったミディアム','前髪長めのショート','オールバック','外ハネのミディアム','くせ毛風のショート'],
  '目の形': ['切れ長の目','少したれ目','丸く大きな瞳','鋭いつり目','眠たげな半目','奥二重の涼しげな目元','伏し目がちな瞳','やさしいアーモンドアイ','左右で印象が違う目','まっすぐ見つめる瞳'],
  '表情': ['照れながら微笑む','いたずらっぽく片目を閉じる','自信たっぷりに笑う','驚いて目を丸くする','眠そうにあくびをする','不機嫌そうに頬をふくらませる','泣きそうなのをこらえる','真剣な表情で見つめる','ふっと寂しそうに笑う','何かを思い出して遠くを見る','歯を見せて快活に笑う','少し照れて視線をそらす'],
  '口元': ['口角がきゅっと上がった口元','八重歯が覗く笑顔','小さく結んだ口元','少し開いた口','への字のむくれ口','唇をかんだ口元','えくぼができる笑顔','無表情な薄い唇'],
  '眉': ['きりっと上がった眉','やわらかな困り眉','自然なアーチ眉','凛とした直線眉','太めの眉','細めで整った眉','少し下がった眉','前髪から覗く短い眉'],
  '雰囲気': ['放課後の風が似合う','静かな読書家のような','街角にいそうな自然体の','少しミステリアスな','舞台の上で輝くような','人懐っこい犬系の','近寄りがたい猫系の','透明感のある','陽だまりのように明るい','夜に溶け込むような'],
};

const orderedKeys = ['髪色','瞳の色','背景色','髪型','目の形','表情','口元','眉','雰囲気'];
const colorKeys = new Set(['髪色','瞳の色','背景色']);
let currentPrompt;

const $ = selector => document.querySelector(selector);
const pick = list => list[Math.floor(Math.random() * list.length)];
const isColor = value => typeof value === 'object';
const valueName = value => isColor(value) ? value.name : value;
const escapeHTML = value => String(value).replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[char]);
const promptId = traits => orderedKeys.map(key => valueName(traits[key])).join('|');
const formatDate = date => new Intl.DateTimeFormat('ja-JP', { month:'numeric', day:'numeric' }).format(date);

function readCollection(key) { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } }
function writeCollection(key, items) { localStorage.setItem(key, JSON.stringify(items)); }
function makePrompt() { return { traits: Object.fromEntries(orderedKeys.map(key => [key, pick(choices[key])])) }; }
function summaryOf(prompt) { const t = prompt.traits; return `${valueName(t['髪色'])} / ${valueName(t['髪型'])} / ${valueName(t['瞳の色'])} / 背景：${valueName(t['背景色'])}`; }
function recordFromCurrent() { return { id: promptId(currentPrompt.traits), traits: currentPrompt.traits, summary: summaryOf(currentPrompt), date: formatDate(new Date()) }; }

function renderCurrent(animate = true) {
  const t = key => valueName(currentPrompt.traits[key]);
  $('#prompt-copy').innerHTML = `<mark>${escapeHTML(t('髪色'))}</mark>の<mark>${escapeHTML(t('髪型'))}</mark>。<br><mark>${escapeHTML(t('瞳の色'))}</mark>の<mark>${escapeHTML(t('目の形'))}</mark>と、<mark>${escapeHTML(t('眉'))}</mark>。<br><mark>${escapeHTML(t('口元'))}</mark>で、<mark>${escapeHTML(t('表情'))}</mark>。<br>背景は<mark>${escapeHTML(t('背景色'))}</mark>。`;
  $('#trait-grid').innerHTML = orderedKeys.map(key => {
    const value = currentPrompt.traits[key];
    const style = isColor(value) ? `style="--swatch:${value.color};--swatch-ink:${value.ink}"` : '';
    return `<div class="trait ${isColor(value) ? 'trait--color' : ''}" ${style}><span class="trait-name">${isColor(value) ? '<i class="color-chip"></i>' : ''}${key}</span><b class="trait-value">${escapeHTML(valueName(value))}</b></div>`;
  }).join('');
  const card = $('#prompt-card'); card.classList.remove('pop'); if (animate) { void card.offsetWidth; card.classList.add('pop'); }
  syncActionButtons();
}

function syncActionButtons() {
  const id = promptId(currentPrompt.traits);
  const saved = readCollection(STORAGE.stock).some(item => item.id === id);
  const completed = readCollection(STORAGE.completed).some(item => item.id === id);
  const stockButton = $('#stock-prompt'); stockButton.dataset.saved = saved; stockButton.textContent = saved ? '☆ ストック済み' : '☆ ストックに入れる';
  const completeButton = $('#complete-prompt'); completeButton.dataset.completed = completed; completeButton.textContent = completed ? '✓ 消化済み' : '✓ 消化済みにする';
}

function renderCollection(type) {
  const isStock = type === 'stock'; const items = readCollection(STORAGE[type]);
  const list = $(`#${type}-list`); const emptyMessage = isStock ? 'あとで描きたいお題をストックできます' : 'まだ消化済みのお題はありません';
  list.innerHTML = items.length ? items.slice().reverse().map(item => `<li class="collection-item"><span class="collection-summary">${escapeHTML(item.summary)}</span><time class="collection-date">${item.date}</time>${isStock ? `<button class="collection-action" data-load="${escapeHTML(item.id)}" type="button">表示する</button>` : ''}<button class="collection-action collection-remove" data-remove="${escapeHTML(item.id)}" data-type="${type}" type="button">削除</button></li>`).join('') : `<li class="empty-state">${emptyMessage}</li>`;
}

function renderCollections() {
  const completed = readCollection(STORAGE.completed); const stock = readCollection(STORAGE.stock);
  $('#completed-count').textContent = completed.length; $('#stock-count').textContent = stock.length;
  renderCollection('stock'); renderCollection('completed'); syncActionButtons();
}

function addTo(type) {
  const items = readCollection(STORAGE[type]); const record = recordFromCurrent();
  if (!items.some(item => item.id === record.id)) { items.push(record); writeCollection(STORAGE[type], items); }
  if (type === 'completed') { writeCollection(STORAGE.stock, readCollection(STORAGE.stock).filter(item => item.id !== record.id)); }
  renderCollections();
}

function removeItem(type, id) { writeCollection(STORAGE[type], readCollection(STORAGE[type]).filter(item => item.id !== id)); renderCollections(); }
function clearCollection(type) { const message = type === 'stock' ? 'ストックをすべて消去しますか？' : '消化済みのお題をすべて消去しますか？'; if (confirm(message)) { localStorage.removeItem(STORAGE[type]); renderCollections(); } }
function loadStock(id) { const saved = readCollection(STORAGE.stock).find(item => item.id === id); if (saved) { currentPrompt = { traits: saved.traits }; renderCurrent(); window.scrollTo({ top:0, behavior:'smooth' }); } }

$('#new-prompt').addEventListener('click', () => { currentPrompt = makePrompt(); renderCurrent(); });
$('#change-colors').addEventListener('click', () => { colorKeys.forEach(key => { currentPrompt.traits[key] = pick(choices[key]); }); renderCurrent(); });
$('#stock-prompt').addEventListener('click', () => addTo('stock'));
$('#complete-prompt').addEventListener('click', () => addTo('completed'));
$('#clear-stock').addEventListener('click', () => clearCollection('stock'));
$('#clear-completed').addEventListener('click', () => clearCollection('completed'));
document.addEventListener('click', event => { const target = event.target.closest('button'); if (!target) return; if (target.dataset.load) loadStock(target.dataset.load); if (target.dataset.remove) removeItem(target.dataset.type, target.dataset.remove); });

const combinationCount = orderedKeys.reduce((total, key) => total * choices[key].length, 1);
$('#combination-count').textContent = combinationCount.toLocaleString('ja-JP');
currentPrompt = makePrompt(); renderCurrent(false); renderCollections();
