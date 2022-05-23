let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas)
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas)

    resultado.innerHTML = `<h2>Você vai precisar de:</h2>`
    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de carne</p>`
    resultado.innerHTML += `<p>${Math.round(qtdTotalCerveja / 355)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.round(qtdTotalBebidas / 2000)} Garrafas de Bebidas</p>`
}

function carnePP(duracao){
    if(duracao >= 6) {
        return 650;
    }
    else {
        return 400;
    }
}
function cervejaPP(duracao){
    if(duracao >= 6) {
        return 2000;
    }
    else {
        return 1200;
    }
}
function bebidasPP(duracao){
    if(duracao >= 6) {
        return 1500;
    }
    else {
        return 1000;
    }
}
