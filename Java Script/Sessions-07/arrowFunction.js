// ? ===============================================
// ?               Function
// ? ===============================================

// !------------------------------------------------
// ! 3.Method  : ARROW FUNCTION
// !------------------------------------------------

console.log("**** ARROW ******");

// //* Example:
//* Eng:Calculate the volume of the cylinder
//* Tr:Silindirin hacmini hesaplayın
// //**************************************************/

const r = Number(prompt("Please enter radius"));
const h = Number(prompt("Please enter height"));

const volumeCalculation = (r, h) => Math.PI * r ** 2 * h;

console.log(
  `Radius:${r} , Height:${h} = Volume:${volumeCalculation(r, h).toFixed(2)}`
);

// //* Example2:
//* Eng:Ask the user for the date of birth, print the age on the console
//* Tr::Kullanıcıdan doğum tarihini isteyiniz yaşını konsola yazdırınız
// //**************************************************/

//* 1-) Function Arrow Method*/

const date = Number(prompt("Enter your date of birth"));

const calculateAge = (date) => {
  const age = new Date().getFullYear() - date;
  return age;
};

console.log(`Your age ${calculateAge(date)}`);

//* 2-) Function Expression Method*/

const calculateAge2 = function (date) {
  const age = new Date().getFullYear() - date;
  return age;
};

console.log("Your age" + calculateAge2(date));

//* DİKKAT!
/* Eng:In function expression and arrow function methods
the function must be defined first and then called.
Otherwise you will get an error.
/* Tr:Fonksiyon expression ve arrow fonksiyon yontemlerinde
önce fonksiyon tanimlanmalidir sonra cagrilmalidir.
Aksi takdirde hata alrsiniz.
// //**************************************************/

////*Example3:
/*-------------------------------------------------------------
/* Tr:Girilen n. terime kadar Fibonacci sayilarinin toplamini
/* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
/* FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...
/* Eng:Entered n. sum of Fibonacci numbers up to term
/* encode the function that calculates and prints it with a loop.
/* FIBONACCI terms: 1, 1, 2, 3, 5, 8, 13, 21, ...*/

const fibo = (n) => {
  let fib1 = 1;
  let fib2 = 1;
  let total = 0;

  for (let i = 2; i < n; i++) {
    total = fib1 + fib2;
    fib1 = fib2;
    fib2 = total;
    console.log(total);
  }
  return fib2;
};

const n = Number(prompt("enter n term"));
if (n <= 0) {
  console.log("Please enter a number greater than 0");
} else {
  console.log(`Fibonaccı(${n}) = ${fibo(n)}`);
}
