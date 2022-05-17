let dia = 2;
let diaNome = "";
switch(dia){

    case 1:
        diaNome = 'Segunda-Feira';
        break;
    case 2:
        diaNome = 'Terça-feira';
        break;

    case 3:
        diaNome = 'Quarta-feira';
        break;

    case 4:
        diaNome = 'Quinta-feira';
        break;

    case 5:
        diaNome = 'Sexta-feira';
        break;

    case 6:
        diaNome = 'Sábado';
        break;

    case 7:
        diaNome = 'Domingo';
        break;    
    /*Caso nenhuma das condições sejam true, no switch temos o "default" que é como se fosse um else no if
    Exemplo:

     case 6:
        diaNome = 'Final de semana';
        break;

    case 7:
        diaNome = 'Final de semana';
        break;   
        ----- or -----
        case 6:
        case 7:
        diaNome = 'Final de semana';
        break;        

    default:
        diaNome = 'Dia de semana';
        break;
    */
    
}

document.getElementById('dia').innerHTML = "Hoje é: "+diaNome;