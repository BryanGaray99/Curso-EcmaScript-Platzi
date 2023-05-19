// Clase 4 Var vs Let vs Const
//--------------------------------------------------------
// Reasignación
// Var - si
var lastName = 'Garay'; //Inicializar y asignar variable
lastName = 'Benavidez'; //Reasignar
console.log(lastName);

// Let - si
let planet = 'Jupiter'; //Inicializar y asignar variable
planet =  'Saturn'; //Reasignar
console.log(planet);

// Const - no 
const star = 'Betelguese'; //Inicializar y asignar variable
star =  'Vega'; // Intento para reasignar
console.log(star); // Error

// ------------------------------------------------------
// Ámbito (scope)
const subjects = () => {
    // Creamos un bloque denotado por handle bars "{}"
    if (true) {
        var subject1 = 'math'; // ámbito global 
        let subject2 = 'physics'; // ámbito de bloque
        const subject3 = 'chemistry'; // ámbito de bloque
    }
    console.log(subject1);
    console.log(subject2); // error
    console.log(subject3); // error
}
subjects();


//---------------------------------------------
