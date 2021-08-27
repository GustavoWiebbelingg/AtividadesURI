var input = require('fs').readFileSync('./dev/stdin/test.txt', 'utf8');

let valor = parseInt(input)
let count = 2

while (count <= valor) {
    if (valor % 2 == 0) {
        console.log(`${count}^2 = ${Math.pow(count, 2)}`)
        count = count + 2
    } else {
        valor--
    }

}
