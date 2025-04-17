function armazenarSoma(x) {
    return y => x + y
}
let soma1 = armazenarSoma(3)
console.log(soma1(4))