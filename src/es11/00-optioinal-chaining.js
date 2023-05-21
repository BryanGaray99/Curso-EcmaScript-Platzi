// Clase 25 - Optional Chaining

// A veces hay propiedades o datos que dejan de existir en el contexto
// de una consulta a una api o a una base de datos, pero no estamos 
// seguros si esa propiedad existe o no.

// La solución para que no se rompa el programa es preguntar si está
// la propiedad antes de intentar llamarla y si no está tendremos un
// undefined y ya no un error. 

const users = {
    bg99: {
        name: 'Bryan',
        country: 'EC',
        age: 23
    }, 
    js99: {
        name: 'Diana',
        country: 'EC'
    }
}

console.log(users.bg99.age);
// Objeto y propiedad existen

// Usando optional chaining
console.log(users.js99?.age);
// output: undefined
console.log(users?.en64?.age);
// output: undefined sin error

// Sin el optional chaining
console.log(users.js99.age); 
// Objeto existe pero propiedad no entonces -> undefined
console.log(users.en64.age); 
// Ni Objeto ni propiedad existen ->
// TypeError: Cannot read properties of undefined (reading 'age')

