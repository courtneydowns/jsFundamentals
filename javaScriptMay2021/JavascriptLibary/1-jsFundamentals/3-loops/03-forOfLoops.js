/*
FOR OF LOOPS
*/

//of requires that your 'thing' you're looping through be iterable--that means it needs
//to be numbered

// let student = {name: 'Courtney', isAwesome: true, degree: 'javascript', week: 1};

// for (item of student){
//     console.log(item);
// }

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'ragdoll'];

for (cat of catArray){
    console.log(cat, 'says meow');
}

