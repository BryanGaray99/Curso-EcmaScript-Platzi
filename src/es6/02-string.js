// Clase 5 -  Strings

//-----------------------------------------------------
// Concatenar strings de forma tradicional con + 
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

// Concatenar con template literals -- con acento grave `` "alt + }" o "alt+96"
// Estructura `${variable}`
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

// --------------------------------------------------
// Multilínea (Multi-line strings) con "Alt Gr + ?"
let teoremas = 'Teorema-Euler \n' + 'Teorema-Cauchy';
console.log(teoremas);

// Multilínea con ``
let teoremas2 = `Teorema-Euler 
Teorema-Cauchy
`;
console.log(teoremas2);
