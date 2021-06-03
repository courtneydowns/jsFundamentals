/*
HOISTING

1-grammarAndTypes
    04-hoisting.js
*/

//example 1: undefined
console.log(scissors);
var scissors = 'blue';

//example 1 breakdown: order in which code is run
var scissors;
console.log(scissors);
scissors = 'blue';

//example 2: undefined, 10...hoisting inside of functions, just like in example above (global scope)
function hoistTest(){
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}

hoistTest();

//example 2 breakdowns:
function hoistTest(){
    var testVar;
    console.log(testVar);
    testVar = 10;
    console.log(testVar);
}

hoistTest();