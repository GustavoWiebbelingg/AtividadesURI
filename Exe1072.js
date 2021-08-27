var input = require('fs').readFileSync('./dev/stdin/test.txt', 'utf8');
var lines = input.split('\r\n');

let qtdValores = parseInt(lines.shift())
let valores = []
let count = 0
let somaIn = 0
let somaOut = 0

while (count < qtdValores) {
    valores.push(parseInt(lines.shift()))

    if (valores[count] >= 10 && valores[count] <= 20) {
        somaIn++
    } else {
        somaOut++
    }
    count++
}

console.log(`${somaIn} in`)
console.log(`${somaOut} out`)