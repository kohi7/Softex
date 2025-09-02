const readline = require("readline-sync");

let n1 = parseFloat(readline.question("Digite o primeiro numero: "));
let n2 = parseFloat(readline.question("Digite o segundo numero: "));

console.log("1 - Soma");
console.log("2 - Subtracao");
console.log("3 - Multiplicacao");
console.log("4 - Divisao");

let op = readline.question("Escolha a operacao: ");
let r;

switch (op) {
    case "1": r = n1 + n2; break;
    case "2": r = n1 - n2; break;
    case "3": r = n1 * n2; break;
    case "4": r = n2 != 0 ? n1 / n2 : "Erro: divisao por zero"; break;
    default: r = "Opcao invalida";
}

console.log("Resultado:", r);
