function getJoke() {
    let apiURL = `https://api.chucknorris.io/jokes/random`;
    fetch(apiURL)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
    console.log("HEY THERE FROM getJoke() function");
  }
  // getJoke();
  async function getJokeAsync() {
    let apiURL = `https://api.chucknorris.io/jokes/random`;
    try {
      const response = await fetch(apiURL); // JSON Format
      const result = await response.json(); // Converts JSON to OBJ Literial
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    console.log("HEY THERE FROM getJokeAsync() function");
  }
  getJokeAsync();