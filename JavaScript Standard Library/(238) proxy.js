const target = {
    middleName : "khietna"
}

const handler = {
    get: function(target,property){
        console.warn(`Access property : ${property}`);
        return target[property]
    },

    set: function(target,property, val){
        console.warn(`Change property : ${property} : ${val}`);
        if(val == null){
            // throw new Error("tidak boleh null")
            target[property] = ""
        }else{
            target[property] = val
        }
    }
}

const proxy = new Proxy(target, handler)
target.firstName = "Weciez"
proxy.firstName = "Ust. Amir"
proxy.lastName = "Hamzah"

console.log(target.firstName);                  // otomatis tidak menggunakan handler
console.info(proxy.firstName);
console.info(proxy.middleName);
console.info(proxy.lastName);
console.info(target);

