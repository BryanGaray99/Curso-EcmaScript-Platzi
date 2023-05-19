// Clase 7 - Deestructuración (Destructuring)

//---------------------------------
// Arrays
let elements = ['fire','water','earth','air'];

//Forma anterior a ES6
console.log(elements[0], elements[3]);
// Destructuración
let [a,b,c,d] = elements;  
console.log(a,d);


//-------------------------------
// Objetos
let avatar = {name: 'Aang', element:'Air'};

// Antes de ES6
console.log(avatar.name, avatar.element);
// Destructuración
let { name, element } = avatar;
console.log(name, element);

// -----------------------------------------------
// Clase 8 

// Spread Operator (Operador de propagación " ...")
let person = { name: 'Bryan', age:23};
let country = 'EC';

let data = { id:1, ...person, country};
console.log(data);

// -- Rest ----------------------------------------------
// recoge los n argumentos que queramos 
// pasarle a una función y los hace un array
// siempre va al final de los parámetros de una función
// Ejemplo: person (name, age, ...emails)

function sum (num, ...values) {
    console.log(num);
    console.log(values);
    console.log(num + values[0]);
    
    return num + values[1];
}
const resultado = sum(1, 1, 2, 3);
console.log(resultado);

