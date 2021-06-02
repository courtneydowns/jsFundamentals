/*
IF CONDITIONALS
*/



let isOn = true;

// == is used for same value (for example: 6 and "6") but not type. Excludes true and false.

if (isOn == true){
    console.log('The light is on!');
}

if (isOn){
    console.log('The light is on, yay!');
}

let weather = 65

if (weather < 70){
    console.log('Wear a jacket!');
}

let string = false;

// === is used for same value and same type.

// || is the OR logical operator, meaning one expression has to be true for a block of code to run

// for any conditional to run, the expression has to be true (the value of the expression does not have to = true)

if (string === 'Courtney' || string === false){
    console.log('if statements and conditionals are powerful!');
}