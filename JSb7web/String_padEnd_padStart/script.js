//manipulações de String:

let telefone = '534343';

console.log(telefone.padEnd(9, '*' ) )

//acima mostra o padEnd que após a finalização da string, ele preenche a quantidade de valores passados 
//no parametro do padEnd, ele preenche se não estiver preenchido os N campos solicitados, como no exemplo está "9"
//"Essa string tem que ter No minimo a quantidade de caracteres passado no parâmetro do padEnd."

//Exemplo real:
let cartao = '1234123412341234';

let lastDigits = cartao.slice(-4)

let cartaoMascarado = lastDigits.padStart(16, '*')
console.log('Este é o seu cartão?'+cartaoMascarado)
//ao confirmar o cartão normalmente aparece um alerta do final do cartão como: esse é o cartão ? *****1234