let readline = require('readline-sync');

// Perguntas do formulário
let nome = readline.question("Qual é o seu nome? ");
let dataNascimento = readline.question("Qual é a sua data de nascimento (dd/mm/aaaa)? ");
let animalFavorito = readline.question("Qual é o seu animal favorito? ");
let corFavorita = readline.question("Qual é a sua cor favorita? ");

// Quebra a data em dia, mês e ano
let [dia, mes, ano] = dataNascimento.split("/").map(Number);

// Calcula idade em 2025
let anoAtual = 2025;
let idade = anoAtual - ano;
let hoje = new Date();
let refMes = hoje.getMonth() + 1;
let refDia = hoje.getDate();

if (mes > refMes || (mes === refMes && dia > refDia)) {
    idade--;
}

// Função para descobrir o signo
function getSigno(dia, mes) {
    if ((dia >= 21 && mes === 3) || (dia <= 19 && mes === 4)) return "Áries";
    if ((dia >= 20 && mes === 4) || (dia <= 20 && mes === 5)) return "Touro";
    if ((dia >= 21 && mes === 5) || (dia <= 20 && mes === 6)) return "Gêmeos";
    if ((dia >= 21 && mes === 6) || (dia <= 22 && mes === 7)) return "Câncer";
    if ((dia >= 23 && mes === 7) || (dia <= 22 && mes === 8)) return "Leão";
    if ((dia >= 23 && mes === 8) || (dia <= 22 && mes === 9)) return "Virgem";
    if ((dia >= 23 && mes === 9) || (dia <= 22 && mes === 10)) return "Libra";
    if ((dia >= 23 && mes === 10) || (dia <= 21 && mes === 11)) return "Escorpião";
    if ((dia >= 22 && mes === 11) || (dia <= 21 && mes === 12)) return "Sagitário";
    if ((dia >= 22 && mes === 12) || (dia <= 19 && mes === 1)) return "Capricórnio";
    if ((dia >= 20 && mes === 1) || (dia <= 18 && mes === 2)) return "Aquário";
    if ((dia >= 19 && mes === 2) || (dia <= 20 && mes === 3)) return "Peixes";
    return "Desconhecido";
}

let signo = getSigno(dia, mes);

// Exibindo formulário formatado
console.log("\n------ Formulário (" + nome + ") -------");
console.log("Nome: " + nome);
console.log("Data de nascimento: " + dataNascimento);
console.log("Idade em 2025: " + idade + " anos");
console.log("Signo: " + signo);
console.log("Animal favorito: " + animalFavorito);
console.log("Cor favorita: " + corFavorita);
console.log("-----------------------------------------");
