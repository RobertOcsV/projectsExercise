let d = new Date();

d.setFullYear(2019);

d.setMonth(11); // <-- dezembro

d.setDate()

let novoValor = d;

console.log(novoValor);

/* 
    Dentro do método .setFullYear() podemos setar o ano, mês e dia, mas o recomendável é setar apenas o ano.

    Podemos fazer isso com todos os métodos de seleção da aula de data2.

    Para puxar o dia usamos o método setDate() 
    
    Se quisermos adicionar um dia -> d.setDate( d.setDate() + 1) E é poss

*/