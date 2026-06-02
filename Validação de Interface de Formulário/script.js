let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let email = document.getElementById("email");
let cadastrar = document.getElementById("cadastrar");
let mensagem = document.getElementById("mensagem");

cadastrar.addEventListener("click", function() {

    if (
        nome.value.trim() === "" ||
        idade.value.trim() === "" ||
        email.value.trim() === ""
    ) {

        mensagem.innerText = "❌ Preencha todos os campos.";
        mensagem.style.color = "red";

    } else {

        mensagem.innerText =
            "✅ Cadastro realizado com sucesso! Bem-vindo(a), " +
            nome.value;

        mensagem.style.color = "green";
    }

});