// const eko = {
//     firstName : 'Eko'
// }

// const budi = {
//     lasName : 'Budi'
// }

// constructor function

function Person(lastName, nickName) {
  // param
  this.firstName = "";                                                      // property
  this.nickName = nickName;
  this.sayHello = function (name) {                                         // method
    console.log(`Hello ${name}, my name is ${this.firstName} ${lastName}, you can call me ${this.nickName}`)
  };
}

const eko = new Person("Khannedy","Lexi");
eko.firstName = "Eko";                                                      // menambahkan property
eko.sayHello("Reva");

const budi = new Person("","budh");
budi.firstName = "Budi";
budi.sayHello("Xaviera");

console.log(eko);
console.log(budi);

// Constructor Inheritance
function Group(nickname) {
  this.lastName = "Fidela";
  Person.call(this, this.lastName, nickname);                               // Inheritance
}

const member = new Group("Adel");
console.log(member);
