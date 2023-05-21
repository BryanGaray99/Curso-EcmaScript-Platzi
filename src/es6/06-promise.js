// Clase 11 - Promesas

const promiseFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Promesa hecha!');
        } else {
            reject('Promesa rechazada');
        }
    })
}

// Se puede tener diferentes .then
promiseFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));