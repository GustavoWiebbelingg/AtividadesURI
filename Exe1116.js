var input = require('fs').readFileSync('./dev/stdin/test.txt', 'utf8');
var lines = input.split('\r\n')

let qtdValores = parseInt(lines.shift())
let count = 0
let valores = []

while (count < qtdValores) {
    valores = lines.shift().split(' ')

    if (valores[1] == 0) {
        console.log('divisao impossivel')
    } else {
        console.log((valores[0] / valores[1]).toFixed(1))
    }

    count++
}

