let botao = document.getElementById("comprar");
let mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {

    mensagem.innerText = "✅ Compra realizada com sucesso!";

    mensagem.style.color = "green";

    botao.innerText = "Comprado";

    botao.disabled = true;
});
