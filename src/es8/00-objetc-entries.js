// Clase 19 - Objects to arrays

const countries = { 
    MX: 'México', 
    CO: 'Colombia', 
    PE: 'Peru', 
    EC: 'Ecuador'
};

// Transformar objeto a array
console.log(Object.entries(countries));
// output:
// [
//     [ 'MX', 'México' ],
//     [ 'CO', 'Colombia' ],
//     [ 'PE', 'Peru' ],
//     [ 'EC', 'Ecuador' ]
// ]

// Extraer values de un objeto a un array
console.log(Object.values(countries));
// output: [ 'México', 'Colombia', 'Peru', 'Ecuador' ]

// Extraer keys de un objeto a un array
console.log(Object.keys(countries));
// output: [ 'MX', 'CO', 'PE', 'EC' ]