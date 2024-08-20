var carro = {
    marca: "Volkwagen",
    modelo: "polo",
    ano: 2019,

    detalhes: function(){
        console.log(`marca: ${this.marca}, modelo: ${this.modelo}, ano: ${this.ano}`)
    }
}

carro.detalhes()

carro.cor = "cinza"
console.log(carro)