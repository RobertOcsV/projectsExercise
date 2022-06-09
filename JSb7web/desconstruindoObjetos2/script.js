let pessoa = {

    sobrenome:'Oliveira',
    nome: 'Robert',
    idade: undefined,
    social:{
        facebook:'b7web',
        instagram:'Robert'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(pessoa.nomeCompleto())

// Processo de desconstrução//desustruturação de um objeto:

let {nome, sobrenome, idade = "não possui idade"} = pessoa;

console.log(nome, sobrenome, idade)

/*o código a cima é o mesmo que isso:
    let nome = pessoa.nome;
    let sobrenome = pessoa.sobrenome;
    let idade = pessoa.idade;

    --------
    Ao desconstruir um objeto cada atributo antes que contiam dentro desse objeto se tornam variaveis externas
    Que é possivel também alterar o nome delas ao ser desconstruido com o :
    exemplo: let {nome:meunome,sobrenome}
    agora a variavel que foi desconstruida terá o 'nome' da variavel de 'meunome'.

    Podemos também definir um valor padrão para as variaveis desconstruidas. 
    Caso a variavel não possua um dado, ela irá aparecer como undefined
    e caso queiramos que possua um dado padrão para SOMENTE quando não houver um dado nele, podemos 
    utilizar o "="
    exemplo:
    idade = ; 
    let {nome, idade} = pessoa;

*/

