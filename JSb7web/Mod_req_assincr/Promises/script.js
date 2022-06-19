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