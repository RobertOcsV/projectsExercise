let n = 10;

let res = n.toString() ;
console.log(res)

// ------------
n = 10.65049340
 res = n.toFixed(2);
 console.log(res)

// ------------
n = '25.9'
res = parseInt(n) + 5;
console.log(res)

// ------------
n = '25.2934423'
res = parseFloat(n).toFixed(2) + 5;
console.log(res)

console.log('texto')

/*



método .toString como o nome ja diz transforma um variavel com numero em string

Método .toFixed(n) com o parametro passado ele pega o tanto de casas após a virgula de um valor.

Método parseint(VAR) serve para transformar uma string em numero
mas ele não preserva o decimais.

Método parseFloat(VAR) serve para transformar uma string em numero 
e ele preserva os decimais.

outras opções de conversão:
+"10" // converte string para number
""+10 // conver numero para string
método number(var)

*/