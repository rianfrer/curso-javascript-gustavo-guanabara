function tabuada(){
    let num = document.getElementById("txtn")
    let res = document.getElementById("res")
    if(num.value.length == 0){
        alert("[ERRO] Digite um número")
    }else{
        let n = Number(num.value)
        res.innerHTML = ""
        for( let c = 1 ;c <= 10; c++){
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}` // selecionar com o tab (n tem mt sentido no JS)
            res.appendChild(item)
        }
    }
}