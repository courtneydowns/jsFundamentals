/*
LOOPS

3-LOOPS
    01-forLoops.js
*/

/*
Loops offer a quick and easy way to do something repeatedly

There are many different kinds of loops but they all do roughly the same thing:
    For statement
    do while
    while
    labeled
    break
    continue
    for in
    for of
    .forEach
    .map
*/

//loop structure: a) creation of an indexing variable, b) a run condition, c) change to the indexing variable

//count to 10 from 0 and log the numbers:
for (let i = 0; i <= 10; i++){
    console.log(i);
}
// ++ means increasing the value by 1 each time around.


//loops can run infinitely
// for (let i =0; i++){
//     console.log(i);
// }

//counts to -25 by -3, starting from 2, logs the numbers
for (let i = 2; i >=-25; i = i-3){
    console.log(i);
}

//display the letters in a name individually
let firstName = 'Kinkade'

for (let i = 0; i <firstName.length; i++){
    console.log(firstName [i], i);
}

//for loops can use lots of variables:
let start = 2;
let stop = Math.floor(Math.random()*30); //math.floor says to round down to whole numbers. math.random is a number between 0 and 1 (in this case it will be 0 through to 29 because every number sequence starts with 0).
let increment = 3;

for (let i = start; i <= stop; i = i + increment){
    console.log(i);
}

// forLoops will continuously run for you. ifConditionals will run only under certain circumstances if a conditional isn't met.