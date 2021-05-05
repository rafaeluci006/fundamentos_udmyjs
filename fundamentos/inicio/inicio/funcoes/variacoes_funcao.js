// #1: Função COM Parâmetro e COM Retorno
function somar(a, b) {
    return a + b;
}

let resultado = somar(30, 56);
console.log(`o resultado final é: ${resultado}`);        //console.log(resultado)
console.log(`o resultado final é: ${somar(30, 56)}`);   //console.log(somar(30, 56));

// #2: Função COM Parâmetro e SEM Retorno
function exibindoMulitiplicacao(a, b) {
    console.log(a * b);
}

exibindoMulitiplicacao(10, 21);
exibindoMulitiplicacao(7, 9);

// #3: Função SEM Parâmetros e COM Retorno
function retornarDataAtual() {
    return new Date();
}

console.log(retornarDataAtual());

// #4: Função SEM Parâmetros e SEM Retorno
function exibirHoraAtual() {
    console.log(new Date().getHours());
}

exibirHoraAtual();