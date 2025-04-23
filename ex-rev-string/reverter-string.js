function reverseString(texto) {
    let revTxt = ""
    for (let i = texto.length - 1; i >= 0; i--) {
        revTxt += texto[i]
    }
    return console.log(revTxt)
}

reverseString("reverter string")