/* ================== Guessing Game Example ==================  */

/* Example3
Eng:
• The program should keep a random number between 0-100 and let the user set this number by 5.
should want him to know at once.
• In every wrong, he should decrease his right and increase / decrease the user by saying.
should guide.
• As a result, if the user has 0 rights, "Sorry, you didn't know"
it should print an informational message "Congratulations... you tried it".

Tr:
• Program 0-100 arasında rasgele bir sayı tutmalı ve kullanıcının bu sayıyı 5 kerede (hak) bilmesini istemelidir.
• Her yanlışta hakkını bir düşürmeli ve ARTTIR/AZALT diyerek kullanıcıyı
yönlendirmelidir.
• Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi
ise "Tebrikler ... denemede bildiniz" diye bir bilgi mesajı yazdırmalıdır.*/

let right = 5;
const random = Math.round(Math.random() * 100);
console.log(random);
let guess;

do {
  guess = Number(prompt("Please enter a number between 0-100"));
  right -= 1;
  if (guess === random) {
    console.log(`Congratulations ${5 - right} you tried it 😊`);
    break;
  } else if (guess < random) {
    console.log("increase ⬆");
  } else {
    console.log("decrease ⬇");
  }
} while (right > 0);

if (guess !== random) {
  console.log("Sorry, you didn't know 😣");
}
