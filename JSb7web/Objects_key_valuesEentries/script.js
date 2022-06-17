let lista = {
    nome:'Robert',
    cargo:'tecnico',
    vida:'socorro'
}
console.log(typeof lista)

//Tanto lista quanto array são considerados ou até mesmo SÃO objetos.
//ou seja, os objects key,value e entries vão funcionar tanto para array quanto para listas


let lista2 = ['ovo', 'feijao', 'alface', 'batata']
console.log( Object.keys(lista2));
//acima está mostrando os indices dessa array

 lista2 = ['ovo', 'feijao', 'alface', 'batata']
console.log( Object.values(lista2));
//Acima está mostrando os values, mas como os valores são os próprios nomes da array, irá mostrar normalmente.

lista2 = ['ovo', 'feijao', 'alface', 'batata']
console.log( Object.entries(lista2));
//ele cria uma array com dois atributos, onde o indice se torna um próprio atributo da array + o próprio item.

//-------------------
// agora com objetos:

let pessoa = {

    nome:'Robert',
    sobrenome:'Oliveira',
    idade:'65',
    cor_preferida:'todas'

}

console.log( Object.keys(pessoa));
console.log( Object.values(pessoa));
console.log( Object.entries(pessoa));