/* Variables declared with "var" keyword are function scoped.
   Variables declared with "let" & "const" are block scoped.
*/


/* Variables defined with let cannot be Redeclared.
    Eg. let name = "Vaibhav";
        let name = "ReS1";

   Variables defined with let must be Declared before use => Using a let variable before it is declared will result in a ReferenceError:
   Eg. carName = "op";
       let carName = "Volvo";

   Variables defined with let have Block Scope => Variables declared inside a { } block cannot be accessed from outside the block:
   Eg. {
        let x = 2;
       }
       x can NOT be used outside this block.
*/ 

// Redeclaring a variable with let, in another block, IS allowed:

let x = 3;
{
    let x = 5;
}
{
    let x = 4;
}

/* 
Variables defined with const cannot be Redeclared.

Variables defined with const cannot be Reassigned.

Variables defined with const have Block Scope.
*/

const name2 = "ReS1"; // JavaScript const variables must be assigned a value when they are declared:
console.log(name2);

// Constant Arrays => You can change the elements of a constant array
// But you can NOT reassign the array:

const bikes = ['BMW','HERO','HONDA'];
bikes[0] = 'KTM';
bikes.push('DUKE');
console.log(bikes);



