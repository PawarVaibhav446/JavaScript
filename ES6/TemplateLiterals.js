// Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
let name = `Vaibhav`
console.log(name);

// With template literals, you can use both single and double quotes inside a string:
let myDogName = `My Dog Name is "ReS1"`
console.log(myDogName);

// Template literals allows multiline strings:

let myBio = 
`The quick
brown fox
jumps over
the lazy dog`
console.log(myBio);

// Template literals allow variables in strings:

let Text = `My Name is ${name}`

// Template literals allow expressions in strings:

let Data = 678
let Total = 750

let Percentage = `Percentage: ${(Data / Total * 100)}`
console.log(Percentage);

