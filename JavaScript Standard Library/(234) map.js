const data = new Map()
data.set("Name", "Manchester United")
data.set("Address", "Manchester")

console.log(data);
console.log(data.get("Address"));

for (const val of data) {
    console.info(val);
    console.info(`${val[0]} : ${val[1]}`);
}

console.log(data.delete("Address"));
console.log(data.has("Address"));

data.forEach((val,key) => {
    console.log(`${key} : ${val}`);
});

console.log(data.clear());
console.log(data);