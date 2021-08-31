var input = require('fs').readFileSync('./dev/stdin/test.txt', 'utf8');
var lines = input.split('\r\n');

let qtdNumeros = parseInt(lines.shift())
let valores = []
let count = 0
let media = 0

while (count < qtdNumeros) {
    valores = lines.shift().split(' ')

    media = (((valores[0] * 2) + (valores[1] * 3) + (valores[2] * 5)) / 10).toFixed(1)
    console.log(media)

    valores = []
    count++
}

