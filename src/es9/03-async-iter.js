// Clase 23 Async Iterators

// Async await generators
async function* funcionGenerador() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const data = funcionGenerador();
data.next().then(response => console.log(response.value));
data.next().then(response => console.log(response.value));
data.next().then(response => console.log(response.value));
console.log("Acción 1");

// Async Await con un ciclco for
async function arregloNombres(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = ['Bryan', 'JC', 'Mike'];
arregloNombres(names);
console.log('Acción 1');