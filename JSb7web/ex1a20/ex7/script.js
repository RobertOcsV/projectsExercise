

/* objeto*/ 
let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado: false,
    ligar:function(){
        this.ligado = true;
        console.log("carro ligando")
    },

    acelerar:function(){
        if(this.ligado == true ){
        console.log("carro acelerando")
        }else{
            console.log(this.nome+" "+ this.modelo+" não está desligado")

        }
 }
};


carro.acelerar();
carro.ligar();
carro.acelerar();