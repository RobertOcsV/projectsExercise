//let info = [ 'Robert Oliveira', 'Robert', 'Oliveira', '@robertin'];

//let [ nomeCompleto, nome, sobrenome, instagram] = info;

//console.log(nomeCompleto, nome, sobrenome, instagram);

/*
    A desconstrução de uma array é feita na ordem em que as propriedades estão colocadas, segue
    exemplo:
*/

// let [ a ] = info;
// console.log(a)
// ele está pegando apenas o indexoff 0 que é o nome e sobrenome


// agora se queremos pegar index especificos como o 0 e o 3 que é o nome e instagram:
// let [nomeCompleto, , ,instagram ] = info
// console.log(nomeCompleto, instagram)
//Como mostra acima é só deixar os espaços em vazio.


//Uma outra forma ainda é que podemos fazer a desconstrução ao mesmo tempo em que a array é criada:
// Lembrando que também aqui é possivel utilizar as expressões ":", "=" ou "{}"
let [nome, sobrenome] = ['Robert', 'Oliveira'];

console.log(nome, sobrenome)

//é possivel também gerar uma array e fazer a desconstrução por uma function:

// function criar(){

//         let a = [1,2,3];
//         return a;

// }

// let numeros = criar();

// let [a,b,c] = numeros;

// console.log(a,b,c);

// ou para DIMINUIR mais ainda o código:

function criar(){
    return [1,2,3];
}

let [a,b,c] = criar()
console.log(a,b,c)

// O que está acontecendo no código acima?
/*
Linha 46 - Criamos a function e que irá retornar uma array
Linha 50 - Estamos desconstruindo uma array e ao invés de relacionarmos a function criar em uma variável, colocamos
diretamente a function logo em seguida da desconstrução da array, ou seja, desconstrói e gera uma nova array 
Linha 51 - imprime as novas variáveis geradas pela function

O mesmo vale para objetos, podemos fazer a desconstrução e já chamar a function.
*/

