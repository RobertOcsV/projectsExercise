let lista = [45, 4, 9, 16, 25];
let lista2 = [];


lista2 = lista.map(function(item){
    return item * 2;
} )
let res = lista2
console.log(res);

// outra forma de percorrer a lista inteira é:

for(let i in lista){
    lista2.push(lista[i] * 2);
}
 res = lista2



//---------

// function filter:


lista2 = lista.filter(function(item){
    return (item > 20)? true : false
  
})
 res = lista2;
console.log(res);

//--------- função every:


lista2 = lista.every(function(item){

    return (item > 3)? true : false // MESMA COISA QUE UM IF NORMAL POREM EM MENOS LINHAS

})
res = lista2;
console.log(res);

//--------- função some:


lista2 = lista.some(function(item){

    if(item > 50)
        return true;
    else
        return false;

})
res = lista2;
console.log(res);


// forma alternativa de realizar a validação boleeana:
/*return (item > 3)? true : false */

/* 

função map
    função map(mapear) espera que seja retornado dentro do parenteses uma ação que irá modificar CADA posição dentro da array.

função filter
    filter(); esta funciona de forma que irá retornar true ou false, em outras palavras se retornar false ele não aproveita o item da array
    e vice-versa. Ele filtra o que você deseja que apareça, uma das formas de fazer o filtro é dentro do parâmetro filter fazer uma function
    que sirva de validação booleana.

função every
    na função  every() também retorna true ou false, porém ela não gera uma nova array, ele irá validar se todos os itens dentro da array
    batem com a condição estabelecidade, o retorno sempre será sim ou não (boolean), o every fará uma validação de item por item (posição por posição)
    para fazer a validação

função some
    semelhante ao every, onde irá validar item por item da array e retorna true ou false, ao invés da validação valer se todos forem de acordo com 
    a condição estabelecida dentro da function de parametro do some, será apenas "alguns" se ao menos tiver UM item ou mais que cumpram a validação ela
    retornará true
*/


/* 
---------mapeamento------------
 lista2 = lista.map(function(item){
     return item * 2;
} )

  res = lista2

console.log(res);


outra forma é utlizando loop:

for(let i in lista){
    lista2.push(lista[i] * 2);
}
 res = lista2
*/