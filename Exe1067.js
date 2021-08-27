var input = require('fs').readFileSync('./dev/stdin/test.txt', 'utf8');

let valor = parseInt(input)
let count = 1

while ((count % 2) === 1 && count <= valor) {
    console.log(count)
    count = count + 2
}