// Clase 25 - Try Catch
// La característica agregada es que en el catch se le puede
// pasar un error personalizado

try {
    funcion1();
} catch (error) {
    console.log(error);
}

// Sin el error del catch
try {
    funcion2();
} catch {
    console.log("Error!!!"); 
}