const person = {}

Reflect.set(person, 'firstName', 'Eko')
Reflect.set(person, 'lastName', 'Kurniawan')

console.log(person);

console.log(Reflect.get(person,'firstName'));
console.log(Reflect.get(person,'middleName'));

console.log(Reflect.has(person,'firstName'));
console.log(Reflect.has(person,'middleName'));