//quantos dias eu ja vivi
const dataAtual = new Date(); 
let dataNiver = prompt("Data que você nasceu: (formato ANO-MÊS-DIA. Exemplo: 2024-05-30"); //é uma funcao nativa do js e navegador pra passar msg
var diferencaEmMilissegundos = dataAtual - dataNascimento;
var diasVividos = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 12));

document.querySelector("#dias_vividos").textContent = diasVividos;





