//Quando recebemos um objeto promises, nós recebemos uma promessa que daqui alguma tempo teremos três opções:
/* 
Nunca o resultado, ou daqui algum tempo teremos o resultado, ou daqui um tempo eu vou 
ter um problema de retorno no rsultado.
*/
function pegarTemperatura() {
    return new Promise(function(resolve, reject){
        console.log('Pegando temperatura...');

        setTimeout(function(){
            resolve('40 na sombra'); //caso dê certo, usamos a function resolve, caso tenha dado errado usamos o reject
        },2000);

    });   
}

//USANDO A PROMISE:
console.log(pegarTemperatura)
 let temp = pegarTemperatura(); //temp irá pegar a function promise e se tornará uma promise.

 console.log(temp)

 //três status:
 //pending, finished ou reject.

 temp.then(function(resultado){
    console.log("TEMPERATURA: "+resultado)
 });
 temp.catch(function(error){
    console.log("Eita, deu erro!")
 });

 /*função then() basicamente está aguardando um resultado, ENTAO(then) quando o resultado chegar, 
    ENTAO executar
    Dentro dos parênteses.

    MAS e se der um problema?
    utilizamos o .catch()
 */
//Usando a promise 

/*
 Um exemplo da utilização de promises seria em consulta de dados, podemos retornar json através do resolvem 
 contendo o resultado desta busca.

 As promises são uma das coisas mais utilizadas no desenvolvimento moderno. Só que geralmente vocÊ não 
 vai crair uma promise, você vai receber ela de algum lugar.

 Por exemplo quando você fizer uma consulta no banco de dados no Node, sua lib de ORM provavelmente vai 
 te devolver uma promise.

 Quando você faz uma requisição HTTP (para poder consumir uma API por exemplo), o fetch vai te retornar uma promise
 Se você for usar o Node para ler um arquivo, você pode usar a versão com callbacks, mas também pode usar uma versão
 que te devolve uma promise. Toda vez que você for utilizar algo que pode produzir um valor de forma assíncrona
 muito provavelmente você vai acabar recebendo uma promise como retorno. A promise é o objeto que a gente usa para
 representar um valor assíncrono(ou seja e le pode nem existir ainda quando ela for declarada no código, e você nem
nem tem garantias 1ue ele vai existir em algum ponto no futuro), assim com,o quando a gente precisa representar
uma lista de coisas, geralmente a gente usa um array, quando a gente precisa representar um valor assíncrono
a gente usa uma promise.

Muito raramente você vai precisar usar o construtor da promise já que a adoção pela comunidade foi muito grande
então a maior parte das APIS da linguagem e das bibliotecas vão utilizas promises já, mas tem alguns casos onde
ainda pode ser útil utilizar o construtor da Promise, por exemplo, para converter o setTimout da sua versão
original em callback para uma versão em promise.


*/