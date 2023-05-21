// Clase 19 - Trailing commas

// Sirven para crear espacios en el array pero sin valores
// cada ',' después del último valor es un espacio
const numbers = [1, 2, 3, 4, , , , 8];
console.log(numbers);
console.log(numbers.length); //output: 8 

const countries = [ 'Hungría', 'Rusia', 'Paraguay', 'Estados-Unidos', ,'Turquía'];
console.log(countries);
console.log(countries.length); //output: 6 