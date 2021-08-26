var input = require('fs').readFileSync('./Estudos.URI/dev/stdin/test.txt', 'utf8');
var lines = input.split('\r\n')

let info1 = lines.shift().split(' ')
let info2 = lines.shift().split(' : ')
let info3 = lines.shift().split(' ')
let info4 = lines.shift().split(' : ')

let a = info1.shift()
let dtInicio = parseInt(info1.shift())
let hrInicio = parseInt(info2.shift())
let minInicio = parseInt(info2.shift())
let segInicio = parseInt(info2.shift())
let b = info3.shift()
let dtFim = parseInt(info3.shift())
let hrFim = parseInt(info4.shift())
let minFim = parseInt(info4.shift())
let segFim = parseInt(info4.shift())

let dia = dtFim - dtInicio
let hora = 0
let minuto = 0
let segundo = 0

if (dtInicio === dtFim) {
    

    if (segInicio > segFim) { 
        segundo = (60 - segInicio) + segFim

        if (minInicio > minFim) {
            minInicio++
            minuto = (60 - minInicio) + minFim
            hora = (hrFim - hrInicio) - 1

        } else if (minInicio < minFim) {
            minuto = minFim - minInicio

        } else {
            minuto = 59
            hora = (hrFim - hrInicio) - 1
        }

    } else if (segInicio < segFim || segInicio === segFim) {
        segundo = segFim - segInicio
        
        if (minInicio > minFim) {
            minuto = (60 - minInicio) + minFim
            hora = (hrFim - hrInicio) - 1

        } else {
            minuto = minFim - minInicio
            hora = hrFim - hrInicio
        }

    } 
           
} else if (dtInicio < dtFim){
    
    if (segInicio > segFim) { 
        segundo = (60 - segInicio) + segFim

        if (minInicio > minFim) {
            minInicio++
            minuto = (60 - minInicio) + minFim
            hora = (hrFim - hrInicio) - 1

        } else if (minInicio < minFim) {
            minuto = minFim - minInicio

        } else {
            minuto = 59
            hora = (hrFim - hrInicio) - 1
        }

    } else if (segInicio < segFim || segInicio === segFim) {
        segundo = segFim - segInicio
        
        if (minInicio > minFim) {
            minuto = (60 - minInicio) + minFim
            hora = (hrFim - hrInicio) - 1

        } else {
            minuto = minFim - minInicio
            hora = hrFim - hrInicio
        }

    } 
}

console.log (`${dia} dia(s)`)
console.log (`${hora} hora(s)`)
console.log (`${minuto} minuto(s)`)
console.log (`${segundo} segundo(s)`)

