console.log(Symbol("firstName") === Symbol("firstName"));


const firstName = Symbol("firstName")
const lastName = Symbol("lasName")

const person = {}
person[firstName] = "Gita"
person[lastName] = "Sekar"

console.log(person);
console.log(typeof  person);

// symbol for

const people = {}
people[Symbol.for("firstName")] = "kierran"
people[Symbol.for("lastName")] = "phoenix"

console.log(people);
console.log(people[Symbol.for("firstName")]);
console.log(people[Symbol.for("lastName")]);