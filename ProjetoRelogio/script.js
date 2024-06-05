 function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 18//
msg.innerHTML = `Agora são ${hora} hora.`
if (hora >= 0 && hora < 12) {
    // Bom Dia!
    document.body.style.background = '#e2cd9f'
    img.src = 'img/manha.png.jpeg'
} else if (hora >-12 && hora < 18){
    // Boa Tarde!
    img.src = 'img/tarde.png.jpeg'
    document.body.style.background = '#b9846f'
    
} else {
    // Boa Noite!
    img.src = 'img/noite.png.jpeg'
    document.body.style.background = '#515154'
    
}


}