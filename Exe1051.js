var input = require('fs').readFileSync('./Estudos.URI/dev/stdin/test.txt', 'utf8');

let salario = parseFloat(input)

if (salario <= 2000) {
    console.log('Isento')

} else if (salario > 2000 && salario <= 3000) {
    let salImposto = salario - 2000
    console.log(`R$ ${((salImposto / 100) * 8).toFixed(2)}`)

} else if (salario > 3000 && salario <= 4500) {
    let salImposto = salario - 3000
    console.log(`R$ ${(((salImposto / 100) * 18) + 80).toFixed(2)}`)

} else if (salario > 4500) {
    let salImposto = salario - 4500
    console.log(`R$ ${(((salImposto / 100) * 28) + 350).toFixed(2)}`)
}