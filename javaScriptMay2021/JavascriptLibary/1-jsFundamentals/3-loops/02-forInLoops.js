/*
FOR IN LOOPS
*/

//in does not require that the 'thing' you loop through be numbered

let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1};

for (item in student){
    console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'british shorthar', 'burmese', 'maine coon', 'rag doll'];

for (cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}

//let's write a for-in loop that capitalizes the first letter of a name

let student = 'cOurtneY'
let capName;

for (n in student){
    if (n == 0){
        capName = student[n].toUpperCase();
    } else {
        capName += student[n].toLowerCase();
    }
}
console.log(capName);

