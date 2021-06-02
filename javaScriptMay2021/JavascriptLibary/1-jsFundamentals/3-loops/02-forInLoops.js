/*
FOR IN LOOPS
*/

//in does not require that the 'thing' you loop through be numbered

let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1};

for (item in student){
    console.log(item); //key= name, awesome, degree, week (because we are doing an object)
    console.log(student[item]);//logging the value
}

let catArray = ['tabby', 'british shorthar', 'burmese', 'maine coon', 'rag doll'];

for (cat in catArray){
    console.log(cat);//every index (0-4)
    console.log(catArray[cat]);//log the type of cat
}

//let's write a for-in loop that capitalizes the first letter of a name

let student = 'cOurtneY'
let capName;

for (n in student){
    if (n == 0){ //n is the index in this case
        capName = student[n].toUpperCase();
    } else {
        capName += student[n].toLowerCase();// += means everything on
    }
}
console.log(capName);

