var input = require('fs').readFileSync('./dev/stdin/test.txt', 'utf8');
var lines = input.split('\r\n')

let valores = []
let count = 0
let x = 0
let y = 0
somaValores = 0
somaPositivos = 0

while (x < 6) {
    valores.push(parseFloat(lines.shift()))
    x++
}

while (y < 6) {
    if (valores[y] > 0) {
        somaPositivos++
        somaValores = somaValores + valores[y]
        count++
    }  
    y++
}

console.log(`${somaPositivos} valores positivos`)
console.log((somaValores / count).toFixed(1))