/** ======================================= 
//*             Conditional structures 
/** ========================================


// ******************IF-ELSE****************/

console.log("**Conditional**");

//* Example1: Console dan girilen bir sayının pozitif,negatif yada 0 olduğunu tespit ederek yazdırınız

// const number = Number(prompt("Bir sayı giriniz"));
// //* Promptun önüne yazdığımız number yerine"+" ifadesi de konulabilinir
// if (number > 0) {
//   console.log(`${number} is a positive number `);
// } else if (number == 0) {
//   console.log(`${number} equal to 0`);
// } else {
//   console.log(`${number} is a negative number`);
// }

// console.log(number, typeof number);

//* Example2 console'dan 3 tam sayı alarak bunların en büyüğünü yazdırınız

//*Method 1
// const n1 = +prompt("Number1");
// const n2 = +prompt("Number2");
// const n3 = +prompt("Number3");

// if (n1 >= n2 && n1 >= n3) {
//   console.log(`${n1} is the largest number`);
// } else if (n2 >= n1 && n2 >= n3) {
//   console.log(`${n2} is the largest number`);
// } else if (n3 >= n1 && n3 >= n2) {
//   console.log(`${n3} is the largest number`);
// }

//* Example3 Calculator

//* Ternary Example

const note = +prompt("enter your exam grade");
let result = note >= 40 ? "passed" : "failed";
console.log(result);
