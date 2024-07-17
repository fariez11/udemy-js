// encode & decode uri

let url = 'https://contoh.id/?name=Ellysa'
console.log(url);

const encoded = encodeURI(url)
console.log(encoded);
console.log(decodeURI(encoded));

const val = "KH.&Maftuh=Said"
url = "https://daruttauhidmalang.id/?name="

const encodeComp = encodeURIComponent(val)
console.log(url + encodeComp);

const decodeComp = decodeURIComponent(encodeComp)
console.log(decodeComp);