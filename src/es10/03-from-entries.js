// Clase 25 Object Entries

// Pasar de un array a un objeto
const arreglo = new Map([["name", "Bryan"], ["age", 23]]);
console.log(arreglo);
console.log(Object.fromEntries(arreglo));