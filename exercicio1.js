var frase = "JavaScript é incrivel!"
console.log(frase)

//length
var comprimento = frase.length
console.log(comprimento)

// usando split para retornar a palavra incrivel
//dividir a frase em um array de palavras, separandos pelo espaço
var palavra = frase.split(' ')
console.log(palavra[2])

// usando match para encontrar a palavra incrivel
var resultado = frase.match(/incrivel/)
console.log(resultado[0])

//substituir a palavra incrivel pala palavra fantástico
var novaFrase = frase.replace('incrivel', 'fantástico')
console.log(novaFrase)
