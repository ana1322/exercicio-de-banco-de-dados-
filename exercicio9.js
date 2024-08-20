//Funções Avançadas
/*Declare uma função multiplica que aceite dois parâmetros e retorne o produto deles.
Chame a função multiplica com os valores 7 e 8, e exiba o resultado no console.
Declare uma função quadrado que retorne o quadrado de um número.
Use a função map para aplicar a função quadrado em um array [1, 2, 3, 4, 5] e exiba o array resultante no console.*/

function multiplica(a, b){
    return a * b
}

var resultado = multiplica(7, 8)
console.log(resultado)

function qudrado(n){
    return n * n
}

var resultado2 = qudrado(8)
console.log(resultado2)

const numeros = [1, 2, 3, 4, 5]
const quadrados = numeros.map(qudrado)

console.log(quadrados)
console.log(numeros)
