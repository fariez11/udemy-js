class Person{

}

Person.prototype.sayHello = function(){

}

const eko = new Person()
console.log(eko)

// constructor, property & method in Class
class People{
    constructor(name){                                      // constructor
        this.name = name                                    // property
    }

    sayHello(name){                                         // method
        console.log(`Hello ${name}, my name is ${this.name}`);
    }
}

const result = new People("Xaviera")
console.log(result)
console.log(result.name);

result.sayHello("Dea")
