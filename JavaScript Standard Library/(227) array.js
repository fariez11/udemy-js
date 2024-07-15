// array loop

const array = ["Febriana", "Amara" , "Rahmadina"]

array.forEach(function (value, index){
    console.log(`${index} : ${value}`);
})

    // arrow function
    array.forEach((value,index) => console.log(`${index} : ${value}`))
    array.forEach(value => console.log(value))

// array names

    const nama = []

    nama.push("Koobie")
    nama.push("Boateng")
    nama.push("Mainoo")

    console.log(nama.shift());
    console.log(nama.shift());
    console.log(nama.shift());
    console.log(nama.shift());

// array stack
    nama.push("Alejandro ")
    nama.push("Garnacho ")
    nama.push("Ferreyra ")

    console.log(nama.pop());
    console.log(nama.pop());
    console.log(nama.pop());

//  array search
    const angka = [1,2,4,5,6,7,3,3,2,3]

    console.log(angka.find(val => val > 6));       // mengambil pertama kali
    console.log(angka.findIndex(val => val > 3));  // mencari berdasarkan value (bukan array)
    console.log(angka.includes(11));
    console.log(angka.indexOf(3));                     // angka pertama yang dicari ada di index keberapa
    console.log(angka.lastIndexOf(3));                 // angka terakhir yang dicari ada di index keberapa
    
// array filter (memfilter data yang kondisinya true)
    console.log(angka.filter(val => val % 2 === 1).sort());
    console.log(angka.filter(val => val % 2 === 0).sort().reverse());

// array transform
    console.log(array.map(val => val.toUpperCase()));
    console.log(angka.reduce((acc, curr) => acc + curr));
    console.log(array.reduceRight((acc,curr) => acc + " " + curr));
    console.log(angka.filter(val => val % 2 === 0).reduce((acc, curr) => acc + curr));




