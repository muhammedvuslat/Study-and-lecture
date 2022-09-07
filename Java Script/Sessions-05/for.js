//* =========Döngüler(LOOPS)- FOR ========

const n = Number(prompt("sayı giriniz"));
let toplam = 0;
for (let i = 1; i <= n; i++) {
  toplam += i;
  console.log(toplam, i);
}

console.log(`Sonuc: ${toplam}`);

//* example: 0-100 arasında 10 adet rastgele tam sayı ureten kodu for dögüsü ile yazınız

for (let i = 1; i <= n; i++) {
  const random = Math.round(Math.random() * 100);
  console.log(random);
}

//*Ask the user for a number. Print whether the number is prime or not.
const number = Number(prompt("Enter a positive number"));
let prime = true;

if (number <= 1) {
  alert("Number must be greater than 1");
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      prime = false;
      break;
    }
  }
  const result = prime === true ? "Prime Number" : "İs not a prime number";
  console.log(`${number} ${result}`);
}
