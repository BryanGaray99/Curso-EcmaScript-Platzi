// Clase 27 - Nullish Coalescing

// El operador Nullish "??" comprobar si el valor es null, 
// si es null le podemos asignar un valor en la misma declaración

const number1 = 1;
const number2 = null;
console.log(number1 ?? 10);
console.log(number2 ?? 20);