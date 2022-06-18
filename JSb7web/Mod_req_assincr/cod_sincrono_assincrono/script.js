//o que é código sincrono 
/*
    Ele vai executando de linha a linha
    Execução padrão do javascript
*/

//o que é código Assíncrono
/*
    o contrário do síncrono, ele não espera com que a linha seja executada e finalizada para começar a ler as linhas
    de código seguinte, outro exemplo é uma linha entrar em execução e já ir para a próxima enquanto a linha anterior
    continua a ser executada.
    
    exemplo:

*/

let nome = 'Robert' //síncrona
let sobrenome = 'Oli'//síncrona
let temperatura = Maquina.pegarTemperatura(); //Assíncrona
let completo = nome+" "+sobrenome;//síncrona

//por que disso? simples, toda requisição interna, funciona de forma assíncrona.