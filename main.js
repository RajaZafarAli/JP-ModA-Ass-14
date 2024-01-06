// Chapter 1 (Alerts)
// 1. Alert these following (individually):
var firstName = "John";
var lastName = "Doe";
var email = "john.doe@example.com";
var phoneNumber = "123-456-7890";
var password = "securePassword123";

// 2. Correct this statement:
alert("You're learning JavaScript!");

// 3. Code an alert statement displaying any message you like.
alert("Hello, world!");

// Chapter 2 (Variables for string)
// 1. Declare any variable in the camelCase format.
var myVariableName;

// 2. Declare a variable of your choice without defining it. Then, in a second statement, assign it a string of your choice.
var myStringVariable;
myStringVariable = "This is a string.";

// 3. Declare the variable teamName and Alert your Team name.
var teamName = "Awesome Team";
alert(teamName);

// 4. This statement has already been coded. var bestMan = "Charlie"; Assign the variable a new string.
var bestMan = "Charlie";
bestMan = "John";

// Chapter 3 (Variables for numbers)
// 1. Declare a variable “caseQty”
var caseQty;

// 2. Assign to the variable caseQty, which has already been declared, the value 144.
caseQty = 144;

// 3. Rewrite this statement so the variable can be used in a math operation. var num = "9";
var num = parseInt("9", 10);

// 4. In one statement declare a variable. In a second statement assign it the sum of 2 numbers.
var sumVariable;
sumVariable = 5 + 10;

// 5. What is the value of orderTotal?
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
console.log(orderTotal); // Displaying the value in the console.

// 6. In the first statement declare a variable and assign it a number. In the second statement, change the value of the variable by adding it together with a number.
var myNumber = 7;
myNumber += 3;

// Chapter 4 (Variable names Legal and Illegal)
// 1. Correct this statement.
var productCost = 3.45;

// 2. Rewrite this using camelCase.
var nameOfBand;

// 3. In a single statement declare a legally-named variable and assign a number to it.
var legalVariable = 42;

// 4. Declare a variable that is a combination of your first and last names. Use camelCase.
var myFullName;

// 5. List the legal and Illegal Variables.
var legalVariableName;
// var 2illegalVariable; // This is illegal.

// Chapter 5 (Math Expression I)
// 1. What is the name and symbol of the arithmetic operator that gives you the remainder when one number is divided by another?
// Modulo operator (%)
// 2. What is the value of num? var num = 20 % 6;
var num = 20 % 6;
console.log(num); // Displaying the value in the console.

// 3. In a single statement, declare the variable largeNum and assign it the result of 1,000 multiplied by 2,000.
var largeNum = 1000 * 2000;

// 4. Assign to a variable the value represented by one variable subtracted from the value represented by another variable
var result = variable1 - variable2;

// 5. Assign to a variable the remainder when one number is divided by another. The variable hasn't been declared beforehand. Make up the variable name.
var remainderValue = 15 % 4;

// 6. Code an alert that displays the result of a multiplication on 2 numbers.
var multiplicationResult = 5 * 7;
alert(multiplicationResult);

// Chapter 6 (Math Expression II)
// 1. Code a short form of x = x + 1; Use either of the two legal expressions.
// x++
// 2. If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
// x--
// 3. var x = 50; var y = x++; What is the value of y?
var x = 50;
var y = x++;
console.log(y); // Displaying the value in the console.

// 4. var y = 50; var z = --y; What is the value of z?
var y = 50;
var z = --y;
console.log(z); // Displaying the value in the console.

// 5. In a single statement, decrement num and assign its original value to newNum.
var newNum = num--;

// 6. In a single statement add 1 to a variable and assign its original value to another variable.
var originalValue = 10;
var incrementedValue = ++originalValue;

// 7. Assign a number value to a variable. Increment the variable. Display the new value in an alert.
var someNumber = 42;
someNumber++;
alert(someNumber);

// Chapter 7 (Math Expression III)
// 1. var calculatedNum = 2 + (2 * 6); What is the value of calculatedNum?
var calculatedNum = 2 + (2 * 6);
console.log(calculatedNum); // Displaying the value in the console.

// 2. var calculatedNum = (2 + 2) * 6; What is the value of calculatedNum?
var calculatedNum = (2 + 2) * 6;
console.log(calculatedNum); // Displaying the value in the console.

// 3. var calculatedNum = (2 + 2) * (4 + 2); What is the value of calculatedNum?
var calculatedNum = (2 + 2) * (4 + 2);
console.log(calculatedNum); // Displaying the value in the console.

// 4. var calculatedNum = ((2 + 2) * 4) + 2; What is the value of calculatedNum?
var calculatedNum = ((2 + 2) * 4) + 2;
console.log(calculatedNum); // Displaying the value in the console.

// 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 56.
var cost = 2 + (2 * 4) + 10;

// 6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 20.
var units = 2 + (2 * 4) + 10;

// 7. Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with parentheses, producing 5.
var pressure = 4 / (2 * 4);

// Chapter 8 (Concatenating Text Strings)
// 1. var num = "2" + "2"; What is the value of num? Include quotation marks.
var num

 = "2" + "2";
console.log(num); // Displaying the value in the console.

// 2. message = ("Hello," + "Dolly"); What is the value of message? (Include the quotation marks.) Alert the statement
var message = "Hello," + "Dolly";
console.log(message); // Displaying the value in the console.
alert(message);

// 3. alert("33" + 3); What message displays in the alert box?
// "333"

// 4. Write an alert that displays the concatenation of the two parts of "Pakistan Zindabad".
var part1 = "Pakistan";
var part2 = "Zindabad";
alert(part1 + " " + part2);

// 5. Write a statement that assigns to a variable the concatenation of a string with a number
var concatenatedString = "The answer is: " + 42;

// 6. Assign strings to two variables. Then concatenate them and assign the result to a third variable.
var string1 = "Hello, ";
var string2 = "world!";
var concatenatedResult = string1 + string2;

// Chapter 9 (Prompts)
// 1. Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
var firstName = prompt("Enter first name");

// 2. Code a prompt with the message "Country?" and the default answer "China". The user's response is assigned to country.
var country = prompt("Country?", "China");

// 3. Correct this statement
// var yourName = prompt(Enter Your Name");

// Corrected statement:
var yourName = prompt("Enter Your Name");

// 4. Code a prompt that specifies a string as the message Include a default input.
var userInput = prompt("Please enter your name", "John Doe");

// 5. Assign strings to two variables. Code a prompt specifying the first variable as the message and the second variable as the default response. Assign the user's response to a third variable.
var variable1 = "Favorite color?";
var variable2 = "Blue";
var userResponse = prompt(variable1, variable2);

// 6. Display a prompt, including both a message and a default response. Display the user's response in an alert.
var promptMessage = "What's your favorite food?";
var defaultResponse = "Pizza";
var userFoodChoice = prompt(promptMessage, defaultResponse);
alert("Your favorite food is: " + userFoodChoice);

// Chapter 10 (if statements)
// 1. var city = "Karachi" if (city = "Karachi") { console.log("The City OF Lights") Correct the above statement: Also try this statement by yourself
var city = "Karachi";
if (city === "Karachi") {
    console.log("The City OF Lights");
}

// 2. This is the first line of an if statement: if (x === y) { Complete the statement. If the condition is true, display a box that asks the user value of z? and assign it to another variable.
if (x === y) {
    var z = prompt("Enter the value of z?");
    console.log(z);
}

// 3. Code an if statement that tests if ZipCode is "10010" so, Alert that "Karachi". if not then alert ("Please write correct city")
var zipCode = "10010";
if (zipCode === "10010") {
    alert("Karachi");
} else {
    alert("Please write correct city");
}

// 4. Code an if statement. Test whether a variable has a particular numerical value. If so, assign a new value to that variable, as in x = 1;
var myVariable = 42;
if (myVariable === 42) {
    myVariable = 24;
}

// Chapter 11 (Comparison Operators)
// 1. Code the first line of an if statement that tests whether one variable is unequal to another. (Use !=)
if (variable1 != variable2) {
    // Code to execute if variables are not equal
}

// 2. Code the first line of an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable.
if (value1 >= value2) {
    // Code to execute if value1 is greater than or equal to value2
}

// 3. Code an if statement. Test whether a variable is unequal to a particular number. If so, assign a number to that variable.
if (myNumber !== 10) {
    myNumber = 10;
}

// 4. Code an if statement that tests whether a number is unequal to a different number. If the condition is true (it will be), display a congratulations alert.
var number1 = 5;
var number2 = 10;
if (number1 !== number2) {
    alert("Congratulations!");
}

// 5. Code a prompt asking for your first name. Code an if statement that tests whether the name you entered is unequal to another name. If the condition is true (it will be), display an alert that says "No match"
var enteredName = prompt("Enter your first name");
var otherName = "Zafar";
if (enteredName !== otherName) {
    alert("No match");
}

// Chapter 12 (if…else and else if statements)
// 1.
var variable1 = 15;
var variable2 = 10;
if (variable1 >= variable2) {
    alert("Variable1 is greater than or equal to Variable2");
} else {
    alert("Variable1 is less than Variable2");
}

// 2.
var marks = parseFloat(prompt("Enter your marks"));
if (marks >= 90) {
    alert("Grade A");
} else if (marks >= 70) {
    alert("Grade B");
} else {
    alert("Grade C");
}

// 3.
if (a === 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is " + a);
}

// 4.
var enteredCity = prompt("Enter a city");
if (enteredCity === "Karachi") {
    alert("Acknowledging it is Karachi");
} else if (enteredCity === "Lahore") {
    alert("Acknowledging it's Lahore");
} else {
    alert("Different city");
}

// Chapter 13 (Testing sets of conditions)
// 1.
if (a === b && c === d) {
    // Code to execute if both conditions are true
}

// 2.
if (a === b || c !== d) {
    // Code to execute if either condition is true
}

// 3.
if ((name === "Zafar" || name === "Basit") && age < 60) {
    // Code to execute if both conditions are true
}

// 4.
var variable1 = 42;
var variable2 = 24;
if (variable1 < variable2 || variable1 > variable2) {
    alert("Alert: Condition met");
}

// 5.
var firstName = "John";
var lastName = "Doe";
var enteredFirstName = prompt("Enter your first name");
var enteredLastName = prompt("Enter your last name");
if (enteredFirstName === firstName && enteredLastName === lastName) {
    alert("Names match!");
}

// Chapter 14 (If statements nested)
// 1.
var password = prompt("Enter your password");
if (password !== "") {
    if (password.length <= 5) {
        alert("Password must be greater than 5");
    } else {
        alert("OK");
    }
}

// 2. Try this statement by yourself
if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}

// 3.
if (a === 1 && c === "Max") {
    alert("OK");
}

// 4.
var variable1 = 42;
var variable2 = 42;
if (variable1 === variable2 && variable1 <= variable2) {
    alert("Condition met!");
}

// Chapter 15 (Array I)
// 1.
var emptyArray = [];

// 2.
var stringArray = ["Hello"];

// 3.
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);

// 4.
var alphabetLength = ["h", "i", "j", "k", "l", "m", "n", "o"].length;

// 5.
var arrayWithOneElement = ["First Element"];
arrayWithOneElement[1] = "Second Element";
alert(arrayWithOneElement[1]);

// Chapter 16 (Array II)
// 1.
var stringArray2 = ["Hello"];
stringArray2.push("World");
alert(stringArray2[stringArray2.length - 1]);

// 2.
var Alphabet2 = ["h", "i", "j", "k"];
Alphabet2.pop();

// 3.
var Alphabet3 = ["h", "i", "j", "k"];
Alphabet3.push(42);

// Chapter 16 (Array III)
// 1.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();

// 2.
var sizes2 = ["S", "M", "XL", "XXL", "XXXL"];
sizes2.unshift(1, 2, 3);

// 3.
var arrayWithOneElement2 = ["First Element"];
arrayWithOneElement2.unshift("New First Element");
alert(arrayWithOneElement2[0]);

// 4.
var sizes3 = ["S", "M", "XL", "XXL", "XXXL"];
sizes3.splice(2, 0, "L");

// 5.
var sizes4 = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes4.slice(0, 3);

// 6.
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(pets.indexOf("dog") + 1, 2);

// 7.
var pets2 = ["dog", "cat", "ox", "duck", "frog"];
pets2.splice(1, 2);

// 8.
var pets3 = ["dog", "cat", "ox", "duck", "frog", "flea"];
var slicedArray = pets3.slice(3, 5);

// Chapter 17 - 20 (for Loops)
// 1.
for (var i = 0; i < 10; i++) {
    // Code to run 10 times
}

// 2.
for (var i = 0; i <= 12; i++) {
    // Code to run 12 times
}

// 3.
for (var i = 0; i <= 4; i++) {
    // Code to run 5 times
}

// 4.
for (var counter = 0; counter < 100; counter++) {
    // Code to run 100 times
}

// 5.
for (var i = 3; i > 0; i--) {
    // Code to run 3 times, decrementing with each iteration
}

// 6.
var arrayLength = pets.length;

// 7.
var flag = true;

// 8.
for (var i = 0; i < pets.length; i++) {
    // Code to run for each element in the array pets
}

// 9.
for (var i = 0; i < 10; i++) {
    if (i === 1) {
        alert(i);
        break;
    }
}

// 10.
var userNames = ["Alice", "Bob", "Charlie"];
var enteredUserName = prompt("Enter your first name");
for (var i = 0; i < userNames.length; i++) {
    if (enteredUserName === userNames[i]) {
        alert("Enter");
        break;
    } else {
        alert("Please write correct user name");
        break;
    }
}

// 11.
var match

Found = false;
for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
        alert("Match found");
        matchFound = true;
        break;
    }
};
if (!matchFound) {
    alert("No match found");
}

// 12.
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
        alert(firstArr[i] + secondArr[j]);
    }
}

// Chapter 21 (Changing Case)
// 1.
var allLower = userInput.toLowerCase();
// 2.
x = x.toLowerCase();
// 3.
y = y.toUpperCase();
// 4.
var originalString = "SomeString";
var newString = originalString.toLowerCase();
// 5.
var arrayElement = "SomeString";
var newVariable = arrayElement.toLowerCase();
// 6.
var variableToUpperCase = "someString";
alert(variableToUpperCase.toUpperCase());
// 7.
var cityName = "kaRacHi";
var capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// Chapter 22 - 25 (Strings)
// 1.
var sameWords = "captain";
var slicedSegment = sameWords.slice(1, 3);
// 2.
var origNum = 5.67;
var numCharacters = origNum.toString().length;
// 3.
var animal = "elephant";
var seg = animal.slice(1, 5);
// 4.
var variableToConvert = "SomeString";
var convertedVariable = variableToConvert.length;
// 5.
var stringVariable = "SomeString";
var lengthOfString = stringVariable.length;
var slicedString = stringVariable.slice(1, -3);
// 6.
var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log("Index of 'be':", indx);
// 7.
var text2 = "To be or not to be.";
var indx2 = text2.lastIndexOf("be");
console.log("Last Index of 'be':", indx2);
// 8.
var text3 = "Find the index of the first character of the last instance of 'go'.";
var indx3 = text3.lastIndexOf("go");
console.log("Index of the first character of the last instance of 'go':", indx3);
// 9.
var indexNum = 5;
if (str.indexOf(indexNum) !== -1) {
    // Code to execute if segment exists in the string
}
// 10.
var str2 = "abcde";
var characterAtIndex2 = str2.charAt(2);
// 11.
var text4 = "This is a sample text";
var cha = text4.charAt(9);
// 12.
var str3 = "Hello World";
var x2 = str3.charAt(str3.length - 1);
// 13.
var input2 = "abcdef";
var cha2 = input2.charAt(4);
// 14.
var variableToTest = "SomeString";
if (variableToTest.charAt(2) === 'A') {
    // Code to execute if the 3rd character is 'A'
}
// 15.
var reply = "Replace this string";
var newArray = [];
for (var i = 0; i < reply.length; i++) {
    newArray[i] = reply.charAt(i);
}
var revisedReply = reply.replace("no", "yes");
// 16.
var str4 = "Replace 1 in this string";
var newStr = str4.replace("1", "one");
// 17.
var y = x.replace(/a/g, "z");

// Chapter 26 (Rounding Numbers)
// 1.
var roundedNumber = Math.round(5.67);
// 2.
var origNum2 = 5.67;
var roundNum2 = Math.ceil(origNum2);
// 3.
var origNum3 = 5.67;
var roundNum3 = Math.floor(origNum3);
// 4.
var variableToRound = 5.67;
var roundedResult = Math.round(variableToRound);
// 5.
var roundedValue = Math.round(0.5);

// Chapter 27 (Random Numbers)
// 1.
var randomNumInRange = Math.floor(Math.random() * 50) + 1;
// 2.
var randomNum = Math.random();
// 3.
var diceResult = Math.floor(Math.random() * 6) + 1;
// 4.
var tossResult = Math.random() < 0.5 ? "Head" : "Tail";

// Chapter 28, 29 (Converting Strings)
// 1.
// To convert a string to an integer in JavaScript, you can use parseInt() function.
// Example: var strToInt = parseInt("123");
// 2.
function stringToInt(str) {
    return parseInt(str);
}
// 3.
// To convert a string containing a decimal number to a floating-point number, you can use parseFloat() function.
// Example: var strToFloat = parseFloat("3.14");
// 4.
// To check if a string can be successfully converted to an integer or decimal, you can use isNaN() function.
// Example: var isValid = !isNaN("123");
// 5.
// To convert a number to a string in JavaScript, you can use toString() method.
// Example: var numToString = (42).toString();
// 6.
function numToString(num) {
    return num.toString();
}
// 7.
// Yes, you can convert a string representing a decimal number to an integer in JavaScript using parseInt().
// Example: var y = parseInt("3.14");

// Chapter 30 (Controlling the length of decimals)
// 1.
var num = 123.456789;
var newNum = num.toFixed(4).toString();
// 2.
var variableToRound2 = 5.6789;
variableToRound2 = parseFloat(variableToRound2.toFixed(2).toString());
// 3.
var num2 = 5.67;
var numString = num2.toFixed(2).toString();
var hasMoreThan4Chars = numString.length > 4;
// 4.
var num3 = 123.456789;
alert(num3.toFixed(2).toString());

// Chapter 31 - 34 (Date & Time)
// 1.
var dObj = new Date();
// 2.
var dObj2 = new Date();
var dStr = dObj2.toString();
// 3.
var d = new Date();
var day = d.getDay();
// 4.
var d4 = new Date();
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
alert(dayNames[d4.getDay()]);
// 5.
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1; // Months are 0-indexed
var dayOfMonth = now.getDate();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
// 6.
var later = new Date(2020, 11, 31); // Months are 0-indexed
// 7.
var secondDay1992 = new Date(1992, 1, 2); // Months are 0-indexed
// 8.
var referenceDate = new Date("1980-01-01");
var millisecondsElapsed = referenceDate.getTime();
// 9.
var dateToChange = new Date();
dateToChange.setFullYear(2022);
// 10.
function changeMonthToJanuary(dateToChange) {
    dateToChange.setMonth(0); // Months are 0-indexed
}
// 11.
var dateToChange2 = new Date();
dateToChange2.setDate

(4);
// 12.
var timeToChange = new Date();
var newMinutes = prompt("Enter new minutes:");
timeToChange.setMinutes(newMinutes);
// 13.
var timeToAddTo = new Date();
var hoursToAdd = prompt("Enter number of hours to add:");
timeToAddTo.setHours(timeToAddTo.getHours() + parseInt(hoursToAdd));
// 14.
function calculateAge(birthDate) {
    var currentDate = new Date();
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    var monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
var birthDate = new Date("2000-01-01");
var age = calculateAge(birthDate);
console.log("Age:", age);
