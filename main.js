const contadores = document.querySelectorAll (".contador");

const dataAtual = new Date(); // cria um objeto data que recupera / busca a data atual 
let dataNiver = prompt("Data do seu próximo aniversário: (formato ANO-MÊS-DIA. Exemplo: 2024-05-30"); //é uma funcao nativa do js e navegador pra passar msg
dataNiver = new Date (dataNiver+"T23:59:59"); //mudando o valor para valor de data e indica por si so que os proximos valores são tempo
let diasQueFaltam = Math.floor((dataNiver - dataAtual)/86400000) //24horas x 60min x 60seg X 1000milissegundos = minutos x segundos x horas x mil   TRANSFORMANDO MILISSSEGUNDOS EM DIAS

let segundos = Math.floor (diasQueFaltam / 1000);
let minutos = Math.floor (segundos / 60); 
let horas = Math.floor (minutos / 60);
let dias = Math.floor (horas / 24); 

segundos %=  60; // sinal de porcentagem traz o resto da divisao
minutos %= 60;
horas %= 24;

contadores[0].textContent = dias + " dias " + horas + " horas ";
document.querySelector("#dias_restantes").textContent = diasQueFaltam;



