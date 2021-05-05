let temDinheiro = false;
let estaEnsolarado = false;
let carroEestaNagaragem = false;

let resultadoE = '#1 (AND) - vai pro shopping? ';
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = '#2 (OR) - vai pro shopping?';
resultadoOU += estaEnsolarado || carroEestaNagaragem;
console.log( resultadoOU);

console.log(true !== true);
console.log(true !== false);
console.log(false !== true);
console.log(false !== false);