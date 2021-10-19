// The following let variables are defined in the global scope
let mid = 20;
let final = 5;

let fname = "Ada";

//sum function is defined in the global scope
function sum() {
  return mid + final;
}

console.log(`#1 sum: ${sum()}`); // Returns 25
mid = 10;
console.log(`#2 sum: ${sum()}`); // Returns 15

function getScore() {
  let mid = 10;
  let final = 30;
  //yourScore is nested function example
  function yourScore() {
    return fname + " scored " + (mid + final);
  }

  return yourScore();
}

//Ver.1
let greeting = "hello";
let someone = "Umaporn";

function say(sentence) {
  //sentence is local variable, using within say() function only
  console.log(`${greeting}, ${someone}`);
  console.log(`${sentence}`);
}

say("Today is Tuesday");
// console.log(`sentence: ${sentence}`); //cannet refer sentence variable
console.log(`greeting: ${greeting}`);
console.log(`someone: ${someone}`);
say("Yesterday is Monday");


//Ver.2
let greeting = 'hello';
let someone = 'Umaporn';
//global scopt: greeting, someone, num, say
function say(sentence) {
  greeting = 'hi';
  let words = 'Good bye';
  return `${greeting}, ${someone}, ${sentence}, ${words}, ${num}`;
}
let num = 10;
// console.log(words);
console.log(say('Today is Tuesday'));

//Ver.3
let greeting = 'hello';
let someone = 'Umaporn';
//global scope: greeting, someone, num, say
function say(sentence) {
  //non-pure function
  //local scope: sentence, words
  greeting = 'hi'; //greeting is a free variable
  let words = 'Good bye';
  return `${greeting}, ${someone}, ${sentence}, ${words}, ${num}`;
  //someone and num are a free variable
}
let num = 10;
// console.log(words);
console.log(say('Today is Tuesday'));
someone = 'Songglod';
console.log(say('Today is Tuesday'));
//pure function
//non-pure function