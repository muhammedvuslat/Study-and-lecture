//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================
console.log("****** NEW OPERATORS *******");

const car = {
  name: "BMW",
  model: 1990,
  engine: 1.6,
  colors: ["blue", "purple"],
};

//* 1.YONTEM (Classical)
const name1 = car.name;
const model1 = car["model"];

console.log(name1, model1);

//* 2.YONTEM: DESTRUCTURING

const { name: carName, colors, model, engine } = car;
console.log(carName, model, engine, colors);

//* EXAMPLE: NESTED
const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
};

const { car1, car2 } = cars;
console.log(car1);
const { name: c1Name, model: c1Model } = car1; //! name ve model şeklide yazdırılamaz çünkü cars objesinin içerisinde ↙
const { name: c2Name, model: c2Model } = car2; //! car1 ve car2 nin obje isimleri aynı bu nedenle isim değişikliği ataması yapılır
console.log(c2Name, c1Name);

//* Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "Josh",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

//* Classical
team.forEach((p) => {
  console.log("*******Classical*********");
  console.log("Name:", p.name);
  console.log("Surname:", p.surname);
  console.log("Job:", p["job"]);
  console.log("Age:", p.age);
});

//* DESTRUCTURING
team.forEach((p) => {
  const { name, surname, job, age } = p;
  console.log("*******Destructuring*********");
  console.log("Name:", name);
  console.log("Surname:", surname);
  console.log("Job:", job);
  console.log("Age:", age);
});

//* function nın dondurdugu obje dogrudan destructuring yapilabilir

const getInfo = () => {
  return {
    id: 1,
    productName: "Iphone",
    price: 30000,
  };
};

console.log(getInfo());
const { productName, price } = getInfo();
console.log("Product Name:", productName);
console.log("Product Price:", price);

//*======================================================
//*  REST (...)
//* ======================================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//* REST: (Arrays)
const autos = ["anadol", "reno", "bmw", "mercedes", "ferrari"];
const [anadol, reno, ...restAutos] = autos; //! rest operatörü (...değişkenİsmi) ile tanımmşanır
console.log(anadol, reno);
console.log(restAutos);

//* REST (Objects)
const personel = {
  pName: "john",
  surname: "smith",
  job: "developer",
  age: 30,
};
const { pName, job, ...ageSurname } = personel; //* ageSurname e atanan yeni değişken sayesinde pName ve job haricinden kalan objelere ulaştık
console.log(ageSurname); //* {surname: 'smith', age: 30}
