/*
ARROW FUNCTIONS
*/

// arrow functions were introducted in ES6. They are a more concise way of writing functions expressions
// (1)      (2)
let hi = () => {
    console.log("hi");
}

hi();

/*
    1. Set arrow function to a variable
    2. Use arrow to signify that it's a function
*/

//arrow functions are not declarations, meaning they can't be hoisted

//CONCISE BODY
let hi = () => console.log("hi");

hi();

//BLOCK BODY
let hi = () => {
    console.log("hi");
}

hi();

// CONCISE VS BODY
let apples = x => console.log(`There are ${x} apples.`)
apples(10);

//More than one parameter will require parentheses.
let apples = (x, y) => {
    console.log(`There are ${x} apples and ${y} oranges.`)
}
apples(10, 15);