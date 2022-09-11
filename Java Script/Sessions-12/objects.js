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
console.log(kisi1);
console.log(kisi1.ad);
console.log(kisi2.maas);
console.log(kisi2["id"]);

// //? Global alanda window objesini gosterir.Yani fonksiyon dışında personel ögesini göstermeyecektir
// console.log(this);
// window.alert("Merhaba");

const worker = {
  name: "Can",
  surname: "Canan",
  age: 33,
  job: "developer",
  languages: ["C++", "Java", "Javacript", "Pyhton", "Go"],
  salary: "140000",
};

console.log(worker);

console.log("JOB:", worker.job);
console.log("languages:", worker["languages"]);

console.log(worker.languages[2]);

worker["languages"].forEach((l) => console.log(l));

worker.dob = "1990";
worker.email = "can@gmail.com";
console.log(worker);

// %10 zaman maaşa değişiklik yapıldı
// worker["salary"] = worker["salary"] * 1.1;
worker["salary"] *= 1.1; //! yukarıdaki çözümü kısa yolu
console.log(worker);

//* Object Copy
const person = worker; //! Shallow (Sig - Sığ) Copying (sı koplamada personda yapılan değişiklik workerda da gerçekleşir)
console.log("PERSON:", person);
//! Object.create(), Object.assign(), spread (...), concat() , slice() -> Shallow Copying

person.dob = 2000;
console.log("PERSON:", person);

//! Deep Copy (Deep(derin) kopyalamada oluşturulan deişken de yapılan değişiklik worker değişkenini etkilemecektir)
let deepCopyOfWorker = JSON.parse(JSON.stringify(worker));
// console.log(JSON.stringify(worker));

deepCopyOfWorker.dob = "2022";
console.log("DEEP:", deepCopyOfWorker);

//* ======================================================
//*              Object Metotlari
//* ======================================================
const personal = {
  name: "Can",
  surname: "Canan",
  dob: "1990",
  job: "developer",
  salary: "140000",
  drivingLicense: true,
  calculateAge: function () {
    return new Date().getFullYear() - this.dob;
  },
};

console.log(personal.calculateAge());
