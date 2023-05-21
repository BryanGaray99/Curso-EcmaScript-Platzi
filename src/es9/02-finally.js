// Clase 23 .finally

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
    .then(response => console.log('Then...' + response))
    .catch(err => console.log('catch...' + err))
    .finally(()=> console.log('Finally'));
