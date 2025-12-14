/* ===================== */
/* 📋 CARDÁPIO */
/* ===================== */
const numeroWhatsApp = "5581995292652";

let listaPedidos = [] // Array para armazenar os pedidos selecionados

const itens = [
 {
 nome: "Pudim",
 sabor: "Tradicional",
 descricao: "Pudim cremoso com calda de caramelo.",
 imagem: "https://s2-receitas.glbimg.com/115DQucrWsNOUxf_ncmMUisprZI=/0x0:1080x819/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/w/a/cB6VP5QoOByFKEuCleIQ/jonreceitas-109758346-416338779271002-5424220606850697813-n.jpg"
 },
 {
 nome: "Torta Salgada",
 sabor: "Camarão | Bacalhau | Frango",
 descricao: "Massa leve e recheio generoso.",
 imagem: "https://www.receiteria.com.br/wp-content/uploads/torta-salgada-de-frango-capa.jpg"
 },
 {
 nome: "Bolo de Prestígio",
 sabor: "Prestígio / Chocolate",
 descricao: "Bolo de chocolate com coco e recheio cremoso.",
 imagem: "https://espaconatelie.com.br/wp-content/uploads/2025/04/como-fazer-bolo-prestigio.jpg"
 },
 {
 nome: "Escondidinho",
 sabor: "Carne / Frango",
 descricao: "Escondidinho muito saboroso e recheado.",
 imagem: "https://www.tendaatacado.com.br/dicas/wp-content/uploads/2022/03/escondidinho-de-frango-interna.jpg"
 },
 {
 nome: "Lasanha",
 sabor: "Carne / Frango",
 descricao: "Lasanha deliciosa e muito saborosa.",
 imagem: "https://s2-receitas.glbimg.com/BI9J-YruUekYVoV_bcoUzt1QUz0=/0x0:1400x814/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/N/u/OZzSPKS96MIg38g58rrQ/g1-lasanha-capa.jpg"
 },
 {
 nome: "Bolo de Noiva",
 sabor: "",
 descricao: "Um delicioso e saboroso bolo de noiva",
 imagem: "https://internovias.com.br/wp-content/uploads/2025/05/Imagem-do-WhatsApp-de-2025-05-13-as-07.59.39_67973053.jpg"
 }
];

const cardapio = document.getElementById("cardapio");

itens.forEach((item, index) => {
const card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<img src="${item.imagem}">
<div>
<h2>${item.nome}</h2>
<strong>${item.sabor}</strong>
<p>${item.descricao}</p>
<div class="card-footer">
<button class="adicionar-btn" data-index="${index}">
Adicionar à Lista
</button>
<span id="contador-${index}" style="color: #ffdf00; font-weight: bold;"></span>
</div>
</div>
`;

cardapio.appendChild(card);
});


// FUNÇÃO PRINCIPAL: Adicionar item ao carrinho
function adicionarItem(index) {
const itemExistente = listaPedidos.find(p => p.index === index);
if (itemExistente) {
itemExistente.quantidade += 1;
} else {
listaPedidos.push({
index: index,
nome: itens[index].nome,
sabor: itens[index].sabor,
quantidade: 1
});
}

atualizarContador(index);
atualizarLinkWhatsApp();
}


// Atualiza a quantidade ao lado do botão
function atualizarContador(index) {
const item = listaPedidos.find(p => p.index === index);
const contadorElement = document.getElementById(`contador-${index}`);

if (item && item.quantidade > 0) {
contadorElement.textContent = `(${item.quantidade}x na lista)`;
} else {
contadorElement.textContent = '';
}
}


// Monta a mensagem final e atualiza o link do WhatsApp
function atualizarLinkWhatsApp() {
let mensagem = `Olá! Gostaria de fazer um pedido do Cardápio de Natal 🎄\n\n`;

if (listaPedidos.length === 0) {
mensagem += `Ainda não selecionei os itens, mas gostaria de informações!`;
} else {
mensagem += `Meus itens selecionados são:\n`;

listaPedidos.forEach(item => {
// Limpando o sabor para a mensagem ficar mais curta, se for muito longa
const saborCurto = item.sabor.split('|')[0].trim(); 
mensagem += `* ${item.quantidade}x ${item.nome} (${saborCurto})\n`;
});

mensagem += `\n*Gostaria de saber os valores e combinar a entrega.*`;
}

// Codifica a mensagem para URL
const mensagemCodificada = encodeURIComponent(mensagem);

document.getElementById("whatsappLink").href =
`https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
}


// Listener para todos os botões "Adicionar"
document.querySelectorAll('.adicionar-btn').forEach(button => {
button.addEventListener('click', (event) => {
const index = parseInt(event.currentTarget.getAttribute('data-index'));
adicionarItem(index);
});
});

// Inicializa o link do WhatsApp na primeira carga
window.addEventListener('load', atualizarLinkWhatsApp);

/* ===================== */
/* ❄️ NEVE SUAVE */
/* ===================== */
const neve = document.getElementById("neve");

function criarFloco() {
 const floco = document.createElement("div");
 floco.classList.add("floco");

 const tamanho = Math.random() * 4 + 2;
 floco.style.width = tamanho + "px";
 floco.style.height = tamanho + "px";
 floco.style.left = Math.random() * window.innerWidth + "px";
 floco.style.opacity = Math.random();
 floco.style.animationDuration = Math.random() * 5 + 6 + "s";

 neve.appendChild(floco);

 floco.animate(
 [{ transform: "translateY(0)" }, { transform: "translateY(110vh)" }],
 { duration: 10000, easing: "linear" }
 );

 setTimeout(() => floco.remove(), 10000);
}

setInterval(criarFloco, 200);

// Notificação

window.addEventListener("load", () => {
 setTimeout(() => {
 document.getElementById("notificacao").classList.add("mostrar");
 }, 800);
});

function fecharNotificacao() {
 document.getElementById("notificacao").classList.remove("mostrar");
}

function criarEstrela() {
  const container = document.querySelector(".estrelas-flutuantes");
  if (!container) return;

  const estrela = document.createElement("div");
  estrela.classList.add("estrela");

  if (Math.random() < 0.2) {
    estrela.classList.add("girar");
  }

  estrela.style.left = Math.random() * 80 + 10 + "%";

  const tamanho = Math.random() * 6 + 6;
  estrela.style.width = tamanho + "px";
  estrela.style.height = tamanho + "px";

  container.appendChild(estrela);

  setTimeout(() => estrela.remove(), 4000);
}

setInterval(criarEstrela, 600);

// estrelas

// Criar estrela no ponto do toque
function criarEstrelaToque(x, y) {
  const arvore = document.querySelector(".arvore");
  const container = document.querySelector(".estrelas-flutuantes");

  if (!arvore || !container) return;

  // Posição relativa ao contêiner da árvore
  const rect = arvore.getBoundingClientRect();
  const posX = x - rect.left;
  const posY = y - rect.top;

  const estrela = document.createElement("div");
  estrela.classList.add("estrela");

  // 20% das estrelas giram
  if (Math.random() < 0.2) {
    estrela.classList.add("girar");
  }

  // Define posição exata do toque
  estrela.style.left = posX + "px";
  estrela.style.top = posY + "px";

  // Tamanho aleatório
  const tamanho = Math.random() * 6 + 6;
  estrela.style.width = tamanho + "px";
  estrela.style.height = tamanho + "px";

  container.appendChild(estrela);

  // Remover após animação
  setTimeout(() => estrela.remove(), 4000);
}

// Evento de clique no desktop
document.querySelector(".arvore").addEventListener("click", (e) => {
  criarEstrelaToque(e.clientX, e.clientY);
});

// Evento de toque no mobile
document.querySelector(".arvore").addEventListener("touchstart", (e) => {
  const toque = e.touches[0];
  criarEstrelaToque(toque.clientX, toque.clientY);
});

// mais pedido

function adicionarItem(index) {
  const itemExistente = listaPedidos.find(p => p.index === index);
  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    listaPedidos.push({
      index: index,
      nome: itens[index].nome,
      sabor: itens[index].sabor,
      quantidade: 1
    });
  }

  atualizarContador(index);
  atualizarLinkWhatsApp();
  atualizarMaisPedido(); // ⭐ AQUI
}

function atualizarMaisPedido() {
  if (listaPedidos.length === 0) return;

  // Encontrar o item com maior quantidade
  let maisPedido = listaPedidos.reduce((a, b) =>
    (a.quantidade > b.quantidade ? a : b)
  );

  // Remover destaque de todos os cards
  document.querySelectorAll(".card").forEach(card => {
    card.classList.remove("mais-pedido");
  });

  // Adicionar destaque ao card mais pedido
  const card = document.querySelectorAll(".card")[maisPedido.index];
  if (card) {
    card.classList.add("mais-pedido");
  }
}


