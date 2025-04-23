function recursao(n) {
    if (n - 1 < 2) {
        console.log("Recursão parou")
    } else if (n % 2 != 0) {
        console.log("Número impar")
        recursao(n - 1)
    } else {
        console.log("Número par")
        recursao(n - 2)
    }
}

recursao(39)