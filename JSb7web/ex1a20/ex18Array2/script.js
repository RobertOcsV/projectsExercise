
// ----------1

let lista = ['ovo', 'farinha', 'corante', 'massa'];
let lista2 = ['Prato', 'Liquidificadoir', 'Forno']
delete lista[1];

let res = lista;

console.log(res);

// ----------2

 lista = ['ovo', 'farinha', 'corante', 'massa'];

 lista.splice(1,2)

 res = lista;

console.log(res);


// ----------3

lista = ['ovo', 'farinha', 'corante', 'massa'];

res = lista.concat(lista2)

console.log(res);


// ----------4

lista = ['ovo', 'farinha', 'corante', 'massa'];

res = lista.sort();

console.log(res);

lista = ['ovo', 'farinha', 'corante', 'massa'];

res = lista.sort();

console.log(res);


/*
1 utilizando o delete realmente remove o item da lista porem o slot/posição em que o item foi removido ainda se mantém;

2 Utilizando o splice(N,N) - escolhemos o index e até onde nós queremos que seja removido, que será apartir da posição
escolhida da esquerda pra direita. 
exemplo: array.splice(2,4) -> apartir da posição 2 da array remover os próximo 3 itens + a posição
escolhida inicialmente.

3 Uma forma de fazer a junção das arrays é utilizando o array1.concat(array2) e claro, guardar em uma variavel para poder mostrar no console.

4 método sort() ordena as strings de uma array na ordem alfabética
E para fazer alfabético ao contrário é só utilizar o método reverse()

*/


