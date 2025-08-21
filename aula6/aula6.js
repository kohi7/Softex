let readline = require('readline-sync')

let nome = readline.question("Qual é o seu nome: ")

switch(nome){
    case "dan":
        console.log("O seu nome é dan")
        break;
    case "Dan":
        console.log("Eu estou aqui")
        break;
    case "DAN":
        console.log("EU ESTOU AQUI")
        break;
    default:
        console.log("Eu não te conheço!")
        break;

}