const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; 
const key = 'Q0LP5ap51mq6aPtAhiCdfTYGeJjoIx8v';
let url;

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

//querySelector returns the first Element within the document that matches the specified selctor or group of selectors. If no matches are found, null is returned.

nav.style.display = 'none';

let pageNumber = 0;
console.log("pageNumber", pageNumber);
let displayNav = false;

//Using addEventListener: helps us identify a target and then add an event listener on that target. Can be element, document object, window object, or any other object that supports events

//Events are going to happen in the app:
//1. We want to submit a form that contains a query: "Sports", "Politics", "Weather", etc.
//2. We want to be able to toggle through the results when we click on the next or previous button.

//See explanation of numbers after this block of code
   //1                         //2
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);//3
previousBtn.addEventListener('click', previousPage);//3

/*
Explanation of numbered sections above:
1. The searchForm variable targets the form element in the html page:

const searchForm = documemt.querySelector('form');
-We use the searchForm variable and call the addEventListener method on it. We want to listen for things happening on the particular element, which in this case is the searchForm

2. The even we are looking for is the submit event. This is an HTML form event. Note that the submit event fires on a form, NOT a button. When this even happens (the form is submitted by pressing the submit button), we will fire off a function called fetchResults, the second parameter in the function.

3. The same is true for the other two items, except they call click events. When we clock on the next button, we fire off a function called nextPage. When we click on the previous button, we run previousPage
-Note that the click event is fired when a pointing device buttong (usually a mouse's (usually a mouse's primary button) is pressed and released on a single event
*/
                    //1
function fetchResults(e){
    e.preventDefault();
    // console.log(e);//2
    //ASSEMBLE THE FULL URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;//3
    console.log(url);//4

    if(startDate.value !== '') {
        // console.log(startDate.value)
    url += '&begin_date=' + startDate.value;
    };

    if(endDate.value !== '') {
        url += '&end_date=' + endDate.value;
    };

    //1
    fetch(url)
    .then(function(result) {
    return result.json(); //2
    }).then(function(json) {
        displayResults(json); //3
    });
}

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    let articles = json.response.docs;
    // console.log(articles);
    if(articles.length >= 10) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    };

    if(articles.length === 0) {
        console.log("No results");
    } else {
      for(let i = 0; i < articles.length; i++) {
          let article = document.createElement('article');
          let heading = document.createElement('h2');
          let link = document.createElement('a');
          let img = document.createElement('img');
          let para = document.createElement('p');
          let clearfix = document.createElement('div');

          let current = articles[i];
          console.log("Current:", current);

          link.href = current.web_url;
          link.textContent = current.headline.main;

          para.textContent = 'Keywords: ';

          for(let j = 0; j < current.keywords.length; j++) {
              let span = document.createElement('span');
              span.textContent += current.keywords[j].value + ' ';
              para.appendChild(span);
          }

          if(current.multimedia.length > 0) {
              img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
              img.alt = current.headline.main;
          }

          clearfix.setAttribute('class', 'clearfix');

          article.appendChild(heading);
          heading.appendChild(link);
          article.appendChild(img);
          article.appendChild(para);
          article.appendChild(clearfix);
          section.appendChild(article);
      }  
    }
};

function nextPage(e) {
    pageNumber++;
    fetchResults(e);
    console.log("Page number:", pageNumber);
};

function previousPage(e) {
    if(pageNumber > 0) {
    pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    console.log("Page number:", pageNumber);
}

/*
fetch(url) notes:

1. Remember that fetch is a reserved keyword in JavaScript that allows us to make a request for information, similar to using a GET request with HTTP. The url is given to fetch as a parameter, which sends the request to the url.

2. Meanwhile, it creates a promise containing a result object. This is our response. Remember that we use promises when we have asynchronous, long-running operations. The fetch gets the network resource, which might take a long time to resolve. It will convert the response into a json object by returning the result.json function.

3. That json object is used in another promise (set off by the second .then) to send the information received to another function. For now, we'll use console.log(json) to see the json data.

Say That Again?

Let's go through that again.

1. We make the fetch request.
2. We pass in the NYT url.
3. We create a promise .then that returns a response object called result.
4. The promise asynchronously returns a function that converts the result into usable json format - result.json() is that function call. 
5. We create a second promise that has a function t hat takes in the json object.
6. We log the json object for now.
*/


// function nextPage(){
//     console.log("Next button clicked");
// }//5

// function previousPage(){
//     console.log("Next button clicked");
// }//5

/*
1. The little (e) is part of something in Javascript callen an even handling function. Every event handling function receives an even object. For the purpose of this discussion, think of an object as a "thing" that holds a bunch of properties (variables) and methods (functions). The handle, the e, is similar to a variable that allows you to interact with the object.

2. We are logging the event object so that you can look at it in the console for learning purposes.

3. We are creating a versatile query string. The url variable is loaded with other variables and url requirements. We have our base for the API, our key, the page number that corresponds to the results array, and our specific value. Something to study on your own might be: ?, &, and &q= in URL string. What are those?

4. We log the string so that we can sdee it. Later on, you can trty another search and see how it changes. 

5. We add in a few basic functions to define nextPage and previousPage and log them. If you leave our this step, your app will get an error.
*/

//Endpoint Review:
//remember that when we fetch data from an API, we make a request for some kind of data to a specific point. That point is called an ENDPOINT and comes in the form of a URL. That URL is the gateway to the server, which ultimately does the logic of looking for the proper data in the database. In the code above, we use the endpoint, the baseURL, and add our query string to it so that it can access the proper data.

