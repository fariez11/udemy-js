// create regex
const regexA = /rasmus/
const regexB = new RegExp("winther")
const regexC = new RegExp(/hojlund/)


// test regex
const kalimat = "Manchester United optimis tsunami trofi musim ini \n manchester"
const regex = /juara/
const halu = /musim ini/

console.log(halu.exec(kalimat));
let result = regex.exec(kalimat)
console.log(result);

console.log(halu.test(kalimat));
result = regex.test(kalimat)
console.log(result);

// regex modifier
const regex1 = /trofi/ig           // new RegExp(/piala/,"g")
const regex2 = /juara/ig

result
if((result = regex1.exec(kalimat)) !== null){
    console.info(result);
}

if((result = regex2.exec(kalimat)) !== null){
    console.info(result);
}


// advance regex

const regex3 = /^trofi/igm              // cari berdasarkan kata diawal saja

while((result = regex3.exec(kalimat)) !== null){
    console.info(result);
}
const regex4 = /ek[aiueo]/ig
const nama = "eka eki eku eke edo eko"

while((result = regex4.exec(nama)) !== null){
    console.info(result);
}

// regex string
console.log(nama.match(/ek[aiueo]/ig));
console.log(nama.search(/ek[aiueo]/ig));
console.log(nama.replace(/ek[aiueo]/i,"kamu"));
console.log(nama.replaceAll(/ek[aiueo]/ig, "aku"));
console.log(nama.split(/e/ig));
console.log(nama.split(/ /ig));
console.log(nama.split(" "));
