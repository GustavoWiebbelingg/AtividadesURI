var input = require('fs').readFileSync('./dev/stdin/test.txt', 'utf8');
var lines = input.split('\r\n');

let qtdExperiencias = parseInt(lines.shift())
let valores = []
let count = 0
let cobaias = [0, 0, 0] //0= coelhos, 1= ratos, 2= sapos
let soma = 0

while (count < qtdExperiencias) {
    valores = lines.shift().split(' ')
    let a = parseInt(valores.shift())
    let b = valores.shift()

    if (b == 'C') {
        cobaias[0] = cobaias[0] + a
    } else if (b == 'R') {
        cobaias[1] = cobaias[1] + a
    } else {
        cobaias[2] = cobaias[2] + a
    }

    valores = []
    count++
}

soma = cobaias.reduce((total, currentElement) => total + currentElement)

console.log(`Total: ${soma} cobaias`)
console.log(`Total de coelhos: ${cobaias[0]}`)
console.log(`Total de ratos: ${cobaias[1]}`)
console.log(`Total de sapos: ${cobaias[2]}`)
console.log(`Percentual de coelhos: ${((100 / soma) * cobaias[0]).toFixed(2)} %`)
console.log(`Percentual de ratos: ${((100 / soma) * cobaias[1]).toFixed(2)} %`)
console.log(`Percentual de sapos: ${((100 / soma) * cobaias[2]).toFixed(2)} %`)

