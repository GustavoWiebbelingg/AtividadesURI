var input = require('fs').readFileSync('./dev/stdin/test.txt', 'utf8');
var lines = input.split('\r\n')

let qtdValores = parseInt(lines.shift())
let valores = []
let x = 0
let y = 0
let qtdIntervalo = 0
let count = 1
let count1 = 0
let soma = 0

while (count1 < qtdValores){
    valores = lines.shift().split(' ')
    x = parseInt(valores.shift())
    y = parseInt(valores.shift())
    qtdIntervalo = Math.abs(x - y)

    while (count < qtdIntervalo) {
        if (x > y && qtdIntervalo >= 2) {
            y++

            if (y % 2 == 1) {
                soma = soma + y
            }

        } else if (x < y && qtdIntervalo >= 2) {
            x++
    
            if (x % 2 == 1) {
                soma = soma + x
            }
        }   
        count++ 
    }
    count = 1
    console.log(soma)
    soma = 0
    count1++
}
