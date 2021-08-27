var input = require('fs').readFileSync('./dev/stdin/test.txt', 'utf8');
var lines = input.split('\r\n')

let valores = []
let count = 0
let qtdPar = 0
let qtdImpar = 0
let qtdPositivo = 0
let qtdNegativo = 0

while (count < 5) {
    valores.push(parseInt(lines.shift()))

    if ((valores[count] % 2) === 0) {
        qtdPar++
    } else {
        qtdInpar++
    }
    
    if (valores[count] > 0) {
        qtdPositivo++
    } else if (valores[count] < 0) {
        qtdNegativo++
    }

    count++
}

console.log(`${qtdPar} valor(es) par(es)`)
console.log(`${qtdImpar} valor(es) impar(es)`)
console.log(`${qtdPositivo} valor(es) positivo(s)`)
console.log(`${qtdNegativo} valor(es) negativo(s)`)