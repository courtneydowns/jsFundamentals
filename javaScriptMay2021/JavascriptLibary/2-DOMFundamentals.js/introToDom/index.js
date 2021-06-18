// /*
// documemt.getElementById('[type here]')
// documemt.querySelectorAll('[type here]')

// let header = document.getElementById('aboutme');
// */

// /*
// getElementById()
// -how are we going to grab exactly what we need? need the ID of the element
// */

// //pulls h1 from index.html file
// //storing document.getElementById into the variable
// const header = document.getElementById("header");
// console.log(header);

// header.style.color = "green";
// header.innerText = "Hello World";

// const aboutMe = document.getElementById('about-me');
// //^^^^^^^^^
// //Chart: getElementById, Element, Single, N/A 

// const errorList = document.getElementsByClassName("error-list");
// console.log(errorList);

// errorList[0].innerText = "I changed error 1";
// //Example 1 Looping
// for (let i = 0; i < errorList.length; i++) {
//     errorList[i].style.color = "red";
// }

// //Example 2 Looping
// for(error of errorList) {
//     error.style.color = "green"
// }

// //Example 3 Looping forEach // CANNOT DO
// // errorList.forEach(error => error.style.color = "purple")

// //according to chart for getElementsByClassName: HTMLCollection, Multiple, Looping Through It (Yes, bu not forEach)


// //GetElementsByTagName():
// const tags = document.getElementsByTagName("p");
// console.log(tags);

// tags[0].innerText = "Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks."

// const listItems = document.getElementsByTagName("li");
// console.log(listItems);

// // listItems[0].style.fontStyle = "italic";
// // listItems[1].style.fontStyle = "italic";

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontStyle = "italic";
// }
//according to chart: HTMLCollection, Multiple, Looping Through It: Yes, but not forEach

//Query Selector and querySelectorAll
//examples can be H1, #header, .error-lie, ul > li, body > div> ul > li:nth-child(2)
//only gives first match when searching 

// const header = document.querySelector("h1");
const header = document.querySelector("#header");
console.log(header);

const errorList = document.querySelector(".error-list");
console.log(errorList);

const errorList2 = document.querySelector("body > div > ul > li:nth-child(2)");
console.log(errorList2);

//chart: single element, single element, can't loop through


//Query Selector All - querySelectorAll()
//examples can be H1, #header, .error-lie, ul > li, body > div> ul > li:nth-child(2)
//gives us a node list back

const headerTags = document.querySelectorAll('h1');
console.log("h1");
console.log(headerTags);

console.log(headerTags[1]);

headerTags.forEach(h => {
    h.style.color = "blue";
});

const listItems = document.querySelectorAll(".error-list")
listItems.forEach(li => {
    li.style.fontStyle = "italic"
})

//According to chart: NodeList, Multiple, Yes, even forEach loops
