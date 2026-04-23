const DB_PRODUTOS = 'estoque_produtos';
const DB_MOVIM    = 'estoque_movimentacoes';

function getProdutos() {
  const raw = localStorage.getItem(DB_PRODUTOS);
  if (raw) return JSON.parse(raw);
  const seed = [
    { id: 1, nome: 'Caneta Esferográfica', descricao: 'Caneta azul ponta fina', preco: 2.50, quantidade: 150, estoque_min: 20 },
    { id: 2, nome: 'Caderno Universitário', descricao: 'Caderno 200 folhas capa dura', preco: 25.90, quantidade: 80, estoque_min: 10 },
    { id: 3, nome: 'Borracha Branca', descricao: 'Borracha macia escolar', preco: 1.50, quantidade: 200, estoque_min: 30 },
    { id: 5, nome: 'Mochila Escolar', descricao: 'Mochila resistente 30L', preco: 89.90, quantidade: 15, estoque_min: 5 },
    { id: 6, nome: 'Notebook', descricao: 'Equipamento novo', preco: 500.00, quantidade: 4, estoque_min: 5 },
  ];
  saveProdutos(seed);
  return seed;
}

function saveProdutos(lista) {
  localStorage.setItem(DB_PRODUTOS, JSON.stringify(lista));
}

function getMovimentacoes() {
  const raw = localStorage.getItem(DB_MOVIM);
  if (raw) return JSON.parse(raw);
  const seed = [
    { id: 1, produto_id: 1, produto_nome: 'Caneta Esferográfica', tipo: 'Entrada', quantidade: 100, data: '2026-03-01' },
    { id: 2, produto_id: 2, produto_nome: 'Caderno Universitário', tipo: 'Entrada', quantidade: 50, data: '2026-03-05' },
    { id: 3, produto_id: 3, produto_nome: 'Borracha Branca', tipo: 'Saída', quantidade: 20, data: '2026-03-10' },
    { id: 4, produto_id: 5, produto_nome: 'Mochila Escolar', tipo: 'Saída', quantidade: 3, data: '2026-03-20' },
    { id: 5, produto_id: 6, produto_nome: 'Notebook', tipo: 'Entrada', quantidade: 5, data: '2026-04-05' },
    { id: 6, produto_id: 6, produto_nome: 'Notebook', tipo: 'Saída', quantidade: 11, data: '2026-04-05' },
  ];
  saveMovimentacoes(seed);
  return seed;
}

function saveMovimentacoes(lista) {
  localStorage.setItem(DB_MOVIM, JSON.stringify(lista));
}

function nextId(lista) {
  if (!lista.length) return 1;
  return Math.max(...lista.map(i => i.id)) + 1;
}

function verificarSessao() {
  const u = sessionStorage.getItem('usuario');
  if (!u) { window.location.href = 'login.html'; return null; }
  return JSON.parse(u);
}

function formatarData(str) {
  if (!str) return '';
  const [y, m, d] = str.split('-');
  return `${d}/${m}/${y}`;
}

function formatarMoeda(v) {
  return Number(v).toFixed(2).replace('.', ',');
}