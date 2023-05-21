// Clase 17 Crear listas con set

const list = new Set();

//Añadimos elementos con el método .add de las listas Set
list.add('Mercury');
list.add('Venus').add('Earth');
list.forEach((value) => console.log(value));
console.log(list);
