// Clase 10 enhanced object literals

// Se puede instanciar el objeto
function newUser1(user, age, country, uId) {
    return {
        user: user,
        age: age,
        country: country,
        uId: uId,
    }
}
console.log(newUser1("Bg99", 23, "EC", 1));
// Pero si nuestra intención es user sea igual user
// y así el resto entonces podemos escribir.
function newUser2(user, age, country, uId) {
    return {
        user,
        age,
        country,
        uId,
    }
}
console.log(newUser2("Js99", 23, "EC", 2));


// Ejemplo Perritos
function Dog (name, age) {
    this.name = name;
    this.age = age;
    this.barking = function () {
        return `${this.name} dice guau! y tiene ${this.age} añitos`
    }
}

function barkingDogs (dogList) {
    for (const doggy of dogList) {
        const dog = new Dog (doggy.name, doggy.age);
        console.log(dog.barking());
    }
}

dogList = [{ name:"Cuqui", age:15 },
    { name:"Loki", age:4 },
    { name:"Milena", age:15 }
]

barkingDogs(dogList);