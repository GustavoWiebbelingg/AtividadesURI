var input = require('fs').readFileSync('./dev/stdin/test.txt', 'utf8');

let valor = parseInt(input)
let count = 0

while (count < 6) {
    if ((valor % 2) === 0) {
        valor++
    }
    console.log(valor)
    valor = valor + 2
    count++
}