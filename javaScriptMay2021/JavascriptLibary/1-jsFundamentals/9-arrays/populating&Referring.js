/*
ARRAYS
*/

//what is an array?
//has [] brackets
//they can hold multiple data types
//arrays can list datatypes in an ordered, numbered way

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
//hidden keys:    0           1        2      3     4    5      6        
console.log(typeof students); //typeof doesn't tell me my variable is an array -> object
console.log(students instanceof Array); //instanceof tells me my array is an array -> can use this to check if something is an array
console.log(students[2]); //Rhys
console.log(students[1]); //Tony
console.log(students[6]); //['Ryan', 'Iesha']

let name = students[6][1];
console.log(name);
console.log(`Hello ${name}, you look nice today!`) 

//recall for-of loop --> gives the values of the array
let food = ['Pecan Pie', 'Shrimp', 'Quesadillas', 'Cheesecake', 'Hotdog'];
// for (f of food){
//     console.log(f +' is amazing!');
// }

// //array methods
// food.push('Pizza'); //added to the end of the array
// console.log(food);
// food.splice(1, 1, 'Bananas'); //replaces 'Pizza' with 'Bananas' -> splice asks for an insertion point, how many things to remove, 
// //then the items or items to add
// console.log(food);
// food.splice(2, 0, 'Sweet Potato Pie'); //add 'Sweet Potato Pie in front of Quesadillas, but don't remove anything
// console.log(food);

// food.pop(food); //pop removes the last element of an array
// console.log(food); //removes 'Pizza'

// food =  food.slice(2,4); //the first number is the first item to slice from the array, while the second number is the stop position not to be included // brings back 'Sweet Potato Pie' and 'Quesadillas
// console.log(food);
// food = food.slice(2,5); //brings back 'Sweet Potato Pie, 'Quesadilla, 'Cheesecake'

//forEach allows us to iterate with loops specifically, and we can directly grab both the elements and their index numbers

// food.forEach((f) => console.log(f));

food.forEach((food, index) => //in a for loop, anything inside the {parenthesis} is to be repeated, now the code to be repeated is anything in the parenthesis after the fat arrows number. forEach is going to loop through the elements of the array. Takes a callback function where the first object is the argument of the array and index is the location
{
    console.log(food);
    console.log(index);
})

food.forEach((food, index) => {
    console.log(`The ${food} food in our array is at position ${index}`);
})



let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];

movies.push('The Force Awakens');
console.log(movies);
movies.splice(3, 1, 'The League of Extraordinary Gentlemen');
console.log(movies);

movies.forEach(movie => console.log(movie));
console.log(movies.length);

//let's do the following with an array:
//we will check if we are working with an array
//flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
//using a method only, let's print the values of the new arranged array

let arr = new Array(1,2,3,4,5);

if (arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}


