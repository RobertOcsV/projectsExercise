let lista = [45, 4, 9, 16, 25];
let lista2 = [];


lista2 = lista.find(function(item){

    return (item == 16)? true: false

})

let res = lista2;

console.log(res)

//---------


/* 

função find
    Ela faz uma busca especifica na lista percorrendo todos os itens da array, para saber se o item colocado no parametro de function 
    contém dentro da arary, o resultado será o valor escolhido que retornara o item da lista em true ou false.

     parâmetro do find é: (item, index, array)

função findIndex ao invés de retornar o valor da posição escolhida, ele retorna o a posição do item desejado.


*/