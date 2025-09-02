const readline = require("readline-sync"); 

const frutas = []; 
const totalFrutas = 3; 

for (let i = 0; i < totalFrutas; i++) {
    const nome = readline.question("Digite o nome de uma fruta: ");
    frutas.push(nome);
}

console.log("\nAs frutas digitadas foram:");
for (let j = 0; j < frutas.length; j++) {
    console.log((j + 1) + ". " + frutas[j]);
}
