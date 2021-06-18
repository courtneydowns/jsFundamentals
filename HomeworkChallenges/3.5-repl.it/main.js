//var document;
let random = Math.floor(Math.random() * 10) + 1;
let input;
let counter = 0;

function guessIt(){
  input = parseInt(prompt("Guess a number from 1 to 10: "));
  
  if(random == input) {
    alert("Yay! You got it in " + (counter+1) + " Guess(es)");
  } 

  else if (input < random){
    alert("Too Low!");
  }

  else{
    alert("Too High!");
  }
}
do{
  guessIt();
  counter++;
}
while(counter < 3);
