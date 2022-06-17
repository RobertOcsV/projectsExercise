//Quando fazemos uma requisição, recebemos um json puro, em outros palavras é um texto, string que tem um json.

'{"nome":"Robert", "idade":90}' //Isso não é um json, é uma string apenas.

//o json EFETIVO em si não tem aspas, mas o json na teoria e em formato de string é o correto para ser válido em
//questão de sintaxe correta.

//Dentro do próprio navegador temos um json, e com eles podemos utilizar as funções para testes e afins.

//json.parse() a função parse dentro do parâmetro dela podemos passar uma string(que é a sintaxe correta) de um 
//json, ela vai pegar essa string de json e transformar em um json real.


let pessoa = JSON.parse('{"nome":"Robert", "idade":90}');

console.log(pessoa)