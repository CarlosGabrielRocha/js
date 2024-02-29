const data = new Date() // Data é o objeto base para manipulação de datas em JS.

const div_data = document.getElementById("div_data")

const data_r = data.getDate()+"/"+data.getMonth()+"/"+data.getFullYear()

div_data.innerHTML=data_r



/* MÉTODOS E PROPRIEDADES DO DATE */

/*

getDate() = Dia do mês
getDay() = Dia da semana (número)
getFullYear() = Ano com 4 dígitos
getHours() = Horas
getMilliseconds() = Milisegundos
getMinutes() = Minutos 
getMonth() = mês 
getSeconds() = Segundos 
getTime() = Timestamp (Milisegundos desde 1 de Janeiro de 1970, 00:00:00: UTC
Date.now() = Timestamp (Milisegundos desde 1 de Janeiro de 1970, 00:00:00: UTC
getTimezoneOffset() = Timezone da localidade 
setDate() = Define um dia do mês para a data
setMonth() = Define um mês para a data
setFullYear() = Define um ano para a data 
setHours() = Define horas 
setMinutes() = Define minutos 
setSeconds() = Define segundos 
setMilliseconds() = Define Milisegundos 
toDateString() = Retorna somente a data

*/

