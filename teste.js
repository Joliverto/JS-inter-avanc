function contador(i) {
    let cont = i
    let somarContador = function() {
        console.log(cont)
        cont++
    }
    return somarContador
}

let meuContador = contador(5)
meuContador()
meuContador()