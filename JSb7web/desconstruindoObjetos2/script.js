let pessoa = {

    nome: 'Bonieky',
    sobrenome: 'Lacerda',
    idade:90,
    social:{
        facebook:'Robert',
        instagram:{
            url: '@Robertin',
            seguidores: 112
        }
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.idade}`;
    }
};

let {nome, idade, social:{instagram:rede}} = pessoa;

console.log(nome, idade, rede);

// como podemos consultar os atributos em que está dentro de um objeto que contém um objeto?
//podemos usar a lógica dos ":" porém junto de um {}
//exemplo:
/*

let { var1, var2, obj3:{var4}}
porém como estamos selecionando um atributo de um objeto que está dentro de outro objeto, o unico que será 
tornado em uma variável é o "var4" o obj3 se mantém em objeto e não vira variavel igual o var1 e var2.

agora iremos ver como usar functions com objetos:
*/

 function pegarNomeCompleto (obj){
     return `${obj.nome} ${obj.sobrenome}`
 }

 console.log(pegarNomeCompleto(pessoa))

 // o que está acontecendo no código acima?

//criamos uma function com um parametro de obj, dentro das chaves criamos o parametro.nome e parametro.sobrenome
//ao utilizar o console.log pegamos a função e passamos o objeto pessoa para que faça objeto pessoa.nome e obj pessoa.sobrenome.

//Outra forma de se fazer isso é:


// function pegarNomeCompleto(obj){
// let nome = obj.nome;
// let sobrenome = obj.sobrenome;
//
// return `${nome} ${sobrenome}`;
//
// }
//
// console.log(pegarNomeCompleto(pessoa))

/*
    uma forma mais simplificada ainda de se fazer isso:
*/

function pegarNomeCompleto({nome, sobrenome = 'Ruperto', social:{instagram:{url:instagram}}}){
    return `${nome} ${sobrenome} Siga em ${instagram}`
}
console.log(pegarNomeCompleto(pessoa))

/* No código acima no momento em que estamos passando os parâmetros de nome, sobrenome ele já está
sendo desconstruido, e dentro dele já podemos passar as funcionalidades anteriores como: ":" , "{}" ou "="

*/