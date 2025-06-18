window.addEventListener("load", function () {
  const fala = document.getElementById("balao-fala");
  const texto = document.getElementById("texto-fala");
  const inputNome = document.getElementById("input-nome");

  // Mostrar balão
  fala.classList.remove("escondido");
  texto.innerText = "Olá, eu sou a rocha de estimação.";

  // Esconde o campo de nome durante a fala inicial
  inputNome.classList.add("escondido");

  setTimeout(() => {
    texto.innerText = "Qual o seu nome?";
    inputNome.classList.remove("escondido");
  }, 3000);
});

function enviarNome() {
  const nome = document.getElementById("nome").value.trim();
  const texto = document.getElementById("texto-fala");
  const inputNome = document.getElementById("input-nome");

  if (nome) {
    texto.innerText = `Prazer em conhecer você, ${nome}!`;
    inputNome.classList.add("escondido");
    document.getElementById("rocking").src = "./img/rock_happy.png";
  } else {
    alert("Por favor, digite seu nome.");
  }
}
