//* =====================================================
//*                     FOR LOOP
//* ======================================================

//?-------------------------Örnek 1-------------------------------
//* Tüm dizenin toplamı

const dizi = [-5, 15, 22, -4, 45, 78];

const topla = (n) => {
  let negatifler = 0;
  let pozitifler = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
      negatifler += n[i];
    } else {
      pozitifler += n[i];
    }
  }
  console.log(`Dizideki Pozitif Sayıların Toplamı: ${pozitifler}`);
  console.log(`Dizideki Negatif Sayıların Toplamı: ${negatifler}`);
};
topla(dizi);

//?-------------------------Örnek 2-------------------------------
//* Negatif ve pozitif sayıları farklı dizelere ayır

const pozitif = [];
const negatif = [];

const dizeAyir = (n) => {
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
      negatif.push(n[i]);
    } else {
      pozitif.push(n[i]);
    }
  }
};
dizeAyir(dizi);

console.log(negatif);
console.log(pozitif);
console.log(dizi);

//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* Örnek 3
//* Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];
//!-------------------------------------[Funct]-------------------------------------
//? Kırmızı yorum alanı arasına bir fonksiyon(findstudents) tanımlandı ve bu fonksiyon farklı örneklerde de çalışabişir durumda

const findstudents = (arr, search) => {
  let counter = 0;
  for (let i in arr) {
    if (search === arr[i]) {
      counter++;
    }
  }
  if (counter === 0) {
    return `${search} can not be found`;
  } else {
    return `${search} found ${counter} times`;
  }
};
//!-------------------------------------[Funct]-------------------------------------
const name = prompt("Please enter a name").toLowerCase(); // prompt ile dışardan veri alanım lover case ile alınan verinin küçük harf olması sağlandı
console.log(findstudents(students, name)); //console.log(findstudents(students, name)) daki student değişkeni farklı dizi tanımlamalarında da kullanılabilir
//*-------------------------------------------------------
//* ======================================================
//*                   FOR-OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

//!-------------------------------------[Funct]-------------------------------------
//? Kırmızı yorum alanı arasına bir fonksiyon(findstudentsof) tanımlandı ve bu fonksiyon farklı örneklerde de çalışabişir durumda
const findstudentsOf = (arr, search) => {
  let counter = 0;
  for (let item of arr) {
    //* item rastgele bir isimdir [i] gibi düşünülebilinir
    if (search === item) {
      counter++;
    }
  }
  if (counter === 0) {
    return `${search} can not be found`;
  } else {
    return `${search} found ${counter} times`;
  }
};
//!-------------------------------------[Funct]-------------------------------------
const name2 = prompt("Please enter a name").toLowerCase();
console.log(findstudentsOf(students, name2));

//? Yöntem 2

// const findStudentsOf = (arr, search) => {
//   let counter = 0;
//   for (let item of arr) {
//     //? Ternary
//     // search === item ? counter++ : null;

//     //! Short-circuit yöntemi: && => kosul dogru (true) ise ifadeyi calisitir.
//     search === item && counter++;

//     //! Short-circuit yöntemi: || => kosul yanlis (false) ise ifadeyi çalıştır.
//     search === item || counter++;
//   }

//   return !counter
//     ? `${search} can not be found`
//     : `${search} found ${counter} times`;
// };

// const studentName = prompt("Please enter a name").toLowerCase();
// console.log(findStudentsOf(students, studentName));
