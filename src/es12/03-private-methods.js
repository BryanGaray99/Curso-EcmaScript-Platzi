// Clase 32 Private methods

// Con # hacemos un método privado que solo pueda ser accedido
// dentro de la clase, sin el "#" saldría el resultado, con "#"
// resulta undefined
class user {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    // métodos
    #speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const bg99 = new user ("Bryan", 22);
console.log(bg99.uAge);
console.log(bg99.uAge = 23);