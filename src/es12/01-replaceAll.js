// Clase 31 Replace All

const texto = "JavaScript es un maravilloso lenguaje de programación. JavaScript es muy usado en el desarrollo web.";
// Método replace: 1er argumento - texto anterior
//                 2do argumento - texto nuevo
// Solo se reemplaza la primera coincidencia
const textoReemplazado = texto.replace("JavaScript", "TypeScript");
console.log(textoReemplazado);

// Método replace all para reemplazar todas las coincidencias
const textoReemplazadoAll = texto.replaceAll("JavaScript", "TypeScript");
console.log(textoReemplazadoAll);