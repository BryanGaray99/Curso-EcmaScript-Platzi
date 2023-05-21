// Clase 22 - Expresiones regulares 
// Las expresiones regulares son patrones que se utilizan 
// para hacer coincidir combinaciones de caracteres en cadenas.

const expresionRegular = /(\d{4})-(\d{2})-(\d{2})/;
// exec: Executes a search on a string using a regular expression 
// pattern, and returns an array containing the results of that search.
const matchers = expresionRegular.exec('2023-05-20');
console.table(matchers);


// La expresión regular:
// /(\d{4})-(\d{2})-(\d{2})/

// \d{4} -> busca un string con exactamente 4 dígitos de longitud
// luego viene un guión -
// \d{2} -> busca un string con exactamente 2 dígitos de longitud
// luego viene otro guión -
// y se repite el \d{2}

// Entonces la expresión regular hará match con strings que tengan 4 dígitos - 2 dígitos - 2 dígitos