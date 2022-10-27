'use strict'

// I declared a variable called answer1 = name
// Assigned it a string = data type
// With the value 'Was I born in Colombia or the cayman Islands?'. = value

let count = 0;

//Question 1 
let answer1 = prompt('Was I born in Colombia? (y/n or yes/no)').toLowerCase();
console.log('Answer 1: ', answer1);
//Answer 1 is fed into the yesNoAnswer function to be evaluated
yesNoAnswer(answer1);

let answer2 = prompt('Is soccer my favorite sport? (y/n or yes/no)').toLowerCase();
console.log('Answer 2: ',answer2);
soccerAnswer(answer2);

let answer3 = prompt('Do you like pasta? (y/n or yes/no)').toLowerCase();
console.log('Answer 3: ',answer3);
yesNoAnswer(answer3);

let answer4 = prompt('Are you a fan of the MCU (Marvel Cinematic Universe)? (y/n or yes/no').toLowerCase();
console.log(answer4);
yesNoAnswer(answer4);

let answer5 = prompt('Can you 10 push-ups without stopping? (y/n or yes/no').toLowerCase();
console.log(answer5);
yesNoAnswer(answer5);

marvel();

// This function checks if answer 1 input is yes or no and outputs an alert for either answer
function yesNoAnswer(answer) {
  if (answer === 'yes' || answer === 'y') {
    alert('That answer is correct');
    count = count + 1;
    console.log('Count: ',count);
  }
  else if (answer === 'no' || answer === 'n') {
    alert('That is incorrect');
  }
  else {
    alert('Please answer with y/n or yes/no');
  }
}



// This function is for question 2
function soccerAnswer(answer) {
  if (answer === 'yes' || answer === 'y') {
    alert('That answer is correct, I love soccer');
    count++;
    console.log('Count: ',count);
  }
  else if (answer === 'no' || answer === 'n') {
    alert('That is incorrect, soccer is my favorite sport');
  }
  else {
    alert('Please answer with y/n or yes/no');
  }
}

// This function asks the person who is their favorite superhero
function marvel(){
  //setting my favorite heroes in an array
  let heroList = ['thor', 'iron man', 'black panther', 'hawkeye', 'hulk'];
  console.log('Hero List: ', heroList);
  // this variable determines if the loop needs to break or not
  let valid = false;
 //this is how many guesses we have
  let guesses = 6;
  
  while(!valid || guesses > 0){
    let supe = prompt('I\'m a fan also, who\'s your favorite superhero?').toLowerCase();
    console.log('Supe', supe);
    //This for loop, checks to see if the answer is valid
    for(let i = 0; i < heroList.length; i++){
    // we want to look through the list, to see if their answer, matches the array herolist
      if(supe === heroList[i]){
        valid = true;
      }
    }
    //outside of the loop of valid.
    //we decrease the guesses
    //we alert them that it was not correct
    guesses--;
    console.log('Guesses: ', guesses);
    if (!valid) {
      alert('That\'s not one of them, but good guess. You have ' + guesses + ' guesses left');
      //if we run out of guesses
      if (guesses === 0) {
        alert(`Sorry you didn't guess it correctly, I like these Super Heroes: ${heroList}`);
      }
    }
    //if the above for loop comes back with valid = true, then this part will run
    else if (valid) {
      count++;
      alert(`You guessed it correctly! It only took you ${guesses} guesses. My list of favorite Super Heroes are ${heroList}`);
    }

  }
}

// // String concatenation
// alert('You answered ' + answer1 + ' as my place of birth');
// if (answer1 === 'yes' || answer1 === 'y') {
//     alert('That answer is correct');
// }

// if (answer2 === 'yes' || 'y');
// alert('That is corrct! Soccer is my favorite sport');




// if (answer3 === 'yes' || 'y');
// alert('I like pasta too');


// if (answer4 === 'yes' || 'y');
// alert('I am a fan also!');

// if (answer4 === 'yes' || 'y');
// prompt('Who is your favorite super hero in the MCU?');


// if (answer5 === 'no' || 'n');
// alert('Neither can I!');

