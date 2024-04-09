const dataAtual = new Date();//
let diasQueFaltam = calculaDias();//

while (diasQueFaltam < 0) {
    alert("A data informada é menor que a data atual, atualize a página e insira uma nova data");
    diasQueFaltam = calculaDias();
}

document.querySelector("#dias_restantes").textContent = "Daqui há " + diasQueFaltam + " dias será seu próximo aniversário!!!";

function calculaDias() {
    let dataObjetivo = prompt("Data do seu próximo aniversário: (formato ANO-MÊS-DIA, exemplo: 2024-05-30");
    dataObjetivo = new Date(dataObjetivo + "T23:59:59");
    return Math.floor((dataObjetivo - dataAtual) / 86400000);
}

