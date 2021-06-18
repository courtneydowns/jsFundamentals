/*
HOISTING
Hoisting - variables and functions are committed to memory to be referenced later. Contrary to what the name might suggest, nothing is being moved.
*/

console.log(firstName);
let firstName = "Courtney"
//error....the code is being read top to bottom...behind the scenes, firstName = "Courtney" is being committed to memory and then being declared, saving the variable firstName for later.

console.log(firstName);
var firstName = "Courtney"; //undefined
console.log(firstName); //Courtney

exampleScope(); //code reads TOP to DOWN. It sees we are invoking a function called example that hasn't been made yet and store it into memory. 

function example() {
    //Once it reaches a function called example, it is going to run.
    console.log("I HAVE BEEN HOISTED!");
} 
//I HAVE BEEN HOISTED!

function petName(name) {
    console.log(`My cat's name is ${name}`);
}

petName("Mara");

petName("Mara"); //Context execution is another name for hoisting. It understand the context and will execute anyway.

function petName(name) {
    console.log(`My cat's name is ${name}`);
}

/*
ONLY DECLARATIONS ARE HOISTED
*/
console.log(hello);
hello = "hi";
//gives an error. won't be committed to memory. It is not being declared.

console.log(pet1 + " and " + pet2);

var pet2 = "Mara";
pet1 = "Bubby";
//gives an error becase it doesn't know what pet1 is. will not be committed to memory.