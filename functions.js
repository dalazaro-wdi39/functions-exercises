// TODO: add your solutions here!

// return a new string that is the combination of two arguments passed into the function
function newWord(wordOne, wordTwo) {
    return wordOne + wordTwo;
};

newWord ("dog", "house");


//Display an argument phrase to the console n times
function displayPhrase(phrase, n) {
    for (i = 0; i < n; i++) {
       console.log(phrase);
    }
}

displayPhrase("This is fantastic!", 8);


// display number ^ power without using built-in Math functions
function power(base, exponent) {
    var answer = 1;
    for (var i = 0; i < exponent; i++) {
        answer *= base;
    }
    return(answer);
}
power(4, 5);


// Return the area of a circle given the radius
function circleArea(radius){
    var answer = Math.PI * radius * radius;
    return answer;
}
circleArea(5);


// Pythagorean theorem: Return c given a and b.
function pythagorean(a, b){
    var cSquared = (a * a) + (b * b);
    return Math.sqrt(cSquared);
}
pythagorean(3, 4);


// Return a boolean value whether or not X can be divided by Y without any remainders.
function isItDivisible(x, y){
    if (x > y && x % y === 0) {
        console.log(`Yes! ${x} is divisible by ${y}.`)
    } else {
        console.log(`No, ${x} is not divisible by ${y}.`)
    }
}
isItDivisible(25, 5);


// Return the number of occurrences of vowels in a word. Vowels are a, e, i, o, u, and y
function howManyVowels(word) {
  var vowelCount = 0;
  word = word.toLowerCase();
  for (i = 0; i < word.length; i++) {
    if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' ||  word[i] === 'u' ||  word[i] === 'y'){
			vowelCount++;
		}
  }
  return vowelCount;
}
howManyVowels("superantagonistically");


// Given an array, return true if it contains the string "wdi" and false if it does not contain that string.
function findWdi(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 'wdi'){
    	return true;
    }
    return false;
  }
}
findWdi([9,'Bart Simpson', true, 'wdi']);


// Given a string representing a sentence, return the longest word in that sentence.

//make an array out of the words in the sentence.
//loop through the array and compare the length of each word
//output the longest word


function longestWord(arr) {
  arr = string.split(" ");
  for (i = 0; i < sentence.length; i++) {
    if (sentence[i].length > sentence[i + 1].length) {
      
    }
  }
}
