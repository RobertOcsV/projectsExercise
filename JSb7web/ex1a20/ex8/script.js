


function sidebar(){


 if(document.getElementById('menu-area').style.width === "0px"){   
    document.getElementById('menu-area').style.width="200px"
 }else{

    document.getElementById('menu-area').style.width="0px"

 }
   
}

/*
0Outra forma de fazer é utilizando o método contains que recebe um valor boolean de true ou false onde 
usa como paraâmetro se contém ou não aquilo que voc especificar, para que essa lógica funcione é necessário também criar uma nova classe para que ela seja usada para ser 
adicionada e removida, que no caso seria o "menu-area2" afetando apenas a largyra de 0px a 200px. exemplo:

function sidebad(){

let menuarea = document.getEelementById('menu-area);

if(menuarea.classList.contains('menu-area') == true){

    menuarea.classList.remove('menu-area');
}else{

    menuarea.classList.add('menuarea');
}

}
*/