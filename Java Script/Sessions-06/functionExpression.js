// ? ================================================
// ?                FUNCTION
// ?=================================================

//!--------------------------------------------------
//! 2.Method  : FUNCTION EXPRESSION(Fonksiyon Tanımlama)
//!--------------------------------------------------
console.log("******** 2- EXPRESSION*******");

//* Example:
//***************************************************/

const oddEven = function (number) {
  return number % 2 ? `${number} is  odd number` : `${number} is even number`;
};

console.log(oddEven(8));

//* Example2: (Find the largest number)
//***************************************************/

const findBig = function (n1, n2, n3) {
  let theBigest;
  if (n1 >= n2 && n1 >= n3) {
    theBigest = n1;
  } else if (n2 >= n1 && n2 >= n3) {
    theBigest = n2;
  } else if (n3 >= n1 && n3 >= n2) {
    theBigest = n3;
  }
  return theBigest;
};

const n1 = +prompt("Number1");
const n2 = +prompt("Number2");
const n3 = +prompt("Number3");

console.log(`Largest of the entered numbers: ${findBig(n1, n2, n3)}`);

const calculate = function (x, y, operator) {
  let result = 0;
  switch (operator) {
    case "+":
      result = addition(x, y);
      break;
    case "-":
      result = subtraction(x, y);
      break;
    case "/":
      result = division(x, y);
      break;
    case "*":
      result = multiplication(x, y);
      break;
    default:
      break;
  }
  return result;
};

const addition = function (x, y) {
  return x + y;
};
const subtraction = function (x, y) {
  return x - y;
};
const division = function (x, y) {
  return x / y;
};
const multiplication = function (x, y) {
  return x * y;
};

console.log(calculate(8, 2, "/"));
console.log(calculate(56, 7, "/"));
