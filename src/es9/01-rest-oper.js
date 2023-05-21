// Clase 22 - Rest operator

const user = { username:'Bryan', age:23, country: 'EC'};
const { username, ...values } = user;
// Rest Property, es decir, una asignación desestructurada 
// aplicada en un objeto.
console.log(username);
console.log(values);
