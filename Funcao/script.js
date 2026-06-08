let botao = document.getElementById("comprar");
let mensagem = document.getElementById("mensagem");
let estoque = 15;
let Btnfavorito = document.getElementById("favorito");
let preco = document.getElementById("preco");
let botaoDesconto = document.getElementById("desconto");

function aplicarDesconto(valor, porcentagem) {
    return valor - (valor * porcentagem / 100);
}

botaoDesconto.addEventListener("click", function() {

    let novoPreco = aplicarDesconto(159.99, 10);

    preco.innerText = "Preço promocional: R$ " + novoPreco.toFixed(2);

    botaoDesconto.disabled = true;
});

botao.addEventListener("click", function() {

    estoque--;

    mensagem.innerText = "✅ Compra realizada com sucesso!";
    mensagem.style.color = "green";

    document.getElementById("estoque").innerText =
        "Estoque disponível: " + estoque + " unidades";

    botao.innerText = "Comprado";
    botao.disabled = true;
});

Btnfavorito.addEventListener("click", function() {

    if (Btnfavorito.innerText === "🤍 Favoritar") {
        Btnfavorito.innerText = "❤️ Favoritado";
    } else {
        Btnfavorito.innerText = "🤍 Favoritar";
    }

});