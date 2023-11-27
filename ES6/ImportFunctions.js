import User ,{printAge, printName} from './ExportFunctions.js'

const newUser = new User('Vaibhav', 22)
console.log(newUser);

printAge(newUser)
printName(newUser)