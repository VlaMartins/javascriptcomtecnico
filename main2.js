const contadores = document.querySelectorAll (".contador");
const tempoAtual = new Date(); //retorna data atual do computador
const tempoObjetivo1 = new Date("2024-04-19T00:00:00"); // formato de data padrao com hifem e um T para tempo
let tempofinal = tempoObjetivo1 - tempoAtual; 

let segundos = Math.floor (tempofinal / 1000);
let minutos = Math.floor (segundos / 60); 
let horas = Math.floor (minutos / 60);
let dias = Math.floor (horas / 24); 

segundos %=  60; // sinal de porcentagem traz o resto da divisao
minutos %= 60;
horas %= 24;

contadores[0].textContent = dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";




dfkdsjfdkçlfjdlkfjsdlkfjsdlkfjsdlkfj

let diasQueFaltam = calculaDias();//

while (diasQueFaltam < 0) {
    alert("A data informada é menor que a data atual, atualize a página e insira uma nova data");
    diasQueFaltam = calculaDias();
}

document.querySelector("#dias_restantes").textContent = "Faltam " + diasQueFaltam + " Dias";

function calculaDias() {
    let dataObjetivo = prompt("Data do seu próximo aniversário: (formato ANO-MÊS-DIA, exemplo: 2024-05-30");
    dataObjetivo = new Date(dataObjetivo + "T23:59:59");
    return Math.floor((dataObjetivo - dataAtual) / 86400000);
}

