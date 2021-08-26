var input = require('fs').readFileSync('./Estudos.URI/dev/stdin/test.txt', 'utf8');
var lines = input.split(' ');

let x = parseFloat(lines.shift())
let y = parseFloat(lines.shift())

if (x == 0 && y == 0) {
    console.log('Origem')
} else if (x == 0) {
    console.log('Eixo Y')
} else if (y == 0) {
    console.log('Eixo X')
} else if (x > 0 && y > 0) {
    console.log('Q1')
} else if (x > 0 && y < 0) {
    console.log('Q4')
} else if (x < 0 && y > 0) {
    console.log('Q2')
} else {
    console.log('Q3')
}