// Clase 4 Funciones flecha (Arrow function)

// Función normal
function square (num) {
    return num * num;
}

// Función flecha se puede usar var, let y const (mejor const)
const square = (num) =>{
    return num * num;
}

// Cuando solo hay un argumento se puede hacer
const square = num => num * num; //return implícito