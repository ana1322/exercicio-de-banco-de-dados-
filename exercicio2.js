var numStr = '123.45'
console.log(numStr)

var numero = parseFloat(numStr)
console.log(numero)

//arrendonde um numero para o inteiro mais proximo e exiba no console
var numeroInt = Math.round(numero)
console.log(numeroInt)

var numeroInt2 = parseInt(numero)
console.log(numeroInt2)

//converta o numero arrendondado para um string com 3 decimais e exiba
var stringDecimal = numeroInt.toFixed(3)
console.log(stringDecimal)

var verifica = isNaN(numStr)
console.log(verifica)