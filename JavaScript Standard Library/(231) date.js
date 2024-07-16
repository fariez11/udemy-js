// new Date()    (check results in the output below but still using quokka)
console.info(new Date());
console.info(new Date(1999,3,29));
console.info(new Date(1999,1,8,1,0,0,0));
console.warn(new Date(1721104457696));      // current milis


// epoch & unix timestamp   (milisecond)
console.log(new Date().getTime());
console.log(new Date(1999,7,20).getTime());
console.log(new Date(1999,1,8,1,0,0,0).getTime());
console.log(new Date(1721104457696).getTime());
console.log(Date.now());


// date parsing
const epoch = Date.parse("2006-07-14T11:08:01.123+07:00")

console.log(epoch);
console.info(new Date(epoch));


// getter & setter
const tanggal = new Date()

console.log(tanggal.getDate());
console.log(tanggal.getMonth());
console.log(tanggal.getFullYear());
console.log(tanggal.getHours());
console.log(tanggal.getMinutes());
console.log(tanggal.getSeconds());
console.log(tanggal.getMilliseconds());
console.log(tanggal.getTimezoneOffset());          // konversi menit

