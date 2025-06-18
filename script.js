window.addEventListener("load", function () {
  alert("Olá, eu sou a rocha de estimação.");
});

function touchRock() {
    const userName = prompt("Qual o seu nome?", "Digite seu nome aqui.")

    if (userName) {
        alert("Prazer em conhecer você, " + userName + ".")
        document.getElementById("rocking").src = "./img/rock_happy.png"
    }
}