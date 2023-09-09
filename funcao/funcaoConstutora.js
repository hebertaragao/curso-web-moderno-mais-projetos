function Carro (velociadeMaxima = 200 , delta = 5){
    // atributo provado
    let velocidadeAtual = 0

    // método publico
    this.acelerar = function(){
        if(velocidadeAtual  + delta <= velociadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velociadeMaxima
        }
    }

    // método publico
    this.getVelcidadeAtua = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelcidadeAtua())
const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelcidadeAtua())

console.log(typeof Carro)
console.log(typeof ferrari)