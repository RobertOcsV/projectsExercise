// let d = new Date(); -- Outra forma de fazer isso é com o método .now como abaixo:


let novoValor = Date.now();

novoValor = d.getFullYear();

novoValor = d.getMonth();

novoValor = d.getDay();

novoValor = d.getDate();

novoValor = d.getHours();

novoValor = d.getMinutes();

novoValor = d.getSeconds();

novoValor = d.getMilliseconds();


console.log( novoValor );


/*
    --- Como pegar informações especificas da var "d" que possui a class com as infos de data ---

    let var1 = var2.getFullYear(); <-- Vai puxar somente o ano da var1 e botar na var2

    let var1 = var2.getMonth() <-- Vai puxar somente o mês  da var1 e botar na var2

    let var1 = var2.getDay() <--  Pega o dia da semana, que vai de 0 a 6 - 0 a partir de domingo.

    let var1 = var2.getDate() <-- Vai puxar somente o dia do mês da var1 e botar na var2

    let var1 = var2.getDate() <-- Vai puxar somente as horas do dia da var1 e botar na var2

    let var1 = var2.getDate() <-- Vai puxar somente os minutos do dia da var1 e botar na var2

     let var1 = var2.getDate() <-- Vai puxar somente os segundos do dia da var1 e botar na var2

      let var1 = var2.getDate() <-- Vai puxar somente os Milisegundos do dia da var1 e botar na var2

*/