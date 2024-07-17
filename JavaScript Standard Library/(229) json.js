// stringify & parse

const person = {
    firstName : "Nabi Muhammad",
    lastName : "Shalallahu Alaihi Wassalam",
    date : "12 Rabiul Awwal / 20 April 571 Masehi",
    address : {
        country : "Arab Saudi",
        city : "Mekkah"
    }
}

const json = JSON.stringify(person)
const jsonObject = JSON.parse(json)

console.log(json);
console.log(jsonObject);