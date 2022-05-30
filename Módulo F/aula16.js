function parimpar(n){
    if(n % 2 == 0){
        return 'Par!'
    }else{
        return 'Ímpar!'
    }
}

let cham = parimpar(13)
console.log(cham)

function soma(n1 = 0, n2 = 0){
    return n1 + n2
}

console.log(soma(7))

//RECURSIVIDADE
function fatorial(n){
    if(n == 1) {
        return 1
    }else{
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(5))