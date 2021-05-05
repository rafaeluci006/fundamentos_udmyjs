const t1 = true;
const t2 = true;

let comprarTV50 = t1 && t2;
console.log('vamos comprar a TV 50"?' , comprarTV50); // AND

let comprarTV32 = t1 !== t2;
console.log('vamos comprar a tv 32"?', comprarTV32); // XOR

let tomarSorvete = t1 || t2;
console.log('vamos comprar  sorvete?', tomarSorvete); // NOT

let ficarEmcasa = !tomarSorvete; // NOT
console.log('vamos ficar em casa?', ficarEmcasa);