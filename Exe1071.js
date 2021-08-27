var input = require('fs').readFileSync('./dev/stdin/test.txt', 'utf8');
var lines = input.split('\r\n');

let valor1 = parseInt(lines.shift()) 
let valor2 = parseInt(lines.shift())
let qtdIntervalo = Math.abs(valor1 - valor2)
let soma = 0
let count = 1

if (valor1 < valor2){
    if ((qtdIntervalo) >= 2) {

        while (count < qtdIntervalo) {
            valor1++
            if (Math.abs(valor1) % 2 == 1) {
                soma = (soma + valor1)
            }
            count++
        }  

    } 

} else if (valor1 > valor2) {
    if ((qtdIntervalo) >= 2) {

        while (count < qtdIntervalo) {
            valor2++
            if (Math.abs(valor2) % 2 == 1) {
                soma = (soma + valor2)
            }
            count++
        }  

    } 

}

console.log(soma)