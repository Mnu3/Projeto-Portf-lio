Manipulação do DOM e Eventos são dois dos conceitos mais importantes em Desenvolvimento Web, 
pois permitem que uma página responda às ações do usuário e altere seu conteúdo dinamicamente.

O que é DOM?
-É uma representação da página HTML em forma de árvore de objetos que o JavaScript consegue acessar e modificar.

A seguir no exemplo, manipulamos o DOM da seguinte forma:
Selecionando os elementos:
    let botao = document.getElementById("comprar");
    let mensagem = document.getElementById("mensagem");
Alterando o Texto:
    mensagem.innerText = "Compra realizada com sucesso!";
Alterando o estilo:
    mensagem.innerText = "Compra realizada com sucesso!";
Alterando o botão:
    botao.innerText = "Comprado";

O que é Evento?
Evento é qualquer ação que acontece na página e que o JavaScript consegue detectar para executar alguma tarefa.

Por exemplo, quando o usuário clica:
    botao.addEventListener("click", function())
A função é executada e uma mensagem é passada:
    mensagem.innerText = "✅ Compra realizada com sucesso!";
