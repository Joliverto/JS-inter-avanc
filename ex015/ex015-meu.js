let num = 41

if (num != 1) {
    let primo = true
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            primo = false
        } 
    }
    primo == true ?console.log('É primo') :console.log('Não é primo')
} else {
    console.log(`O número ${num} é primo!`)
}