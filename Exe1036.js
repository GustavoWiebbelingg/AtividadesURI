var input = require('fs').readFileSync('./Estudos.URI/dev/stdin/test.txt', 'utf8');
var lines = input.split(' ');

let a = parseFloat(lines.shift())
let b = parseFloat(lines.shift())
let c = parseFloat(lines.shift())

let delta = (b * b) - (4 * a * c)

if (delta > 0) {
    let r1 = (((- b + Math.sqrt(delta)) / (2 * a)) ).toFixed(5)
    let r2 = (((- b - Math.sqrt(delta)) / (2 * a)) ).toFixed(5)

    console.log('R1 =', r1 )
    console.log('R2 =', r2 )
} else {
    console.log('Impossivel calcular')
}