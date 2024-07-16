let result = Boolean(true)

console.log(result);
console.log(typeof result);
console.log(result.toString());
console.log(!result.valueOf());

result = new Boolean(false)                         // tidak disarankan menggunakan new Boolean
console.log(typeof result);

