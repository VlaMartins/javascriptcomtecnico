/* CONFORME VOCÊ EXPLICOU NA MEET*/

const dataAtual = new Date(); // cria um objeto data que recupera / busca a data atual 
let dataNiver = prompt("Data do seu próximo aniversário: (formato ANO-MÊS-DIA. Exemplo: 2024-05-30"); //é uma funcao nativa do js e navegador pra passar msg
dataNiver = new Date (dataNiver+"T23:59:59"); //mudando o valor para valor de data e indica por si so que os proximos valores são tempo
let diasQueFaltam = Math.floor((dataNiver - dataAtual)/86400000) //24horas x 60min x 60seg X 1000milissegundos = minutos x segundos x horas x mil   TRANSFORMANDO MILISSSEGUNDOS EM DIAS


document.querySelector("#dias_restantes").textContent = diasQueFaltam;



