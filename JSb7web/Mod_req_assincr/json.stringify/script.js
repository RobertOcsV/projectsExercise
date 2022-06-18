//a função stringify é o contrário do parse, ou seja, transforma aquivos json em arquivos json string.


let jsonTeste = {

    jsonComponent: 'teste1',
    jsonTable: 'teste2',
    jsonEngine: 'teste3',
    jsonArray: ['1','2','3'],
    jsonObject: {
        cadeira: 2,
        luvas: 'true'
    }


}

console.log(JSON.stringify(jsonTeste))


