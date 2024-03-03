const data = new Date() 

const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")

let dia = data.getDate()
dia=dia<10?"0"+dia:dia
let mes = data.getMonth()
mes=mes<10?"0"+mes:mes
const data_r = dia+"/"+mes+"/"+data.getFullYear()
div_data.innerHTML=data_r

const relogio=()=>{
    const data = new Date()
    let hora = data.getHours()
    hora=hora<10?"0"+hora:hora
    let min = data.getMinutes()
    min=min<10?"0"+min:min
    let seg = data.getSeconds()
    seg=seg<10?"0"+seg:seg
    div_relogio.innerHTML = `${hora}:${min}:${seg}`
}

const intervalo = setInterval(relogio, 1000)



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

