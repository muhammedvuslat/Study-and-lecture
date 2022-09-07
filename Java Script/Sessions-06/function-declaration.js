//*===============================================
//*               FUNCTIONS
//* ===============================================

//*------------------------------------------------
//*     1.Method  : FUNCTION DECLARATION
//*------------------------------------------------

console.log("**** FUNC DECLARATION ******");

//* Example:
//************************************************/

yazdir(); /* fonsiyondan  önceki satırda da çağırılabilinir*/

function yazdir() {
  /*Fonsiyonun Tanımlnaması / Function declaration*/
  console.log("Hello");
}

yazdir(); /*İnvoke , call , cağırması*/

//* Example2:
//************************************************/

function selamla(ad, soyAd) {
  console.log(`Merhaba ${ad} ${soyAd}`);
}
selamla("Mehmet", "Ayhan");
selamla("Muhammed", "Cevik");
selamla("Ayşe");
/*İkinci tanımlama boş olduğu için konsolda Ayşe undefined çıkacaktır*/
/*undefined yazmaması için yukarıdaki satırda 
[function selamla(ad, soyAd = "")] yazılması gereklidir */

//* Example3:
//************************************************/

function calculateAge(name, dateOfBirth) {
  const result = `${name}'s age is ${new Date().getFullYear() - dateOfBirth}.`;
  return result;
}
const message1 = calculateAge("Ali", "2001");
console.log(message1);

//* Example4:
//************************************************/

function oddEven(number) {
  return number % 2 ? `${number} "Odd number"` : `${number} "Even number"`;
}
console.log(oddEven(172));
console.log(oddEven(199));

//* Example5:
//************************************************/
/*Aynı fonsiyonun kullanıcı tarifından değer girilen hali */
const number2 = +prompt("Enter a number");
console.log(oddEven(number2));
