let button1 = document.getElementById("button-fetch");
console.log(button1);
button1.addEventListener("click", handleClick);
function getJoke() {
  let apiURL = "https://api.chucknorris.io/jokes/random";
  fetch(apiURL)
    .then((response) => response.json())
    .then((result) => displayJoke(result.value))
    .catch((error) => console.log(error));
  console.log("HEY THERE FORM getJoke() function");
}
getJoke();
function displayJoke(joke) {
  console.log(joke);
  let displayFetch = document.getElementById("display-fetch")
  displayFetch.innerText = "";
  let para = document.createElement("p");
  para.innerText = joke;
  displayFetch.appendChild(para);
}

function handleClick() {
  getJoke();
}

