var input = require('fs').readFileSync('./Estudos.URI/dev/stdin/test.txt', 'utf8');

let valor = parseFloat(input)

if (valor > 0 && valor <= 400.00) {
    let calcPorcent = (valor / 100) * 15 

    console.log(`Novo salario: ${(valor + calcPorcent).toFixed(2)}`)
    console.log(`Reajuste ganho: ${calcPorcent.toFixed(2)}`)
    console.log('Em percentual: 15 %')

} else if (valor > 400.00 && valor <= 800.00) {
    let calcPorcent = (valor / 100) * 12 

    console.log(`Novo salario: ${(valor + calcPorcent).toFixed(2)}`)
    console.log(`Reajuste ganho: ${calcPorcent.toFixed(2)}`)
    console.log('Em percentual: 12 %')
} else if (valor > 800.00 && valor <= 1200.00) {
    let calcPorcent = (valor / 100) * 10

    console.log(`Novo salario: ${(valor + calcPorcent).toFixed(2)}`)
    console.log(`Reajuste ganho: ${calcPorcent.toFixed(2)}`)
    console.log('Em percentual: 10 %')
} else if (valor > 1200.00 && valor <= 2000.00) {
    let calcPorcent = (valor / 100) * 7

    console.log(`Novo salario: ${(valor + calcPorcent).toFixed(2)}`)
    console.log(`Reajuste ganho: ${calcPorcent.toFixed(2)}`)
    console.log('Em percentual: 7 %')
} else {
    let calcPorcent = (valor / 100) * 4

    console.log(`Novo salario: ${(valor + calcPorcent).toFixed(2)}`)
    console.log(`Reajuste ganho: ${calcPorcent.toFixed(2)}`)
    console.log('Em percentual: 4 %')
}