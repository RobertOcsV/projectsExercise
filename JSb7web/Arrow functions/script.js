

let letrasNoNome = (nome) => nome.length;

console.log(letrasNoNome('Robert'))


/*
Formas de criar function:

1 - somente a function
function somar(x, y) {
    return x + y;
}

2- Definir uma variável 
let somar = function(x, y){
    return x + y;
}

3 - arrow function
o que são arrow functions?

let somar = (x, y) => {
    return x, y
}

NÃO é obrigatório abrir chaves.
---
Outras opções com arrow function:
Se não colocarmos as chaves, podemos simplesmente colocar oque desejamos que seja retornado:

let somar = (x, y ) => x,y;

---
Uma outra variação de arrow function que só funciona com UM parametro:

let letrasNoNome = (nome) => {
    return nome.length;
}
--- diminuindo ainda mais o código acima utilizando o padrão de encurtamento sem o return:

let letrasNoNome = (nome) => nome.length;
console.log(letrasNoNome('Robert'))

--- forma de encurtar ainda mais a function:

let letrasNoNome = nome => nome.lenght //não há necessidade de parenteses

--- agora se não tem nenhum parâmetro, é necessário colocar o parenteses:

let letrasNoNome = () => nome.lenght

A maior diferença entre uma function padrão e uma arrow function ou function anônima é que nas função anônima
não utilizamos o this. que diz respeito ao item anterior.

E que se estivermos precisando utilizar o this. o ideal é que utilizemos a function normal.

*/