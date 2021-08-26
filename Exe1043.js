var input = require('fs').readFileSync('./Estudos.URI/dev/stdin/test.txt', 'utf8');
var lines = input.split(' ');

let a = parseFloat(lines.shift())
let b = parseFloat(lines.shift())
let c = parseFloat(lines.shift())

if ( (a + b) > c && (a + c) > b && (b + c) > a ) {
    console.log(`Perimetro = ${(a + b + c).toFixed(1)}`)
} else {
    console.log(`Area = ${(((a + b) * c) / 2).toFixed(1)}`)
}