let lista = ['ovo', 'farinha', 'corante', 'massa'];

let res = lista.join('-');

console.log(res);

// -----------

 lista = ['ovo', 'farinha', 'corante', 'massa'];

 res = lista.indexOf('corante');

console.log(res);

//-----------

lista = ['ovo', 'farinha', 'corante', 'massa'];

lista.pop(); //remove o último

res = lista

console.log(res);

//-----------

lista = ['ovo', 'farinha', 'corante', 'massa'];
res = lista
lista.shift(); // remove o primeiro
console.log(res);

//-----------

lista = ['ovo', 'farinha', 'corante', 'massa'];
lista.push('prato');
res = lista
console.log(res);

//-----------

lista = ['ovo', 'farinha', 'corante', 'massa'];
lista[0] = 'ovos'
console.log(res);




/*

método .join() muda a separação entre os itens de uma array;

Método .indexOf() mostra a posição na array em que está a string passada no parametro

Método .pop() remove o último item da array.

Método shift() remove o primeiro item da array.

Método .push() adiciona um item na array

Uma outra forma de alterar o que há dentro de uma array é u tilizando a array[N]
assim é possivel escolher qual vc quer alterar e atribuit com o = "novo valor"
e se colocar umna posição que não existe ele irá adicionar um novo item na array
*/