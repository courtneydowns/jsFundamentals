/*
SCOPE

-scope is how a computer keeps track of all the variables in a program
-think about global scope as the planet earth, and everything that is on earth is global
-think about local scope as Indianapolis

-Scope tracks variables that are local or global. These variables can be referenced later. If that variable is not "in their current scope", we can't use it.
*/

//example1
let x = "declared outside of the function";
//^^^globally scoped

function exampleScope() {
    let x = "declared inside the function"; 
    // ^^^^^locally scoped, declaring new variable of x, not reinitializing
    
    // console.log(x);
    console.log("We are inside the function exampleScope");
}

exampleScope();
console.log(x, "This is line 18");
//^^^globally scoped

//example2
let color = "blue"

function skyColor() {
    color = "pink"; //reinitializing 
    // console.log(color);
}

skyColor();
console.log(color);

/*
    VAR - scoped to the nearest function block
    LET - scoped to the nearest eclosing block
    CONST - cannot be reinitialized
*/

var color = "blue";

function skyColor() {
    var color = "pink";
    if (1 == 1) {
        var color = "purple"
        console.log(color); //purple <-- locally scoped inside the function
    }
    console.log(color); //purple (purple is the closest declaration to this console log...reads top down) <-- locally scoped inside the function...doesn't even consider pink
}

skyColor();
console.log(color); //blue <-- because it's globally scoped and we didn't re-initializing it
//VAR is scoped to the nearest function block of code

//LET
let color = "blue";

function skyColor() {
    let color = "pink";
    if(1 == 1) {
        let color = "purple";
        console.log(color); //purple
    }
    console.log(color); //pink
}

skyColor();
console.log(color); //blue
//The main reason that we use let is so that we don't have to worry about any bleeding/scope creeping in our function/conditionals
