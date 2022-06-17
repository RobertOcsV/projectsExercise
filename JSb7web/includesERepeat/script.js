//Funções includes e repeat

let lista = ['ovo', 'Café', 'macarrão'];

console.log( lista.includes('macarrão') )


//A função includes retorna true ou false, basicamente se tem na array, retorna true, se não tem é false.
//a forma antiga era com um indexof que retornava -1 ou 0, e colocava um if disso e mostrava se 
//achou ou não na lista
// agora com o includes apenas utilizamos a função include que retorna true ou false.

//Outro exemplo:

let doce = 'Morango'

console.log(doce.includes('Morango'))


//----

let nome = 'Robert'
console.log(nome.repeat(20))

//Com a função repeat podemos colocar com que façamos uma repetição do que desejarmos.
// funções boas para fazer testes