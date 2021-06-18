//a way to handle asynchronis code...doesn't always go top down

// setTimeout(() => console.log("This is a test of timeouts"), 1000);

// let promise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//     if (true){
//     resolve('success');
//     } else {
//         reject("failure");
//     }
// }, 3000)
// })

// promise
//     .then(blah => console.log(blah)) //blah = "success" 

    let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
    if (false){
    resolve('success');
    } else {
        reject("failure");
    }
}, 3000)
})

promise
    .catch(err => console.log(err)) // err = "failure"

console.log('this code is after our promise & .then chain!') //happens instantaneously

function playFunc(){
    return 5;
}
console.log(playFunc());