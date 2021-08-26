var input = require('fs').readFileSync('./Estudos.URI/dev/stdin/test.txt', 'utf8');
var lines = input.split('\r\n')

let a = 0
let b = 0
let qtdPositivos = 0
let valores = []

while (a < 6) {
    valores.push(parseFloat(lines.shift()))
    a++
}

while (b < 6) {
    if (valores[b] > 0) {
        qtdPositivos++
    }
    b++
}

console.log(`${qtdPositivos} valores positivos`)