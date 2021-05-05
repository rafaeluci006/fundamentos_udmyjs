function executar(funcao) {
    if (typeof funcao === "function") {
        console.log(funcao()); // <--- parte central da aula
    }
}

function bomdia() {
    return "Bom dia";
}

executar(3);
executar(bomdia);  // <--- parte central da aula

const x = bomdia;
const y = bomdia();

console.log(x());
console.log(y);