"use strict";
var _ = require("lodash");

/*
 * PROBLEM `checkData`: (normal)
 * Write a function that takes a string and checks to make sure that the string
 * has a length of exactly three. Return true if the string length is three or
 * false if it is not three.
 *
 * If the input is invalid throw an "Invalid Input" exception.
 */

function checkData(inputString) {
	if(!_.isString(inputString)) {
		throw "Invalid input";
	}

	if (inputString.length === 3) {
		return true;
	}
	else {
		return false;
	}
}



/*
 * PROBLEM `concatenateArrays`: (normal)
 * Write a function that, given two arrays of integers a and b, returns an array
 * that is formed by the elements of a followed by the elements of b.
 *
 * If the input is invalid throw an "Invalid Input" exception.
 */

function concatenateArrays(a, b) {
	if(!_.isArray(a) || !_.isArray(b)) {
		throw "Invalid input";
	}
	var x = a.concat(b);
	return x;
}


/*
 * PROBLEM `fixProperNoun`: (normal)
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Write a function called `fixProperNoun` that takes a potentially improperly
 * capitalized proper noun and returns the same noun with the proper
 * capitalization.
 *
 * If the input is invalid throw an "Invalid Input" exception.
 */

function fixProperNoun(noun) {
	if(!_.isString(noun)) {
		throw "Invalid input";
	}
	var newNoun = noun.toLowerCase();
	var propLetter = newNoun.substring(0,1).toUpperCase() + newNoun.substring(1);

	return propLetter;
}



/*
 * PROBLEM `sortLetters`: (normal)
 * Write a function called `sortLetters` that returns a string that sorts all
 * the letters from a given string in the alphabetical order.
 *
 * If the input is invalid throw an "Invalid Input" exception.
 */

function sortLetters(inputString) {
	if(!_.isString(inputString)) {
		throw "Invalid input";
	}
	var newString = inputString;
	var alphaArray = [];
    for (var i = 0; i < newString.length; i++) {
        alphaArray[i] = newString.charAt(i);
    }
    alphaArray.sort();

    var sortedString = "";

    for (var j = 0; j < alphaArray.length; j++) {
        var sortedString = sortedString + alphaArray[j];
    }
	return sortedString;
}



/*
 * PROBLEM `absVal`: (normal)
 * Write a function called `absVal` that return the absolute value of a given
 * integer. Don"t use Math.abs(...)
 *
 * If the input is invalid throw an "Invalid Input" exception.
 */

function absVal(x) {
	if(!_.isNumber(x)) {
		throw "Invalid input";
	}
	var y = x;
	if (y<0) {
		y *= -1;
	}
	if (y === -0){
		y = 0;
	}
	return y;
}



/*
 * PROBLEM `myMin`: (normal)
 * Write a function called `myMin` that takes two integers and returns the
 * smaller of the two numbers.
 *
 * If the input is invalid throw an "Invalid Input" exception.
 */

function myMin(x,y) {
	if(!_.isNumber(x) || !_.isNumber(y)) {
		throw "Invalid input";
	}
	var intX = x;
	var intY = y;
	var intArray = [];
	intArray[0] = intX;
	intArray[1] = intY;
	intArray.sort(function(a,b){return a - b});
	var smallerNumber = intArray[0];
	return smallerNumber;
}


/*
 * PROBLEM `myMax`: (normal) - Actual Interview Question
 * Write a function called `myMax` that takes an array of integers and returns
 * the largest.
 *
 * If the input is invalid throw an "Invalid Input" exception.
 *
 * Insane mode: do this without using a for loop.
 */

function myMax(array1) {
	if(!_.isObject(array1)) {
		throw "Invalid input";
	}
	array1.sort(function(a,b){return b - a});

	return array1[0];
}



/*
 * PROBLEM `getMonth`: (normal)
 * Write a function called `getMonth` that maps a given integer to a month.
 *
 * For example:
 * getMonth(1) == "January"
 * getMonth(3) == "March"
 * etc.
 *
 * If the input is invalid throw an "Invalid Input" exception.
 */

function getMonth(n) {
	if(!_.isNumber(n)) {
		throw "Invalid input";
	}
	if (n < 1 || n > 12) {
		throw "Invalid input";
	}
	var months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var givenMonth = months[n-1];
	return givenMonth;
}



/*
 * PROBLEM `randomElement`: (normal)
 * Create a function called `randomElement` that takes an array of values and
 * returns one randomly selected value from that array.
 */

function randomElement(arrayOfValues) {
	if(!_.isObject(arrayOfValues)) {
		throw "Invalid input";
	}
	var newArray = arrayOfValues;
	var arrayLength = newArray.length;
	var randomInt = Math.floor(Math.random() * (arrayLength));
	var randomValue = newArray.slice(randomInt,randomInt+1);
	return randomValue;
}



/*
 * PROBLEM `studentPairs`: (normal)
 * Create a javascript function called `studentPairs` that takes an array of
 * student names and returns an array of randomly selected pairs of students
 * (array of arrays).
 */

function studentPairs(studentNames) {
	if(!_.isArray(studentNames)) {
		throw "Invalid input";
	}
	for(var studentNumber = 0; studentNumber < studentNames.length; studentNumber++) {
		var currentStudent = studentNames[studentNumber];
		if(!_.isString(currentStudent)) {
			throw "Invalid input: student must be a string";
		}
	}

	var pairs = [];
	var max = Math.floor(studentNames.length/2);

	for(var pairNum = 0; pairNum < max; pairNum++) {
		var studentNumber1 = getRandomInt(0, studentNames.length-1);
		var studentName1 = studentNames.splice(studentNumber1, 1);

		var studentNumber2 = getRandomInt(0, studentNames.length-1);
		var studentName2 = studentNames.splice(studentNumber2, 1);

		pairs.push(studentName1.concat(studentName2));
	}

	if (studentNames.length > 0) {
		var pairNumber = getRandomInt(0, pairs.length-1);
		pairs[pairNumber].push(studentNames[0]);
	}

	function getRandomInt(min,max) {
		return Math.floor(Math.random() * (max - min +1)) + min;
	}

	return pairs;
}



/*
 * PROBLEM `sumSquares`: (normal)
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an "Invalid Input" exception.
 */

function sumSquares(N) {
	if(!_.isNumber(N)) {
		throw "Invalid input: not a number";
	}
	if(N <= 0) {
		throw "Invalid input: must use a positive integer";
	}

	var x = N;
	var sum = 0;
	for (var i = 1; i <= x; i++) {
		sum += i*i;
	}
	return sum;
}

/*
 * PROBLEM `findMaxDiff`: (normal)
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal (largest!) difference between any two adjacent elements.
 *
 * If the input is invalid throw an "Invalid Input" exception.
 */

function findMaxDiff(arrayOfIntegers) {
	if(!_.isObject(arrayOfIntegers)) {
		throw "Invalid input";
	}
	var x = 0;
	var y = 0;
	var diff = 0;
	var largestDifference = [];

	for (var i = 0; i < arrayOfIntegers.length; i++) {
		x = arrayOfIntegers[i];
		y = arrayOfIntegers[i+1];
		if (x < y) {
			diff = y - x;
		}
		else if (y < x) {
			diff = x - y;
		}
		largestDifference.push(diff)
	}
	largestDifference.sort(function(a,b){return b - a});
	return largestDifference[0];
}

/*
 * PROBLEM `insertDashes`: (normal)
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes("abba test") => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an "Invalid Input" exception.
 */

function insertDashes(sentence) {
	if(!_.isString(sentence)) {
		throw "Invalid input";
	}
	var dashArray = [];
	var newArray = [];

	dashArray = sentence.split(" ");

	for (var i = 0; i < dashArray.length; i++) {
    	var dashes = dashArray[i].split("").join("-");
    	newArray.push(dashes);
	}

	newArray = newArray.join(" ");

	return newArray;
}

/*
 * PROBLEM `mySubstring`: (normal)
 * Implement a function called `mySubstring` that can output the substring of
 * the given string within specified bounds.
 *
 * For example: mySubstring("abcde", 2, 3) === "cd"
 *
 * Don"t use String.substring in your solution.
 *
 * If the input is invalid throw an "Invalid Input" exception.
 */

function mySubstring(givenString, start, stop) {
	if(!_.isString(givenString)) {
		throw "Invalid input: input should be a string";
	}

	var arrayOfGivenString = [];
	var newArray = [];
	var smallerString = "";

	arrayOfGivenString = givenString.split("");

    for (var i = 0; i < arrayOfGivenString.length; i++) {
        if((i >= start) && (i <= stop)){
            var sub = arrayOfGivenString[i];
            newArray.push(sub);
        }
    }

	smallerString = newArray.join("");

	return smallerString;
}

/*
 * PROBLEM `splitSwap`: (hard)
 * Write a function called `splitSwap` that swaps two halves of a given array.
 * If the array has an odd number of elements the array should be split in half
 * by rounding down the number of elements divided by two.
 *
 * For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
 *
 * If the input is invalid throw an "Invalid Input" exception.
 */

function splitSwap(givenArray) {
	// your code goes here
}

/*
 * PROBLEM `smallMultiples`: (hard)
 * For given n and k write a function called `smallMultiples` that returns the
 * count of the number of multiples of k that are not greater than n.
 *
 * For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
 * greater than 4.
 *
 * If the input is invalid throw an "Invalid Input" exception.
 */

function smallMultiples(n,k) {
	// your code goes here
}

/*
 * PROBLEM `rot13`: (hard)
 * Create a function called `rot13` that takes an unencrypted string and returns
 * the [ROT-13](http://en.wikipedia.org/wiki/ROT13) version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an "Invalid Input" exception.
 */

function rot13(unencryptedString) {
	// your code goes here
}

/*
 * PROBLEM `derot13`: (hard)
 * Create a function called `derot13` that takes a ROT-13 encrypted string and
 * returns the decrypted version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an "Invalid Input" exception.
 */

function derot13(rot13String) {
	// your code goes here
}

/*
 * PROBLEM `rotn`: (hard)
 * Create a function called `rotn` that takes an unencrypted string and an
 * integer (n) and returns the ROT-N version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an "Invalid Input" exception.
 */

function rotn(unencryptedString,n) {
	// your code goes here
}

/*
 * PROBLEM `findBoth`: (hard)
 * Write a function called `findBoth` that takes two arrays of integers a and b
 * returns an array that includes only the elements that appear in both a and b.
 * A value should not appear more than once in the returned array.
 *
 * If the input is invalid throw an "Invalid Input" exception.
 */

function findBoth(a,b) {
	// your code goes here
}

/*
 * PROBLEM `countBoth`: (hard)
 * Write a function called `countBoth` that takes two arrays of integers a and
 * b. The function should return the number of elements that exist in both a and
 * b.
 *
 * If the input is invalid throw an "Invalid Input" exception.
 */

function countBoth(a,b) {
	// your code goes here
}

/*
 * PROBLEM `isDiagonalMatrix`: (nightmare)
 * In linear algebra, a square matrix (array of arrays) is called a diagonal
 * matrix if all entries outside the main diagonal are zero (the diagonal from
 * the upper left to the lower right).
 * For example:
 * [
 *   [1, 0, 0],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is a diagonal matrix.
 *
 * [
 *   [1, 0, 2],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is not a diagonal matrix.
 *
 * [
 *   [1, 0, 0],
 *   [0, 2, 0]
 * ]
 * is not a diagonal matrix.
 *
 * Write a function called `isDiagonalMatrix` that takes a matrix and returns
 * true if the matrix is a diagonal matrix. Otherwise return false.
 *
 * If the input is invalid throw an "Invalid Input" exception.
 */

function isDiagonalMatrix(arrayMatrix) {
	// your code goes here
}


/*
 * PROBLEM `isAnagram`: (nightmare) - Actual Interview Question
 * An anagram is a type of word play, the result of rearranging the letters of a
 * word or phrase to produce a new word or phrase, using all the original
 * letters exactly once.
 *
 * Write a function called `isAnagram` that takes two arrays of strings of equal
 * lengths arr1 and arr2. The function should return a new array of the same
 * length as the input with boolean values at each position i. The boolean value
 * at position i of the result array should be true if the strings at position i
 * in arr1 and arr2 are anagrams of each other. Otherwise the boolean at
 * position i of the result array should be false.
 *
 * For example:
 * isAnagram(
 * 		["cinema", "shot", "aba", "rain"],
 * 		["iceman", "hots", "bab", "train"]
 * ) === [true, true, false, false];
 *
 * If the input is invalid throw an "Invalid Input" exception.
 */

function isAnagram(arr1,arr2) {
	// your code goes here
}

/*
 * PROBLEM `validateParentheses`: (nightmare) - Actual Interview Question
 * Write a function called `validateParentheses` that takes a string of
 * parentheses. The string can contain the following characters repeated any
 * number of times in any order: ()[]{}
 *
 * The function should return true if the parentheses are in a valid order and
 * false if they are not. One type of parentheses cannot close before it has
 * been opened and one type of parentheses cannot be closed while a different
 * type of parentheses is open. All parentheses that are opened must also be
 * closed.
 *
 * For example:
 * validateParentheses("]") === false;
 * validateParentheses("[") === false;
 * validateParentheses("[]") === true;
 * validateParentheses("{[]}") === true;
 * validateParentheses("([)]") === false;
 * validateParentheses("{[(){()}]}") === true;
 *
 * If the input is invalid throw an "Invalid Input" exception.
 */

function validateParentheses(stringOfP) {
	// your code goes here
}

/*
 * PROBLEM `flattenArray`: (nightmare) - Actual Interview Question
 * Write a function called flattenArray that takes an array of any type of
 * element, and flattens it, such that any element in the given array that is an
 * array is converted to a list of non-arrays. For example:
 *
 * flattenArray([1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10])
 * === [1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]
 *
 * If the input is invalid throw an "Invalid Input" exception.
 *
 * Insane mode: do this without recursion.
 */

function flattenArray(arrayNonFlat) {
	// your code goes here
}

/*
 * Do not modify the code below
 */
module.exports = {
	checkData: 				typeof checkData === "undefined" ? undefined : checkData,
	concatenateArrays: 		typeof concatenateArrays === "undefined" ? undefined : concatenateArrays,
	fixProperNoun: 			typeof fixProperNoun === "undefined" ? undefined : fixProperNoun,
	sortLetters: 			typeof sortLetters === "undefined" ? undefined : sortLetters,
	absVal: 				typeof absVal === "undefined" ? undefined : absVal,
	myMin: 					typeof myMin === "undefined" ? undefined : myMin,
	myMax: 					typeof myMax === "undefined" ? undefined : myMax,
	getMonth: 				typeof getMonth === "undefined" ? undefined : getMonth,
	randomElement: 			typeof randomElement === "undefined" ? undefined : randomElement,
	studentPairs: 			typeof studentPairs === "undefined" ? undefined : studentPairs,
	sumSquares: 			typeof sumSquares === "undefined" ? undefined : sumSquares,
	findMaxDiff: 			typeof findMaxDiff === "undefined" ? undefined : findMaxDiff,
	insertDashes: 			typeof insertDashes === "undefined" ? undefined : insertDashes,
	mySubstring: 			typeof mySubstring === "undefined" ? undefined : mySubstring,
	splitSwap: 				typeof splitSwap === "undefined" ? undefined : splitSwap,
	smallMultiples: 		typeof smallMultiples === "undefined" ? undefined : smallMultiples,
	rot13: 					typeof rot13 === "undefined" ? undefined : rot13,
	derot13: 				typeof derot13 === "undefined" ? undefined : derot13,
	rotn: 					typeof rotn === "undefined" ? undefined : rotn,
	findBoth: 				typeof findBoth === "undefined" ? undefined : findBoth,
	countBoth: 				typeof countBoth === "undefined" ? undefined : countBoth,
	isDiagonalMatrix: 		typeof isDiagonalMatrix === "undefined" ? undefined : isDiagonalMatrix,
	isAnagram: 				typeof isAnagram === "undefined" ? undefined : isAnagram,
	validateParentheses:	typeof validateParentheses === "undefined" ? undefined : validateParentheses,
	flattenArray: 			typeof flattenArray === "undefined" ? undefined : flattenArray
};
