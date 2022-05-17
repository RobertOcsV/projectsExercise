

function vermelho(){
    trocarCor()
    document.getElementById('texto').classList.add('vermelho');

}

function verde(){
    trocarCor()
    document.getElementById('texto').classList.add('verde');
}

function azul(){
    trocarCor()
    document.getElementById('texto').classList.add('azul');
}

function trocarCor(){
    document.getElementById('texto').classList.remove('vermelho');
    document.getElementById('texto').classList.remove('azul');
    document.getElementById('texto').classList.remove('verde');

}

function showTell(elemento){

    elemento.style.display="none";
    document.getElementById('tel').style.display="block"

}