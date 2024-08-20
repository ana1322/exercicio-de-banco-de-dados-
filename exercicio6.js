/* bigInt*/
var grandeNumero1 = BigInt("123456789123456789123456789")
var grandeNumero2 = BigInt("987654321098765432109876543210")

var soma = grandeNumero1 + grandeNumero2
var subtracao = grandeNumero1 - grandeNumero2
var multiplicacao = grandeNumero1 * grandeNumero2
var divisao = grandeNumero1 / grandeNumero2

console.log(soma,"\n", subtracao,"\n", multiplicacao,"\n", divisao)

var maior = grandeNumero1 > grandeNumero2
console.log(maior)