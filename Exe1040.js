var input = require('fs').readFileSync('./Estudos.URI/dev/stdin/test.txt', 'utf8');
var lines = input.split('\n');

let numeros = lines.shift().split(' ')

let n1 = parseFloat(numeros.shift())
let n2 = parseFloat(numeros.shift())
let n3 = parseFloat(numeros.shift())
let n4 = parseFloat(numeros.shift())
let exame = parseFloat(lines.shift())

let media = (((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10).toFixed(1)

console.log(`Media: ${media}`)

if (media >= 7) {
    console.log('Aluno aprovado.')

} else if (media < 5) {
    console.log('Aluno reprovado.')

} else if (media >= 5 && media < 7) {
    console.log('Aluno em exame.')
    console.log(`Nota do exame: ${exame.toFixed(1)}`)

        media = ((parseFloat(media) + exame) / 2).toFixed(1) 
            
        if (media >= 5) {
                console.log('Aluno aprovado.')
                console.log(`Media final: ${media}`)    
            } else {
                console.log('Aluno reprovado.')
                console.log(`Media final: ${media}`) 
            }

}