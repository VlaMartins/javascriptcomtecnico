const dataAtual = new Date(); // cria um objeto data que recupera / busca a data atual 
let dataNiver = prompt("Data do seu próximo aniversário: (formato ANO-MÊS-DIA. Exemplo: 2024-05-30"); //é uma funcao nativa do js e navegador pra passar msg
dataNiver = new Date (dataNiver+"T23:59:59"); //mudando o valor para valor de data
let diasQueFaltam = Math.floor((dataNiver - dataAtual)/86400000) //24h x 60MIN x 60SEG X 1000MILISEGUNDOS = minutos x segundos x horas x mil   TRANSFORMANDO MILISSSEGUNDOS EM DIAS



