const dayjs = require("dayjs")
const customParseFormat = require("dayjs/plugin/customParseFormat")
dayjs.extend(customParseFormat)

function dateManipulation(date) {
   const currentlyDate = dayjs()

   const birthDate = dayjs(date, 'DD/MM/YYYY')

   let age = currentlyDate.year() - birthDate.year()
   let nextBirth = birthDate.add(age + 1, 'year').format('DD/MM/YYYY')
   let daysForBirth = dayjs(nextBirth, 'DD/MM/YYYY').diff(currentlyDate, 'day')

   const testAge = birthDate.add(age, 'year')

   if (testAge.isAfter(currentlyDate, 'days')) {
      age--
      nextBirth = birthDate.add(age + 1, 'year').format('DD/MM/YYYY')
      daysForBirth = birthDate.add(age + 1, 'year').diff(currentlyDate, 'day')
   }

   return  console.log(`Idade: ${age}\nCompletará ano em: ${nextBirth}\nDias restantes para próximo aniversário: ${daysForBirth}`)
}

dateManipulation("30/08/2003")
