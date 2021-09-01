var input = require('fs').readFileSync('./dev/stdin/test.txt', 'utf8');
var lines = input.split('\r\n')

let valor1 = parseInt(lines.shift())
let valor2 = parseInt(lines.shift())

if (valor1 < valor2) {
    valor1++
    while (valor1 < valor2) {
        

        if (valor1 % 5 == 2 || valor1 % 5 == 3) {
            console.log(valor1)
        }
        valor1++
    }

} else if (valor1 > valor2) {
    valor2++
    while (valor2 < valor1) {

        if (valor2 % 5 == 2 || valor2 % 5 == 3) {
            console.log(valor2)
        }
        valor2++
    }
}