function carregar() {
    var msg = window.document.getElementById('msg1')
    var msg = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    setInterval(carregar, 1)
    msg2.innerHTML = `Agora são <b>${hora} horas</b>, <b>${minuto} minutos</b> e <b>${segundo} segundos</b>.`

        if (hora >= 0 && hora < 6) {
            msg1.innerHTML = '<p>BOA MADRUGADA!</p>'
            img.src = 'madrugada.png'
            document.body.style.background = "#030f23"
        }
        else if (hora >= 6 && hora < 12) {
            msg1.innerHTML = '<p>BOM DIA!</p>'            
            img.src = 'manha.png'
            document.body.style.background = "#bbc466"

        } else if (hora >= 12 && hora < 19) {
            msg1.innerHTML = '<p>BOA TARDE!</p>'
            img.src = 'tarde.png'
            document.body.style.background = "#e0b265"

        } else {
            msg1.innerHTML = '<p>BOA NOITE!</p>'
            img.src = 'noite.png'
            document.body.style.background = "#091922"

        }
}