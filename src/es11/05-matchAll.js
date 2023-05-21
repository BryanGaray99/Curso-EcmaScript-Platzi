// Clase 29 MatchAll
// El método matchAll de los strings devuelve un iterable 
// con todas las coincidencias del string específico 
const regex = /\b(Apple)+\b/g;

const fruit = 'Banana, Kiwi, Apple, Orange';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}
