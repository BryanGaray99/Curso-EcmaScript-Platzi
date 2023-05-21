// Clase 24 Flat Map

// Flat: Aplanar matrices anidadas en una sola matriz con
const arreglo = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
console.log(arreglo);
// .flat(depth) -> Depth sería el nivel de profundidad del arreglo o 
// cuántos arreglos hay contando el padre y los sub arreglos.
console.log(arreglo.flat(3));

// FlatMap: Aplanar y transformar la matriz
const arreglo2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// A FlatMap se le pasa un índice y una función flecha para 
// expresar una operación a realizar sobre la matriz. 
console.log(arreglo2.flatMap(v => [v*10]));


