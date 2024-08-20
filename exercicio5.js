var chave1 = Symbol('descricao')

var chave2 = Symbol('descricao')

var saoIguais = chave1 == chave2
console.log(saoIguais)
//false
//os simbolos sao completamente diferentes entre si

var usuario ={
    [chave1]: "123456"
}

console.log(usuario[chave1])
