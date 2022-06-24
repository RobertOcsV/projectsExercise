async function loadPosts(){

    document.getElementById('posts').innerHTML = "carregando...."

    let req = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await req.json();
    montarBlog(json)
    
    // fetch('https://jsonplaceholder.typicode.com/posts',)
    //     .then(function(resultado){
    //         return resultado.json();

    //     })
    //     .then(function(json){
    //         montarBlog(json) ;           
    //     })
    //     .catch(function(error){
    //         console.log("Deu problema")

    //     })
    
}


function montarBlog(lista){
    let html = '';

    for(let i = 0; i <lista.length; i++){
        html += '<h3>'+ lista[i].title +'</h3>';
        html += lista[i].body+'<br/>';
        html += '<hr/>';
    }// podemos usar também o array in -> let i in lista

    document.getElementById('posts').innerHTML = html;
}

