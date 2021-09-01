var input = require('fs').readFileSync('./dev/stdin/test.txt', 'utf8');
var lines = input.split('\r\n')

let valor1 = parseInt(lines.shift())
let valor2 = parseInt(lines.shift())
let sum = 0

function somaMultiplos(x, y) {
    let menorValor = x
    let maiorValor = y
    let soma = 0

    while (x <= y) {

        if (x % 13 != 0) {
            soma = soma + x
        }
        x++
    }
    return (soma)
}

if (valor1 < valor2){
    sum = somaMultiplos(valor1, valor2)
} else if (valor2 < valor1) {
    sum = somaMultiplos(valor2, valor1)
} else {
    sum = 0
}

console.log(sum)

