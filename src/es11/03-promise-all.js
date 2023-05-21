// Clase 28 - Promise All - Settled

// Promise.all() se resolverá, si y solo si todas las promesas 
// fueron resueltas. 
const promesa1 = new Promise((resolve, reject) => reject("Rechazada"));
const promesa2 = new Promise((resolve, reject) => resolve("Resuelta1"));
const promesa3 = new Promise((resolve, reject) => resolve("Resuelta2"));

Promise.all([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))

Promise.allSettled([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta))
