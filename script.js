let pessoas = [];
let btnSortear = document.getElementById("btnSortear");
let messageDiv = document.getElementById("message");

function carregarCSV() {
  fetch("sorteio.csv")
    .then((response) => response.text())
    .then((data) => {
      const lines = data.split("\n");
      pessoas = lines
        .map((line) => line.trim())
        .filter((line) => line.length > 0);
    })
    .catch((error) => {
      console.error("Erro ao carregar o CSV:", error);
    });
}

function sortear() {
  // Desabilitar o botão para evitar múltiplos cliques
  btnSortear.disabled = true;
  messageDiv.innerHTML = '<span class="loading">Sorteando</span>';

  // Após 5 segundos, sorteia uma pessoa aleatória
  setTimeout(() => {
    let sorteada = pessoas[Math.floor(Math.random() * pessoas.length)];
    messageDiv.innerHTML = `A pessoa sorteada é:<br><span>${sorteada}</span>`;
    confetti({
      particleCount: 300,
      spread: 200,
      origin: { y: 0.6 },
    });
    // O botão fica desabilitado até que a página seja recarregada
  }, 5000);
}

window.onload = carregarCSV;
