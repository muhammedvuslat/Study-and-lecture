/*
* 1. Write a JavaScript code to calculate multiplication and division of two numbers (input from user). : 5min
*/
let number1 = +prompt("Enter a random first number");
let number2 = +prompt("Enter a random second number");

let sonuc1 = number1 / number2;
let sonuc2 = number1 * number2;

console.log(`Result of division of numbers ${sonuc1},
Result of multiplication of numbers ${sonuc2}`);


/*
 * 2. area calculation: 7min
 * area of any triangle (given only sides) ---
 * area of rectangle (given only sides)
 * area of circle (given only radius)
 * perimeter of circle (given only radius)
 *
 * pi:  Math.PI / 3.141592653589793
 */
//To calculate the area of the rectangle
let side1 = +prompt("Measure of the long side for the area of the rectangle");
let side2 = +prompt("Measure of the short side for the area of the rectangle");

console.log(`Area of rectangle ${side1*side2}`)

// For calculating the area and circumference of a circle
let radius = +prompt("Enter the radius for the area and perimeter of the circle");
let circleArea = radius ** (2);

 console.log(`Area of circle ${Math.PI * circleArea}
 Perimeter of circle ${2 * Math.PI * radius} `);

/*
* 3. temperature convertion : 8min
* celcius to fahrenheit
* fahrenheit to celcius
*/
let celcius = +prompt("Enter the °C value to be converted to °F");
let fahrenheit = +prompt("Enter the value to convert °C to °F");
let ctof = celcius * 1.8 + 32;
let ftoc = (fahrenheit -32) /1.8; //ood example to understand the importance of ordering

console.log(`${celcius}°C : ${ctof}°F`);
console.log(`${fahrenheit}°F : ${ftoc}°C`)


/*
 * 4. print today's date separately
 * day of month is 11
 * month of year is 8
 * year is 2022
 */
const today = new Date();
console.log(today);
console.log(`Day of the month is ${today.getDate()}`);
console.log(`Month of year is ${today.getMonth() +1}`);
console.log(`Year is ${today.getFullYear()}`);

/*
stage is yours
There are at least 2 numbers having same first digit: true/false
*/


let numA = +prompt("Enter first number");
let numB = +prompt("Enter second number");
let numC = +prompt("Enter third number");

const compare = numA % 10 === numB % 10 || numA % 10 === numC % 10 || numB % 10 === numC % 10;


console.log(`There are at least 2 numbers having same first digit: ${compare}`);