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
