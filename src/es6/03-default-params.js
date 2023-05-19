// Clase 6 - Parámetros por defecto

// Asignar valores por defecto con or ||
function newUser (name, age, country) {
    name = name || 'Lorem';
    age = age || 22;
    country = country || 'FR';
    console.log(name, age, country);
}
newUser();
newUser('Bryan', 23, 'EC');

// Forma que permite ES6
function newAdmin (name='Jean-Luc', age=50, country='FR') {
    console.log(name, age, country);
}
newAdmin();
newAdmin('Willian', 40, 'USA');
