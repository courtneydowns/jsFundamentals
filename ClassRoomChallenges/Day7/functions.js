/*
Functions do the following:
-They can take some input that the function can handle or process
-They process the input is given to them
-Sometimes they return a value
-They can be used multiple times
*/

function redLight() {
    //Place foot on brake
}

function yellowLight() {
    //Do I brake or press the gas?
    /*
    Is there a car in front of me?
    Do I have a child in the car?
    Do I see cops nearby?
    */
}

function yellowLight(car, baby, cops) {
    //if cops --- do this
    //if baby --- do this
}

//In order to have a function run, you much CALL THE FUNCTION

function greeting() {
    //everything between the curly brackets is where the code gets executed when the function is called
    console.log("Hello from greeting");
}

greeting(); //calling the function



//Functions with expressions
//Order matters
//The key difference between a function expression and function declaration is...
//declarations get hoised, BUT expressions do not
let greetingExpression = function(){
    console.log("hellow from greeting Expression");
};

greetingExpression();

//Create a function that, when invoked, lists out the number 1-10
//Use a For - Loop

//Create a function
//Don't forget to call the function
//Loop must be inside the function

let number = function(){
    for (let i = 1; i <= 10; i++) {
    console.log(i); 
    }
}

number();

//PARAMETERS
//Function parameters are place holders for data that we pass into a function when calling or 'invoking' the function

function studentGreeting(name){
    console.log(`Greeting ${name}`);
}

studentGreeting("Courtney");
studentGreeting("Ryan");

/*
- Write a function that takes two parameters:
    - one parameter is for a first name,
    - the other parameter is for a last name;
    - have them come together in a variable inside the function.
    - console.log 'Hello, my name is <your name>
    - call (or invoke) your function
*/

function dynamicGreeting(firstName, lastName){
    let fullName = `${firstName} ${lastName}`
    console.log(`Hello, my name is ${fullName}`);
}

dynamicGreeting("Courtney" , "Downs");

function area(length, width){
    let areaCalc = length * width;
    return areaCalc
}

let area1 = area(4, 10);
let area2 = area(2, 6);
console.log(area1, area2);

//Write a function given the Length, Width, and Height return the volume of the Cuboid;
//Console log the returned value

function cubeVolume(length, width, height){
    let cubeVolumeCalc = length * width * height;
    return cubeVolumeCalc
}

let volume1 = cubeVolume(5, 7, 10);
console.log(volume1);

//Write a function that accepts a dog's age and returns a human age
//console.log the returned value
//Formula to use: HumanAge = (dogAge - 2) * 4 + 21

function convertHumanToDogYears(dogAge){
    let humanAge = (dogAge -2) * 4 + 21
    return humanAge
}

let bubbyAge = convertHumanToDogYears(2)
console.log(bubbyAge)