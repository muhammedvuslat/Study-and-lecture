// ?=========================================================
// ?                DIZILER (ARRAYS)
// ?=========================================================

console.log("***** ARRAYS ******");

//* Dizi Tanimlama
//* ---------------------------------------------------------
// 1. Yöntem (Array Literal) - Tercih edilen yöntem
const isimler = ["ahmet", "ismet", "can", "canan"];
console.log(isimler);
console.log(typeof isimler);
console.log(isimler.length);

// 2. Yöntem (Object constructor)

const diller = new Array("C++", "javascript", "Assembly", "Go", "Ruby");
console.log(diller);

const numbers = new Array(3, 2, 1);
console.log(numbers);

const numbers1 = new Array(10); /*10 elemanlı boş bir Array oluşturuldu*/
console.log(numbers1);

// 3 Yöntem (Array.of)
const veriler = Array.of(1, 2, 3);
console.log(veriler);

const veri = Array.of("deneme");
console.log(veri);

// Diziden Veri Okuma-Yazma (indisleme)
// ----------------------------------------------------------
// Veri Okuma-----------------------------
console.log(diller[1]);
const go = diller[3];
console.log(go);

console.log(isimler[isimler.length - 1]);
/**-1 birici negatif number deil n-1 mantığı önemli */
console.log(isimler.at(-1));

// Veri yazma-------------------------------
isimler[1] = "sefa";
console.log(isimler);

//!Uncaught TypeError: Assignment to constant variable.
// isimler = ["Ali", "Veli"];

numbers[
  numbers.length - 1
] += 1; /** += işareti ile eklene bilir ++ ile 1 artar */
console.log(numbers);

const yaslar = [22, 44, 55];
const kisiler = ["Ahmet", "Can", "2022", "2022-1990", true, yaslar];

console.log(kisiler);

// kişiler içerisindeki yaslar dizisinde bulunan 55 yasını konsola yaz
const yas55 = kisiler[5][2];
console.log(yas55);
// kişiler içerisindeki yaslar dizisinde bulunan 44 yasını konsola yaz ve 2 eksilt
kisiler[5][1] -= 2;
console.log(kisiler); /**Hem yaşlarda hemde kişilerde değişim sağlanır */
console.log(yaslar); /**yaşlar kişiler dizinin içinde 57. satır */

const arabalar = ["BMW", "Mercedes", "Fiat", "Anadol"];
//-------------------------------------
// pop() son elemanı siler ve sildiği elemanı dondurur.
//-------------------------------------
const silinen = arabalar.pop();
console.log(arabalar, silinen);

// push() dizinini sonuna eleman ekler ve diziin son eleman sayısını dondurur------

const n = arabalar.push("Citroen");
console.log(arabalar, n);

// unshıft diziinin 0. indeksine eleman ekler ve dizinin son eleman sayısını  dondurur.---------
const n1 = arabalar.unshift("Audi");
console.log(arabalar, n1);

// shıft dizinin 0. indeks elemanını siler ve silinen elamnı dondurur------
const Audi = arabalar.shift();
console.log(arabalar, Audi);

// splice()--------
// 1. parametre: eklenecek indis numarası
// 2. parametre: 0 ise araya ekleme 1 ise üzerine yazma(silme)
// 3. paramatre: yeni eklenecek veri
arabalar.splice(1, 0, "Passat");
console.log(arabalar);

arabalar.splice(3, 1, "Honda", "Toyota");
console.log(arabalar);

// reverse() Dizinin tamamını ters sıraya cevirir.
arabalar.reverse();
console.log(arabalar);

// sort() diziyi alfabetik olarak sıralar
const sayilar = [2, 3, 1, 5, 7, 6, 11, 111]; // Alfabetik sıralama yağtğı için yanlış sonuç çıkabilir
sayilar.sort();
console.log(sayilar);

isimler.sort();
console.log(isimler);

//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.
sayilar.sort((a, b) => a - b);
console.log(sayilar); // [1, 2, 3, 5, 6, 7, 11, 111]
sayilar.sort((a, b) => b - a);
console.log(sayilar); //[111, 11, 7, 6, 5, 3, 2, 1]

//* fill() //*
const array1 = [1, 2, 3, 4];
array1.fill(0);
console.log(array1);
array1.fill(1, 2, 4); //1 bas 2 den 4 e kadar
console.log(array1);
array1.fill(-1, 1); // -1 bas 1 den sona kadar
console.log(array1);

//? ===========================================================
//?  DIZI ERISIM METOTLARI
//? ===========================================================
const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5];

//* includes()
//*-----------------------------------------------------------
//* Varmı yok mu bakmamızı sağlar
console.log(sayilar1.includes(5));
console.log(sayilar1.includes("5"));

//* indexOf(),  lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur.
console.log(sayilar1.indexOf(2)); // 2 döndürür
console.log(sayilar1.lastIndexOf(2)); // 5 döndürür
console.log(sayilar1.lastIndexOf(22)); // bulunmayan birşey için -1 döndürür

//! Odev: prompt ile konsoldan bir sayi istenmeli (string veya number
//! olarak) eger bu girilen sayi, dizi icerisinde bulunuyorsa indisi
//! (string ve number olarak ayri) yazdirilmalidir. Eger bulunamadiysa
//! Aranilan bulunamamistir yazidirilmalidir.
//!-----------------------------------------------------------

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.
console.log(sayilar1.join(",")); // indisler arasına , koyar
console.log(sayilar1.join(" ")); // indisler arasına " " (boşluk)koyar
console.log(sayilar1.join()); // indisler arasına hiç birşey belirtilmez ise , koyar default olarak
console.log(sayilar1); // bilgi edinir ama orjinalini bozmaz

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.
console.log(sayilar1.toString());

//* slice()
//*-----------------------------------------------------------
const arabalar1 = ["BMW", "Mercedes", "Fiat", "Anadol"];
const yeniArabalar = arabalar1.slice(2);
console.log(yeniArabalar);
console.log(arabalar1);
const yeniArabalar1 = arabalar1.slice(1, 3); // ilk indis dahil son değer dahil değil
console.log(yeniArabalar1);

//* concat()
//*-----------------------------------------------------------
const yazilar = ["Bugun", "hava", "cok", "guzel"];
const numbersArr = [1, 2, 5, 7];
const combineArr = yazilar.concat(numbersArr);
console.log(combineArr);
const combineArr2 = numbersArr.concat(yazilar); // il yazılana 2. ci ekler
console.log(combineArr2);
const combineArr3 = numbersArr.concat(true, yazilar, [
  "aslinda",
  "cok",
  "sıcak",
]);
/**İçerisinde de concat edilebilir */
console.log(combineArr3);

//* every()
//*-----------------------------------------------------------

//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.
const yasArray = [18, 22, 42, 78, 34, 81];
const check = yasArray.every((yas) => yas >= 18);
const check2 = yasArray.every((yas) => yas >= 19);
console.log(check);
console.log(check2);
check
  ? console.log("Dizideki herkesin yaşı 18 den büyüktür")
  : console.log("Dizide 18 yaş altı var");
check2
  ? console.log("Dizideki herkesin yaşı 18 den büyüktür")
  : console.log("Dizide 18 yaş altı var");

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const buyuk80 = yasArray.some((yas) => yas > 80);
console.log(buyuk80); // true
const buyuk81 = yasArray.some((yas) => yas > 81);
console.log(buyuk81); // false

//* find() findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.
//? Örnek: Yasi 30 dan büyük olan ilk ve son elemanı döndür

const yasilk30 = yasArray.find((yas) => yas >= 30); // yaşı 30 dan büyük olan ilk indisi döndürür
console.log(yasilk30); // 42
const yasson30 = yasArray.findLast((yas) => yas >= 30); // yaşı 30 dan büyük olan son indisi döndürür
console.log(yasson30); // 81

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.
//? Örnek: Yasi 30 dan büyük olan ilk elemanın indexi döndür

const foundIndex = yasArray.findIndex((yas) => yas >= 30);
console.log(foundIndex);
