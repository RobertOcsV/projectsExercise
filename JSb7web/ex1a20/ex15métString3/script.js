let nome = 'este texto possui um nome';
let resultado = nome.split('e');

console.log(resultado);

/*


Método .split() é um método onde remove  textos ou caracteres desejado passado no parametro e 
após identificar o texto ou caracter removido ou espaço, é criado uma array com todos os itens sem o parametro passado. 
------

Método charAt() pode-se consultar oque contém de caracter na posição desejada pelo parametro 

Porém uma forma MELHOR é pegar a variavel e colocar um [n], exemplo:

nome[3] // reseultado = x



--------
Com o método .trim é possível retirar os espaços digitados desnecessáriamente

com o método .concat é possível concatenar um texto dentro de uma var 
os parametros nesse método são infinitos.
----------
  métodos toLowerCase()
  e
  toUpperCase()

método replace substitui um texto com o parametro X e Y:

let nome = 'este texto possui o nome: robert';
let resultado = nome.replace("este", "com este");

console.log(resultado);

*/