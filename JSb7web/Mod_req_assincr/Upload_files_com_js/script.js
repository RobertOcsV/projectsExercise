async function enviar(){

    let arquivo = document.getElementById('arquivos').files[0];
    let body = new FormData();
    body.append('title', "teste");
    body.append('arquivo', arquivos);

    let req = await fetch('https://www.meusite.com.br', {

        method: 'POST',
        body: body,
        headers:{
            'Content-Type':'multipart/form-data'
        }

    });
        
}