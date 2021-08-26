var input = require('fs').readFileSync('./Estudos.URI/dev/stdin/test.txt', 'utf8');

function calculoPorcentagem(valor) {
    let salario = valor
    let porcent = 0

    if (salario > 0 && salario <= 400) {
        porcent = 15
    } else if (salario > 400 && salario <= 800){
        porcent = 12
    } else if (salario > 800 && salario <= 1200) {
        porcent = 10
    } else if (salario > 1200 && salario <= 2000) {
        porcent = 7
    } else {
        porcent = 4
    }

    return (porcent)
}

let porcentagem = calculoPorcentagem(input)

let calcPorcent = (parseFloat(input) / 100) * porcentagem

console.log(`Novo salario: ${(parseFloat(input) + calcPorcent).toFixed(2)}`)
console.log(`Reajuste ganho: ${calcPorcent.toFixed(2)}`)
console.log(`Em percentual.atualizado: ${porcentagem} %`)
    