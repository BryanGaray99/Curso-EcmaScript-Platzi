// Clase 19 - String padding

const texto = 'Mana';
// Start padding -> definir nuevo tamaño del string
// y aparte decir con que rellenar el espacio que falta al inicio
// en el ejemplo actual Mana tiene 4 caracteres por lo que 
// cualquier número menor a 4 no alterará el string, tiene que ser
// mayor a 4 y empezará a llenar el string de forma cíclica 
console.log(texto.padStart(8, '.'));
//output: ....Mana

// End String padding, la misma lógica pero agrega al final
console.log(texto.padEnd(8,'!'));