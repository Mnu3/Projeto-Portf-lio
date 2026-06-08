O que é Função?

Função é um bloco de código criado para executar uma tarefa específica. Ela pode ser reutilizada várias vezes no programa,
evitando a repetição de código e tornando a manutenção mais simples.

No exemplo, foi criada a função:

function aplicarDesconto(valor, porcentagem) {
    return valor - (valor * porcentagem / 100);
}

Essa função recebe dois parâmetros:

valor: preço original do produto.
porcentagem: percentual de desconto a ser aplicado.

A função realiza o cálculo do desconto e retorna o novo valor através do comando:

return valor - (valor * porcentagem / 100);

Quando o usuário clica no botão de desconto, a função é chamada:

let novoPreco = aplicarDesconto(159.99, 10);

Nesse caso, o desconto de 10% é aplicado ao valor de R$ 159,99 e o resultado é armazenado na variável novoPreco.

Após isso, o preço exibido na página é atualizado dinamicamente:

preco.innerText = "Preço promocional: R$ " + novoPreco.toFixed(2);

Dessa forma, o usuário consegue visualizar imediatamente o novo valor do produto após a aplicação do desconto.