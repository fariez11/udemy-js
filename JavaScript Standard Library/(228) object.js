// freeze & seal

const person = {
    firstName: "Wibowo",
    lastName: "Cahyono"
}

Object.seal(person)             // tidak bisa dihapus saja

person.firstName = "Budi"
person.middleName = "Octaviani"
delete person.lastName

console.log(person);

Object.freeze(person)           // tidak bisa diubah dan dihapus

person.firstName = "Susi"
person.middleName = "Trianawati"
delete person.lastName

console.log(person);

// assign
const target = { firstName : "Gita"}
const source = { lastName : "Sekar"}

Object.assign(target,source)

console.log(target);
console.log(source);

const attrSame = {firstName  : "Shani", lastName : "Indira"}
Object.assign(target,attrSame)

console.log(target);

// property name & value (:array / result array)

console.log(Object.values(person));
console.log(Object.getOwnPropertyNames(person));
    


