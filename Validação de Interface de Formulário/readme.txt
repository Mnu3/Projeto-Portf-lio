Validação de Interface de Formulário

O que é?
-É verificar se os dados digitados pelo usuário estão corretos antes de enviá-los.
O objetivo é evitar erros, melhorar a experiência do usuário e garantir que o sistema receba informações válidas.

No codigo a verificação ocorre com uma logica simples, utilizando if:
if (
    nome.value.trim() === "" ||
    idade.value.trim() === "" ||
    email.value.trim() === ""
)

O que significa cada parte?
nome.value

Pega o valor digitado no campo nome.

Então se o usuário digita: Manuela. Então nome.value passa a valer "Manuela"
Se o usuário tentar digitar "", a função trim(), remove espaços em branco do início e do fim e 
isso evita que alguém "preencha" o campo apenas com espaços.

=== ""

Verifica se o valor está vazio e retorna true (Campo vazio) ou false(Campo preenchido). E o mesmo é aplicado para os outros campos.

else {

    mensagem.innerText =
    "✅ Cadastro realizado com sucesso!";

}

Caso o if seja falso, o codigo vai executar o else, monstrando uma mensagem de sucesso.