let myName = "Courtney";
let friend = "Ryan"; 

console.log(myName.length);
console.log(friend.length);

if(myName.length > friend.length) {
    console.log(`${myName}'s name is longer than ${friend}'s name.`)
} else {
    console.log(`${friend}'s name is longer than ${myName}'s name.`)
}

let length = 5;

if (length < 5) {
    console.log(`Ryan's name is longer!`);
} else {
    console.log(`Courtney's name is longer!`);
}

if (myName.length > friend.length) {
    console.log(`My name is longer than ${friend}'s name by ${myName.length - friend.length} letters`)
} else if (myName.length < friend.length){
    console.log(`${friend}'s name is longer than mine by ${friend.length - myName.length}`)
} else {
    console.log(`Our names are the same length.`)
}