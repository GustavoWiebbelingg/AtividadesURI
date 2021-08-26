var input = require('fs').readFileSync('./Estudos.URI/dev/stdin/test.txt', 'utf8');
var lines = input.split('\r\n')

let a = lines.shift()
let b = lines.shift()
let c = lines.shift()

if (a === 'vertebrado') {

    if (b === 'mamifero') {

        if (c === 'onivoro') {
            console.log('homem')
        } else {
            console.log('vaca') 
        }

    } else {

        if (c === 'carnivoro') {
            console.log('aguia')
        } else {
            console.log('pomba')
        }

    }

} else {

    if (b === 'inseto') {

        if (c === 'hematofago') {
            console.log('pulga')
        } else {
            console.log('lagarta')
        }

    } else {
        if (c === 'hematofago') {
            console.log('sanguessuga')
        } else {
            console.log('minhoca')
        }
    }

}

