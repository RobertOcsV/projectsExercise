let numero = [1, 2, 3, 4];

let outros = [...numero, 5, 6, 7, 8];

/*uma forma de criar uma array de numero, e depois implementar novos itens nele é criar uma variável 
que com a function push de empurrar novos itens implemente na variavel numeros

Porém é possivel criar isso com o spread operator usamos quando queremos complementar uma nova array
com valores de outra array.

*/
console.log(outros)

let info = {

    nome:'Robert',
    Sobrenome:'Oliveira',
    idade:28
};

let novaInfo =  {
    ...info,
    cidade:'Jardins'

}

console.log(novaInfo)


function adicionarInfo(info){

    let novasInfo={
        ...info,
        status:0,
        token:'sjadidasjida',
        data_cadastro:'....'

    };
    return novasInfo

}

console.log(adicionarInfo({nome:'Robert', sobrenome:'Oliveira'}))