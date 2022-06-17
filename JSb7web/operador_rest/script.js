function adicionar(...numero){

    console.log(numero);

}

adicionar(5,5,6,7,8,9);
adicionar('lucas', 'Jorge', 'roberta','Lucas2');

/* 
    Rest serve para quando não sabemos quantas informações possam ser enviadas para o parâmetro

    Como receber todas as informações enviadas pelo usuário independente de quantos parâmetros temos?

    simplesmente adicionando o "..." (não é a mesma coisa que o spread porém se utiliza da mesma maneira.)

    Claro, ele não serve apenas para números, serve para outros valores também.

    

*/

//Agora, como juntar o spread com o rest?

function adicionar(nomes, ...novosNomes){

    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];

    return novoConjunto
}

let nomes = ['Robert', 'Lucas']

let outros = adicionar(nomes, 'julia', 'joao', 'gustavo')

console.log(outros)