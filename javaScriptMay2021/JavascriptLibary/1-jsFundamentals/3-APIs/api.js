const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace);

//2 things need to happen for fetchSpace to work...need the HTML we are trying to listen to and the HTML we care about...searchForm and submit...have to be interacting with the form and have to commit a submit action in the form.

function fetchSpace(e){
    e.preventDefault(); //prevents page refresh
    
   fetch(baseURL) //fetch returns a promise, built in function into JavaScript
    .then(result => result.json()) //with json we can take something that is a string object and turn it into a javascript friendly object .json returns a promise too
    .then(json => {
        console.log(json);
        displayRockets(json);
    })
}

function displayRockets(rockets){
    rockets.forEach(r => { //r represents one of the 4 rocksts
        let rocket = document.createElement("li");
        rocket.innerText = r.name; //connection between HTML and JavaScript happens here. HTML is "list"
        spaceShips.appendChild(rocket); //spaceships, the unordered list from HTML  
    })
}