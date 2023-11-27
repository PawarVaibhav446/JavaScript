
// Spread = Used to split up array elements OR Object Properties

let oldArray = [1,2,3,4,5];
const newArray = [...oldArray, 6, 7]

// Output: [1,2,3,4,5,6,7]

// Rest = Used To Merge a list of function arguments into an array

function sortArgs(...args){
    return args.sort();
}

