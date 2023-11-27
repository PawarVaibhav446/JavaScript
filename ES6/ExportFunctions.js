export default class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

export let printName = (name) => {
    console.log(`User's Name is ${name}`);
}

export let printAge = (age) => {
    console.log(`User's Age is ${age}`);
}