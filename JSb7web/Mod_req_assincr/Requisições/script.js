// para fazermos um json, colocamos o nome do arquivo json e o valor dela:

let pessoa = {nome:"Robert", idade:90}

//Podemos também armazenar informações dentro de informações.

pessoa = {

    nome:'Robert',
    idade:90,
    caracteristicas: ['feliz', 'confiscado', 'qualquer coisa']
};

console.log(pessoa.caracteristicas[2])

//Podemos claramente ter um objeto dentro de outro objeto

casa = {

    proprietário:"Robert",
    sexo:"masculino",
    banco: {
        conta:1242,
        agencia:'fernando pessoa tautau'

    }

}

