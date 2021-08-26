var input = require('fs').readFileSync('./Estudos.URI/dev/stdin/test.txt', 'utf8');
var lines = input.split(' ');

function sortfunction(a, b){
    return (b - a) 
  }

let valores = []
let x = 0

while (x < 3) {
    valores.push(parseFloat(lines.shift()))
    x++
}

valores.sort(sortfunction)

if (valores[0] >= (valores[1] + valores[2])) {
    console.log('NAO FORMA TRIANGULO')
} else {

    if ((valores[0] ** 2) === ((valores[1] ** 2) + (valores[2] ** 2))) {
        console.log('TRIANGULO RETANGULO')
    }

    if ((valores[0] ** 2) > ((valores[1] ** 2) + (valores[2] ** 2))) {
        console.log('TRIANGULO OBTUSANGULO')
    }

    if ((valores[0] ** 2) < ((valores[1] ** 2) + (valores[2] ** 2))) {
        console.log('TRIANGULO ACUTANGULO')
    }

    if (valores[0] === valores[1] && valores[0] === valores[2]) {
        console.log('TRIANGULO EQUILATERO')
    } else if (valores[0] === valores[1] || valores[0] === valores[2] || valores[1] === valores[2]) {
        console.log('TRIANGULO ISOSCELES')
    }

}