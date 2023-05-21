// Clase 31 - Promise any

// Promise.any() es otra forma de manejar varias promesas, 
// que retornará la primera promesa que sea resuelta y 
// rebotará si todas las promesas son rechazadas.

const promesa1 = new Promise((resolve, reject) => reject("Rechazada1"));
const promesa2 = new Promise((resolve, reject) => reject("Rechazada2"));
const promesa3 = new Promise((resolve, reject) => resolve("Resuelta1"));

Promise.any([promesa1, promesa2, promesa3])
    .then(response => console.log(response));