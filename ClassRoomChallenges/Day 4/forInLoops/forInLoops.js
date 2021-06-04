//forInLoops are primarily used for objects
//forOutLoops are primarily used for arrays

let student = {
    name: "Tony", //use quotes because it's a string
    //"name" is a property (key), "Tony" is the value
    awesome: true, //don't put in quotes because it's a boolean
    certification: "JavaScript",
    week: 1, //don't put in quotes because it's a number
    item: "bag"
};

console.log(student); //prints off entire object
console.log(student.name); //prints off just "Tony"
console.log(student["name"]); // prints off only "Tony"

//For in loops count the enumerable (countable) properties in an object.
//Objects don't have indexes, however their properties can be counted.
//Loops iterate...they go on until they reach the end.

//key(property) - think of a day IN an object. A key goes in to a lock for it to correctly work and unlock. So for in loops are b est used with objects.

// console.log(student.name);
// console.log(student["name"]);

for (item in student) { //property references property inside of object of "student". property is "name", "awesome", etc. "student" is the object
    console.log(item); //lists all the properties, "name", "awesome", "certification", "week", "bag"
    console.log(student[item]); //grab each property in the "student" object: "Courtney", "true", "JavaScript", "1", "true"
}

// the for in loop iterates over a student object
// each iteration returns a key/property(item)
// the key/property is used to access the value of the key/property
// the value of the key/property is student[item]

/* BRONZE
    - Using a for in loop, console.log the name of each character from the members key in the fellowshipOfTheRing

*/

/* SILVER
    -Add a conditional to the for in loop that checks if the characters name does NOT begin with a vowel. Then, using string interpolation, console.log either '__'s name does not begin with a vowel '__'s name does begin with a vowel;.
*/

/* GOLD
    -Declare a globally scoped variable of arr that is initialized as an empty array. If the characters name does not begin with a vowel, add that character to the new array, and then console.log the array/
*/

let fellowshipOfTheRing = {
    members: {
      Gandalf: "Staff",
      Frodo: "Sting",
      Sam: "Lembas Bread",
      Aragorn: "Anduril",
      Legolas: "Bow of the Galadhrim",
      Gimli: "Walking Axe",
      Pippin: "Barrow Blades",
      Merry: "Barrow Blades",
      Boromir: "Horn of Gondor",
    },
    purpose:
      'To take the One Ring to Mordor, where it is to be "cast into the fiery chasm from whence it came," in order for it to be destroyed and Sauron\'s power to come to an end.',
    formed: "25 October, 3018",
    dissolved: "26 February, 3019",
  };

  console.log(fellowshipOfTheRing.members.Gandalf);
  console.log(fellowshipOfTheRing["members"]["Gandalf"]); // members and Gandalf in quotes because referencing a property (key)
