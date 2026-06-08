Arrays e Objetos são estruturas muito utilizadas em JavaScript para organizar e armazenar dados de forma eficiente.

O que é um Objeto?

Um objeto é uma estrutura que permite armazenar várias informações relacionadas a um mesmo elemento através de propriedades.

No exemplo, foi criado um objeto para representar o produto vendido na loja:

const produto = {
    nome: "Casinha Cama para Gato Vertical",
    preco: 159.99
};


Nesse objeto, a propriedade nome armazena o nome do produto e a propriedade preco armazena seu valor.

O que é um Array?

Um array é uma estrutura utilizada para armazenar múltiplos valores em uma única variável.

No exemplo, foi criado um array para representar o carrinho de compras:

let carrinho = [];


Inicialmente o array está vazio, mas novos produtos podem ser adicionados durante a execução do programa.

Adicionando itens ao carrinho

Quando o usuário clica no botão "Adicionar ao Carrinho", o produto é inserido no array através do método push():


carrinho.push(produto);


Dessa forma, cada clique adiciona um novo item ao carrinho.

Contando os itens do carrinho

A propriedade length é utilizada para informar a quantidade de elementos armazenados no array:


carrinho.length


O resultado é exibido na página através da manipulação do DOM:


qtdCarrinho.innerText =
    "Itens no carrinho: " + carrinho.length;


Assim, o usuário consegue visualizar em tempo real quantos produtos foram adicionados ao carrinho.

Com a utilização de Objetos e Arrays foi possível criar uma estrutura simples de carrinho de compras, permitindo armazenar produtos e 
atualizar as informações exibidas na página de forma dinâmica.
