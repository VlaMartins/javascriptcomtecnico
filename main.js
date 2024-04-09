const dataAtual = new Date();
let dataObjetivo = prompt("Data final (formato ANO-MÊS-DIA, exemplo: 2024-05-30");
dataObjetivo = new Date(dataObjetivo+"T23:59:59");
let diasQueFaltam = Math.floor((dataObjetivo - dataAtual) / 86400000);
document.querySelector("#dias_restantes").textContent = diasQueFaltam+" dias";
