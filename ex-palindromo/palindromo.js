function isPalindrome(palavra) {
    palavra = palavra.toLowerCase()
    palavraInvertida = palavra.split("")
    for (i = palavraInvertida.length - 1, j = 0; i >= palavraInvertida.length/2; i--, j++) {
        let troca = palavraInvertida[j]
        palavraInvertida[j] = palavraInvertida[i]
        palavraInvertida[i] = troca
    }
    palavraInvertida = palavraInvertida.join("")
    if (palavra == palavraInvertida) {
        return console.log("É palindromo")
    } else {
        return console.log("Não é palindromo")
    }
}
isPalindrome('Abaaba')


// JEITO MAIS FÁCIL: >>>
// function isPalindrome(palavra) {
//     if (palavra == palavra.split("").reverse().join("")) {
//         return true
//     } else {
//         return false
//     }
// }
// isPalindrome('radar')
