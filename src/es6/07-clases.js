// Clase 12 - Clases

// Declarando
class Usuario {};
// Instanciando
const Bryan = new Usuario();

class User {
    //constructor
    constructor(name) {
        this.name = name;
    }
    //métodos
    speak() {
        return 'скажет привет!'
    }
    greeting() {
        return `${this.name} ${this.speak()}`;
    }
};

const bg99 = new User('Брайан');
console.log(bg99.greeting());

const js99 = new User('Диана');
console.log(js99.greeting());

// Getters y Setters
class Laptop {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    message() {
        return `La laptop es una ${this.brand} color ${this.color}`;
    }

    get laptopColor() {
        return this.color;
    }
    set laptopColor(c) {
        this.color = c;
    }
}

const Laptop1 = new Laptop ('Acer', 'Azul');
// Getter
console.log (Laptop1.laptopColor);  // uso del getter
// Setter
console.log (Laptop1.laptopColor = 'Gris'); // uso del setter


// Ejemplo de la comunidad Platzi
class Animal {
	constructor(especie, edad, patas) {
		this.especie = especie;
		this.edad = edad; 
		this.patas = patas; 
	}
	// Métodos de la clase: pueden contener cualquier lógica.
	dormir() {
		return 'Zzzz';
	}

	comer() {
		return 'Yummy!';
	}

	caminar() {
		return '¡Caminando!, la la la';
	}

	get getEdad() {
		return this.edad;
	}

	set setEdad(newEdad) {
		this.edad= newEdad;
	}
}

// Ahora instanciemos los objetos: tendremos perro, paloma y gato como objetos de tipo Animal. Al enviar el valor de los atributos como argumentos, el constructor automáticamente los asigna al nuevo objeto.
const perro = new Animal('canino', 3, 4);
const paloma = new Animal('ave', 1, 2);
const gato = new Animal('felino', 2, 4);

// Podemos acceder a los métodos desde cada objeto:
console.log(perro.dormir());	// Retorna 'Zzzz'
console.log(paloma.comer()); // Retorna 'Yummy!'
console.log(gato.caminar()); // Retorna '¡Caminando!, la la la'

// Usamos los getter para obtener los valores de los atributos y los setters para reasignarlos.
perro.getEdad; // Retorna 3
gato.setEdad = 3; // Cambia su atributo edad a 3