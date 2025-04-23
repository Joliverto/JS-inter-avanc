function countVowels(text) { 
    let cv = 0
    for(let i = 0; i < text.length; i++) {
        if (text[i] == "a" || text[i] == "e" || text[i] == "i" || text[i] == "o" || text[i] == "u") {
            cv += 1
        }
    }
    return console.log(cv)
} 
countVowels("abcd da amazonia")