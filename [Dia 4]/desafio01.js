let fome = prompt("Você está com fome? Digite 'sim' ou 'não'.");
let dinheiro = prompt("Você tem dinheiro? Digite 'sim' ou 'não'.");
let restauranteAberto = prompt("O restaurante está aberto? Digite 'sim' ou 'não'.");

if (fome.toLowerCase() === "não" || dinheiro.toLowerCase() === "não") {
    console.log("Hoje a janta será em casa");
} else if (fome.toLowerCase() === "sim" && dinheiro.toLowerCase() === "sim" && restauranteAberto.toLowerCase() === "não") {
    console.log("Peça um delivery!");
} else if (fome.toLowerCase() === "sim" && dinheiro.toLowerCase() === "sim" && restauranteAberto.toLowerCase() === "sim") {
    console.log("Hoje o jantar será no seu restaurante preferido!");
} else {
    console.log("Por favor, responda com 'sim' ou 'não'.");
}