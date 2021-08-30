var input = require('fs').readFileSync('./dev/stdin/test.txt', 'utf8');

let valor = parseInt(input)
let count = 1

while (count <= 10) {
    console.log(`${count} x ${valor} = ${count * valor}`)
    count++
} 