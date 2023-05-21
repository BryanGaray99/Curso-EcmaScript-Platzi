// Clase 15 Generadores

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const i = iterate(['Bryan', 'Jannina', 'Manito', 'Manita']);
// Imprimir el objeto que contiene el generador
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());

// Imprimir el valor que posee el objeto del generador
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);


//Playground 1
export function* getId() {
    let i = 0;
    while (true) {
      yield i++
    }
  }
  
const id = getId();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);

//Playground 2
export function* getId() {
    let i = 0;
    while (true) {
      yield Math.random().toString(36).substring(5).toUpperCase();
    }
  }
  
const id2 = getId();
console.log(id2.next().value);
console.log(id2.next().value);
console.log(id2.next().value);
console.log(id2.next().value);
console.log(id2.next().value);
