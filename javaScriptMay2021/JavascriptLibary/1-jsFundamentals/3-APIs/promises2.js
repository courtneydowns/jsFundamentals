// fetch("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
//     .then(res => res.json())
//     .then(json => console.log(json))

// function slowResult(){
//     fetch("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
//         .then(res => res.json())
//         .then(json => console.log(json))
//     console.log("this is a message!")
// } //gets hoised, the .then is asynchronous code, so "this is a message!" get logged first

async function slowResult(){
    await fetch ("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
    .then(res => res.json())
    .then(json => console.log(json)) //turns our asynchronous process into a linear process
    console.log("this is a message!") //the above has to work before this can run.
}
//async returns a promise and await works with anything that returns a promise...await can only be used in conjunction with async

// slowResult();

async function slowResult(){
    await fetch ("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
     .then(res => res.json())
    .then (json => {json.lolProperty = "this is a random property!"; return json;}) 
    .then(json => console.log(json))
    console.log("this is a message!") 
} //we are using fetch to talk to a server. The info is not an easy format to play with and then we can make it JavaScript friendly format and then we can manipulate our json in whatever way we see fit

slowResult();