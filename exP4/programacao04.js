//Versão raiz sem o método push()

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const semPares = []

for (let i = 0,j = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
        semPares[j] = arr[i]
        j++
    }
}
console.log(semPares)

// Versão com método push

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
// const semPares = []

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 1) {
//         semPares.push(i)
//     }
// } 
// console.log(semPares)