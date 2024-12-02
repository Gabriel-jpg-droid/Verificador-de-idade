function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados fornecidos e tente novamente !')
    } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      //res.innerHTML = `Ìdade calculada:  ${idade}`
      var genero = ''
      var img = document.createElement('img') // A linha 13 e 14 servem para criar a tag de img
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src','foto-crianca-m.jpg')
        } else if(idade >= 18) {
            // Adolescente/jovem
            img.setAttribute('src','foto-jovem-m.jpg')
        }   else if ( idade <= 35){
        // Adulto
        img.setAttribute('src','foto-adulto-m.jpg')
        }
            else if (idade < 60) { 
                //idoso
                img.setAttribute('src','foto-idoso-m.jpg')
            }
      } else if (fsex[1].checked) {
        genero = 'Mulher'

        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src','foto-crianca-f.jpg')
        } else if(idade < 18) {
            // Adolescente/jovem
            img.setAttribute('src','foto-jovem-f.jpg')
        }   else if ( idade < 60){
            // Adulto
            img.setAttribute('src','foto-adulto-f.jpg')
        }
            else {
                //idoso
                img.setAttribute('src','foto-idoso-f.jpg')
            }
      }
      res.style.textAlign = 'center' //centraliza o texto no javcascript
      res.innerHTML = `Detectamos ${genero} com ${idade} anos`
      res.appendChild(img)
    }
}