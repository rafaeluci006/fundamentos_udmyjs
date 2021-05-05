const nota1 = 6.0;
const nota2 = 3.3;
const nota3 = 2.1;


function minimo(n1, n2) {

}

function mediaDuasMaiores(n1, n2, n3) {
    const menorNota = minimo(n1, minimo(n2, n3));
    if (menorNota === n1) {
        return (n2 + n3) / 2;
    } else if (menorNota === n2) {
        return (n1 + n3) / 2;
    } else {
        return (n1 + n2) / 2;
    }
}

function mediaParaStaus(media) {
    if (media >= 7) {
        return "Aprovado"
    } else if (media >= 4) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

const mediaFinal = mediaDuasMaiores(nota1, nota2, nota3);
const statusFinal = mediaParaStaus(mediaFinal);
console.log(`o resultado final do aluno é ${statusFinal}!`);