export function sayHello(name){
    console.info(`Are you ${name}`);
}

export function sayGBye(name){
    console.info(`Good Bye ${name}`);
}

export const name = 'Adel'

export class Member{
    constructor(name){
        this.name = name
    }

    sayHello(name){
        console.info(`Hello ${name}, my name is ${this.name}`);
    }
}
