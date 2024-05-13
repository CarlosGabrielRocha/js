const valor = parseFloat(prompt('Digite o valor em METROS a ser convertido: '))
const medida = prompt(`
                Escolha a unidade de medida:
                       -milímetro  (mm)
                       -centímetro (cm)
                       -decímetro  (dm) 
                       -decâmetro  (dam)
                       -hectômetro (hm)
                       -quilômetro (km)
                    `)
let res
switch (medida) {
   case 'mm':
      res = valor * 1000
   break
   case 'cm':
       res = valor * 100
   break
   case 'dm':
      res = valor * 10
   break
   case 'dam':
      res = valor / 10
   break
   case 'hm':
      res = valor / 100
   break
   case 'km':
      res = valor / 1000
   break
   default:
      alert("[OPÇÃO INVÁLIDA]")
}

alert(`Resultado da conversão: ${res}`)
