var input = require('fs').readFileSync('./dev/stdin/test.txt', 'utf8');
var lines = input.split('\r\n');

let valores = []
let qtdNumeros = parseInt(lines.shift())
let count = 0

while (count < qtdNumeros) {
    valores.push(parseInt(lines.shift()))

    if (valores[count] === 0) {
        console.log('NULL')

    } else if (valores[count] % 2 === 0 && valores[count] > 0) {
        console.log('EVEN POSITIVE')

    } else if (valores[count] % 2 === 0 && valores[count] < 0) {
        console.log('EVEN NEGATIVE')

    } else if (valores[count] % 2 === 1 && valores[count] > 0) {
        console.log('ODD POSITIVE')

    } else {
        console.log('ODD NEGATIVE')
    } 
    
    count++
}

