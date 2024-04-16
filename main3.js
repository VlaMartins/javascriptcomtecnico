// GERANDO total de dias desde que nasceu
const contadores = document.querySelectorAll ("#dias_vividos");

function calcularDiasVividos(dataNascimento) { // Converter a data de nascimento para um objeto Date
    var dataNascimentoObj = new Date(dataNascimento);
    
    // Obter a data atual
    var dataAtual = new Date();
    
    // Calcular a diferença em milissegundos entre as duas datas
    var diferencaEmMilissegundos = dataAtual - dataNascimentoObj;
    
    // Converter a diferença de milissegundos para dias
    var diasVividos = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    
    return diasVividos;
}

// Exemplo de uso
var dataNascimento = "1990-05-15"; // Formato: AAAA-MM-DD
var diasVividos = calcularDiasVividos(dataNascimento);
console.log("Você já viveu aproximadamente " + diasVividos + " dias.");
