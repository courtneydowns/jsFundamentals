/****
First create an object about themselves call the variable myInformation. 
It will have the following properties: 
Name: String
Age: Number
numberOfSiblings: Number
Pets: Boolean
PetNames: Array
mostRecentMovieWatched: String
carsOwned: Array {make: String, model: String}
favoriteSinger: String
***/

let myInformation = {
    name: 'Courtney',
    age: 34,
    numberOfSiblings: 0,
    pets: true,
    petNames: ['Mara'],
    mostRecentMovieWatched: 'Infinity War',
    carsOwned: [{make: 'Subaru', model: 'Outback'}],
    favoriteSinger: 'Britney Spears',
};

let studentInformation1 = {
    name: 'Kara Smith',
    age: 41,
    numberOfSiblings: 4,
    pets: true,
    petNames: ['PB', 'Bunny'],
    mostRecentMovieWatched: 'Labrynth',
    carsOwned: [
        {make: 'Toyota', model: 'Prius'},
        {make: 'Honda', model: 'Civic Hybrid'},
        {make: 'Honda', model: 'Civic'},
    ],
    favoriteSinger: 'David Bowie',
}

let studentInformation2 = {
    name: "Mitch Strange",
    age: 34,
    numberOfSiblings: 3,
    pets: false,    
    PetNames: [],
    mostRecentMovieWatched: "Captain America: Civil War",
    carsOwned: [{make: "Saturn", model: "POS"}],
    favoriteSinger: "Jason Isbell",
};

/***
Next Challenge is to go into a group and have everyone share their object by 
sharing their screen. Anyone not currently sharing the screen will create a new 
variable called studentInformation1 and copy their object. Then so on and so 
forth, creating an object for each student in your group (studentInformation2, 
studentInformation3, etc.). You should have an object for each person in 
your group.
Create a new array with the variables that you created with your group.
***/

let arr = [myInformation, studentInformation1, studentInformation2];

console.log(`In our group we have ${arr[0].name}, and ${arr[1].name}), and ${arr[2].name}. ${arr[1].name} has a ${arr[1].carsOwned[0].make} and ${arr[1].numberOfSiblings} siblings.`)

/***
For the final part -  console log a few sentences from the newly created 
array with the information you've all shared. 
Example. "In our group we have Taylor, Tony, and Marco. Marco has a 
Honda Civic and 2 siblings. Taylor's favorite singer is Hozier and they watched
"The Woman in the Window" recently. Tony is 24 years old has a dog named Bo. 
***/