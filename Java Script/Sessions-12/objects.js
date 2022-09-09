//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");
//! 3 farkli yontem ile Object olusturulabilir
//* ---------------------------------------------------------
//* 1- Object() class'ından new Operatörü ile
//* ---------------------------------------------------------

const arabalar = new Object();
arabalar.marka = "BMW";
arabalar.motor = "1.3";
arabalar.model = 2022;
arabalar.lpg = true;
console.log(arabalar);

//! Read //?
console.log(arabalar.lpg); //? .notation(nokta gösterimi)
console.log("Model:", arabalar["model"]); //?square bracket notation(köşeli parantez gösterimi)

// //? Square bracket yonteminin en buyuk avantaji key degerini
// //? degisken olarak kullanabilmemizdir.
const key = "marka"; //? tanımlanmamış bir keyi değişkene atarsak clg de undefined göreceğiz
console.log(arabalar[key]);

arabalar.motor = "1.6"; //! motor 1.3 iken heap üzerinden 1.6 ile değiştirildi
console.log(arabalar);

// //* ---------------------------------------------------------
// //* 2- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
// //* ---------------------------------------------------------

// //? Object Constructure

function Personel(id, ad, maas) {
  this.id = id;
  this.ad = ad;
  this.maas = maas;
  console.log(this); //! Personel objesine baglanmistir (binded) Personeli1-2 ayrı ayrı yazdırabilir
}

const kisi1 = new Personel("1234567890", "Mustafa", 15000);
const kisi2 = new Personel("1717567890", "Canan", 25000);
