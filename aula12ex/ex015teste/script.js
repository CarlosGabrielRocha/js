function verificar() {
   data = new Date()
   var ano = data.getFullYear()
   var fano = window.document.getElementById('iano')
   var res =  window.document.getElementById('res')
   if (fano.value.lenth == 0 || fano.value > ano) {
        window.alert('{ERRO} Verifique o erro e tente novamente!')
   } else {
        window.alert('Tudo ok!')
   }
   var sexo = window.document.getElementById('')
}

