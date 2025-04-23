// function sumEvenNumbers(num) {
//     soma = 0
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] % 2 == 0) {
//             soma += num[i]
//         }
//     }
//     return console.log(soma)
// }

// sumEvenNumbers([1,-2,3,-4,5,6])

function sumEvenNumbers(num) {
    soma = 0
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            soma += num[i]
        }
    }
    return soma
}

console.log(sumEvenNumbers([1,2,3,4]))