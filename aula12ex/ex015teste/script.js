function verificar() {
   data = new Date()
   var ano = data.getFullYear()
   var fano = window.document.getElementById('iano')
   var res =  window.document.getElementById('res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('{ERRO} Verifique o erro e tente novamente!')
   } else {
        fsex = window.document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
          gênero = 'Homem'
          if (idade >= 0 && idade <= 5) {
               //bebê
               img.setAttribute('src', 'criança.m.png')
          } else if (idade <= 14) {
               //criança
               img.setAttribute('src', 'preadolescente.m.png')
          } else if (idade < 25) {
               //jovem
               img.setAttribute('src', 'jovem.m.png')
          } else if (idade < 60) {
               //Adulto
               img.setAttribute('src', 'adulto.png')
          } else {
               //idoso
               img.setAttribute('src', 'idoso.png')
          }
        } else if (fsex[1].checked) {
          gênero =  'Mulher'
          if (idade >= 0 && idade <= 5) {
               //bebê
               img.setAttribute('src', 'criança.f.png')
          } else if (idade <= 14) {
               //criança
               img.setAttribute('src', 'preadolescente.f.png')
          } else if (idade < 25) {
               //Jovem
               img.setAttribute('src', 'jovem.f.png')
          } else if (idade < 60) {
               //Adulto
               img.setAttribute('src', 'adulta.png')
          } else {
               //idoso
               img.setAttribute('src', 'idosa.png')
          }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
   }
  
}

