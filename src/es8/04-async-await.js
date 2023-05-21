// Clase 21 - Async Await

const funcionPromesa = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(()=> resolve('Datos'), 2000)
        : reject(new Error("Error de promesa"));
    });
}
const funcionAsincrona = async () => {
    const traerDatos = await funcionPromesa();
    console.log('Acción 3');
    console.log(traerDatos);
    console.log('Acción 4');
}

console.log('Acción 1');
funcionAsincrona();
console.log('Acción 2');

// output: 
// Acción 1
// Acción 2
// Acción 3
// Datos
// Acción 4