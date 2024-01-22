let nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");
let cartaMotorista = prompt("Você possui carta de motorista? Digite 'sim' ou 'não'.");
let carro = prompt("Você possui algum carro? Digite 'sim' ou 'não'.");

if (idade < 18 || cartaMotorista.toLowerCase() === "não") {
    console.log("Giovanni, você não pode dirigir");
} else if (idade >= 18 && cartaMotorista.toLowerCase() === "sim" && carro.toLowerCase() === "não") {
    console.log("Giovanni, você pode dirigir mas não tem um carro");
} else if (idade >= 18 && cartaMotorista.toLowerCase() === "sim" && carro.toLowerCase() === "sim") {
    console.log("Giovanni, você será o motorista!");
} else {
    console.log("Por favor, responda com 'sim' ou 'não'.");
}