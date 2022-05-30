function carregar(){
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = "imgM.jpg"
        document.body.style.background = "#eeddbb"
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = "imgT.jpg"
        document.body.style.background = "#ffcdbd"
    }else{
        //BOA NOITE!
        img.src = "imgN.jpg"
        document.body.style.background = "#000000"
    }
}
