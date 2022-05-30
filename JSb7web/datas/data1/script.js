
//let d = new Date();

 //d = new Date(2020, 0, 1, 12, 30, 12);

 let d = new Date('2020-01-01 15:23:12')


console.log(d.toUTCString())

//-----

console.log(d.toDateString())

/* 

    ao criar um new date, ele estará pegando a data do computador

    utilizando a function ToDateString() no objeto Date, Faz com que diminua as informações em Date, ele diminui as informações do dia, hora e etc.

    Function toUTCString converte a hora para o horário da europa  o UTC retrocede 3h do fuso horário de brasilia.

    Function toString retorna o mesmo que o objeto Date sem alteração alguma.

    dentro da classe/objeto Date, é possível passar 7 parametros ou apenas 1. parâmetros: DATE(ANO, MÊS, DIA, HORAS, MINUTOS, SEGUNDOS, MILISEGUNDOS  )
    OBS: tudo no JS começa do 0, Ou seja: no parametro se tiver mês 1, ele não é jan, é fev. o mês começa a contar apartir do 0. Então 0 = jan.
    SOMENTE O MÊS FUNCIONA ASSIM NESSE PARÂMETRO.
    Outra forma de passar essas informações é com apenas um paramêtro onde será passado todas essas informações 
    da seguinte forma: let d = new Date('2020-01-01 15:42:01')

*/