
const themeBtn = document.getElementById("toggleTheme");
if (themeBtn) {
  const temaSalvo = localStorage.getItem("tema") || "claro";
  if (temaSalvo === "escuro") {
    document.body.classList.add("dark");
    themeBtn.textContent = "!";
  }
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const escuro = document.body.classList.contains("dark");
    themeBtn.textContent = escuro ? "!" : "!";
    localStorage.setItem("tema", escuro ? "escuro" : "claro");
  });
}


const form = document.getElementById("formCadastro");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const novoImovel = {
      id: Date.now(),
      proprietario: document.getElementById("proprietario").value,
      endereco: document.getElementById("endereco").value,
      cidade: document.getElementById("cidade").value,
      preco: parseFloat(document.getElementById("preco").value),
      tipo: document.getElementById("tipo").value,
      contrato: document.getElementById("contrato").value,
      foto: document.getElementById("foto").value || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      status: "disponível",
      descricao: "Imóvel confortável, bem localizado e com excelente custo-benefício."
    };

    const imoveis = JSON.parse(localStorage.getItem("imoveis") || "[]");
    imoveis.push(novoImovel);
    localStorage.setItem("imoveis", JSON.stringify(imoveis));

    alert("Imóvel cadastrado com sucesso!");
    window.location.href = "index.html";
  });
}


const listaImoveis = document.getElementById("listaImoveis");

function renderizarImoveis(imoveis) {
  if (!listaImoveis) return;

  if (imoveis.length === 0) {
    listaImoveis.innerHTML = "<p>Nenhum imóvel cadastrado ainda.</p>";
    return;
  }

  listaImoveis.innerHTML = imoveis.map(imovel => `
    <div class="card ${imovel.status !== 'disponível' ? imovel.status : ''}">
      <div class="status">${imovel.status.toUpperCase()}</div>
      <img src="${imovel.foto}" alt="${imovel.tipo}">
      <div class="info">
        <h3>${imovel.tipo} - ${imovel.cidade}</h3>
        <p>${imovel.endereco}</p>
        <p><strong>R$ ${imovel.preco.toLocaleString()}</strong></p>
        <div class="acoes">
          ${imovel.status === "disponível" ? `
            <button onclick="alugar(${imovel.id})" class="alugar">Alugar</button>
            <button onclick="comprar(${imovel.id})" class="comprar">Comprar</button>
          ` : ""}
          <button onclick="detalhes(${imovel.id})" class="detalhes">Ver Detalhes</button>
          <button onclick="excluir(${imovel.id})" class="excluir">Remover</button>
        </div>
      </div>
    </div>
  `).join("");
}

if (listaImoveis) {
  const imoveis = JSON.parse(localStorage.getItem("imoveis") || "[]");
  renderizarImoveis(imoveis);
}


function atualizarStatus(id, novoStatus) {
  const imoveis = JSON.parse(localStorage.getItem("imoveis") || "[]");
  const index = imoveis.findIndex(i => i.id === id);
  if (index >= 0) {
    imoveis[index].status = novoStatus;
    localStorage.setItem("imoveis", JSON.stringify(imoveis));
    renderizarImoveis(imoveis);
  }
}

function alugar(id) {
  atualizarStatus(id, "alugado");
  alert("Imóvel alugado com sucesso!");
}

function comprar(id) {
  atualizarStatus(id, "vendido");
  alert("Imóvel comprado com sucesso!");
}

function excluir(id) {
  if (confirm("Tem certeza que deseja remover este imóvel?")) {
    const imoveis = JSON.parse(localStorage.getItem("imoveis") || "[]").filter(i => i.id !== id);
    localStorage.setItem("imoveis", JSON.stringify(imoveis));
    renderizarImoveis(imoveis);
  }
}


function detalhes(id) {
  localStorage.setItem("detalheSelecionado", id);
  window.location.href = "detalhes.html";
}

const detalhesCard = document.getElementById("detalhesCard");
if (detalhesCard) {
  const imoveis = JSON.parse(localStorage.getItem("imoveis") || "[]");
  const id = parseInt(localStorage.getItem("detalheSelecionado"));
  const imovel = imoveis.find(i => i.id === id);

  if (imovel) {
    detalhesCard.innerHTML = `
      <img src="${imovel.foto}" alt="${imovel.tipo}">
      <div class="info-detalhes">
        <h1>${imovel.tipo} em ${imovel.cidade}</h1>
        <p class="local"><i class="fas fa-map-marker-alt"></i> ${imovel.endereco}</p>
        <p class="descricao">${imovel.descricao}</p>
        <div class="preco">
          <h2>R$ ${imovel.preco.toLocaleString()}</h2>
          <p>Status: <strong>${imovel.status.toUpperCase()}</strong></p>
        </div>
        <div class="acoes">
          ${imovel.status === "disponível" ? `
            <button class="btn-acao comprar" onclick="comprar(${imovel.id})">
              <i class="fas fa-cart-shopping"></i> Comprar
            </button>
            <button class="btn-acao alugar" onclick="alugar(${imovel.id})">
              <i class="fas fa-key"></i> Alugar
            </button>
          ` : ""}
          <button class="btn-acao excluir" onclick="excluir(${imovel.id})">
            <i class="fas fa-trash"></i> Remover
          </button>
        </div>
      </div>
    `;
  } else {
    detalhesCard.innerHTML = "<p>Imóvel não encontrado.</p>";
  }
}
