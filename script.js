window.addEventListener("load", function () {
  const fala = document.getElementById("balao-fala");
  const texto = document.getElementById("texto-fala");

  fala.classList.remove("escondido");
  texto.innerText = "Olá, eu sou a rocha de estimação.";

  setTimeout(() => {
    texto.innerText = "Qual o seu nome?";
    document.getElementById("input-nome").classList.remove("escondido");
  }, 3000);
});

function enviarNome() {
  const nome = document.getElementById("nome").value.trim();
  const texto = document.getElementById("texto-fala");

  if (nome) {
    texto.innerText = `Prazer em conhecer você, ${nome}!`;
    document.getElementById("input-nome").classList.add("escondido");
    document.getElementById("rocking").src = "./img/rock_happy.png";
  } else {
    alert("Por favor, digite seu nome.");
  }
}