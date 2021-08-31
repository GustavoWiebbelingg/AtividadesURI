let I = 0
let J = [1, 2, 3]

for (I, J;I <= 2; I = I + 0.2, J[0] = J[0] + 0.2, J[1] = J[1] + 0.2, J[2] = J[2] + 0.2) {
    if (I == 0.0 || I == 1.0 || I == 1.9999999999999998) {
        console.log(`I=${parseInt(I.toFixed(1))} J=${parseInt(J[0].toFixed(1))}`)
        console.log(`I=${parseInt(I.toFixed(1))} J=${parseInt(J[1].toFixed(1))}`)
        console.log(`I=${parseInt(I.toFixed(1))} J=${parseInt(J[2].toFixed(1))}`)
    } else {
        console.log(`I=${I.toFixed(1)} J=${J[0].toFixed(1)}`)
        console.log(`I=${I.toFixed(1)} J=${J[1].toFixed(1)}`)
        console.log(`I=${I.toFixed(1)} J=${J[2].toFixed(1)}`)
    }
}