class Person{
    name = 'Max'
    myFunc = () => {
        return 0;
    }
}

const myPerson = new Person();


class Car{
    // constructor(){
    //     this.wheel = 'alloy' // ES6
    // }

    wheel = 'alloy' // ES7

    printWheel = () => {
        console.log(this.wheel);
    }
}

class Brand extends Car {
    constructor(){
        super();
        this.name = 'BMW';
        this.wheel = 'alloy';
    }

    printMyName(){
        console.log(this.name);
    }
}

const newCar = new Car();
newCar.printWheel();
newCar.printMyName();