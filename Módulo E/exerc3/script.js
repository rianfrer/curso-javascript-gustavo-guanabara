function contar(){
    let inicio = document.getElementById("inc")
    let fim = document.getElementById("fim")
    let passo = document.getElementById("pas")
    let res = document.getElementById("res")

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert("[ERRO] Faltam dados!")
        res.innerHTML = "Impossível contar"
    }else{
        res.innerHTML = "Contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        let c = i  //contador

        if(p <= 0){
            alert("Passo inválido! Considerando PASSO 1")
            p = 1
        }

        if(i < f){
            while(c <= f){
                res.innerHTML += `${c} \u{1F449}`   // esse += é de concatenação
                c += p
            }
        }else{
            while(c >= f){
                res.innerHTML += `${c} \u{1F449}`
                c -= p
            }
        }
        res.innerHTML += `\u{1F3C1}`
        
    }
}