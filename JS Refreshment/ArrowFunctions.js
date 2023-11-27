//Different Syntax For Creating JS Functions.

// Notes for Arrow Function:
// 1. function keyword NOT needed
// 2. let/const variableName = (argument) => {function body}
// 3. short hand: curly braces and return keyword NOT needed, return result directly after =>
// 4. brackets NOT needed in SINGLE parameter function's argument

let name = "Vaibhav";

//Normal Function Syntax:
function myOldFnc(name){
    console.log(name);
}

// Arrow Function Syntax:
const myNewFnc = (name) => {
    console.log(name);
}

let number = 2;
const Multiply = number => number  * 2; //Short Syntax

myOldFnc();
myNewFnc();


let sum1 = (a, b) => {
    return a + b;
}

let sum2 = (a, b) => a + b;

sum1(1,6);
sum2(1,6)


let isPostive = n => {
    return n >= 0
}

let isGreaterThanZero = n => n >= 0

isPostive(10);

let RandomNumber = () => {
    return Math.random;
}

let RandomGenerator = () => Math.random

document.addEventListener('click', () => {
    console.log('Click');
})

// Real Life Example: 

class Person{
    constructor(name){
        this.name = name
    }

    printNameArrow(){
        setTimeout(() => {
            console.log('Arrow: ' + this.name);
        }, 100)
    }

    printNameFunction(){
        setTimeout(function() {
            console.log('Function: ' + this.name);
        }, 100)
    }
}

let Person = new Person('vaibhav')
Person.printNameArrow()
Person.printNameFunction()