/*
SCOPE

1-grammarAndTypes
    03-scope.js
*/

/*
What is scope?

JS has both LOCAL and GLOBAL scope
*/

//example 1:
var x = 12; //global scope -- available anywhere in the file

function scope(){ //local scope
    var x = 33;
    var y = 10;
    console.log(x);
}
scope(); //logs 33
console.log(y); //logs undefined
console.log(x); //logs 12

//example 2:
var x = 12;

function scope(){
x = 33; //x reassigned from 12 to 33
console.log(x);
}

scope() //33
console.log(x); //33

//example 3:
var x = 1;

function scope(){
    var x = 2;
    function scopeInner(){
        var x = 3;
        console.log(x); //first to be run: 3
    }
    scopeInner();
    console.log(x); //second to be run: 2
}
scope();
console.log(x); //third to be run: 1

//example 4 constrasts with 5:
var x = 12; //third console log: 12

function scope(){
    var x = 33; //second console log: 33
    if (true){
        let x = 45;
        console.log(x); //first console log: 45
    }
    console.log(x);
}

scope();
console.log(x);

//example 5 contrasts with 4:
var x = 12;

function scopea(){
    var x = 33;
    if (true){
        var x = 45; 
        console.log(x); //runs as 45
    }
    console.log(x); //runs as 45 --> var doesn't obey 'block' scope
}

scope();
console.log(x); //runs as 12 (global)