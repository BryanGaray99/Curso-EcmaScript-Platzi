// Clase 30 - Dynamic import
const button = document.getElementById('btn');
button.addEventListener('click', async function () {
    const module = await import('./module.js');
    console.log(module);
    module.saludo();
});