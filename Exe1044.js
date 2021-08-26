var input = require('fs').readFileSync('./Estudos.URI/dev/stdin/test.txt', 'utf8');
var lines = input.split(' ');

let a = parseInt(lines.shift())
let b = parseInt(lines.shift())


if (Math.max(a, b) % Math.min(a, b) === 0) {
    console.log('Sao Multiplos')
} else {
    console.log('Nao sao Multiplos')
}