console.log("***** SELECTORS *****");

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

//* EXAMPLE-1
//*-------------------------------------------
const h1 = document.getElementById("header");
console.log(h1);
h1.style.color = "white";
h1.style.backgroundColor = "red";

//* EXAMPLE-2
//*-------------------------------------------
const myInput = document.getElementById("input");
const button = document.getElementById("btn");
button.style.backgroundColor = "black";
button.style.color = "magenta";
button.style.width = "7rem";
button.style.border = "none";
button.style.borderRadius = "10px";
button.style.padding = "1rem";
button.style.fontSize = "1.1rem";
myInput.style.padding = "1rem";

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

//*EXAMPLE-3
//*-------------------------------------------
const list = document.getElementsByTagName("li");
console.log(list);
list[2].style.color = "red"; //! yöntem1 list içerisinde ögeleri seçmek için
list.item(3).style.color = "orange"; //! yöntem2 list içerisinde ögeleri seçmek için
const elementThree = list.item(5);
elementThree.style.color = "darkgreen";
elementThree.textContent = "React / Vue / Angular";

list[4].innerText = "Djang / Flask";
console.log(list[1].textContent);
console.log(list[1].innerText);

//? HTML kodlarini calistirir. (Guvenlik acisindan problemli)
list[4].innerHTML = "<a href=`https://github.com/muhammedvuslat`>Github</a>";

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* EXAMPLE-4
//* ------------------------------------------

const myList = document.getElementsByClassName("list");
console.log(myList);
console.log(myList[3].innerText);

//? HTML Collection'larda Dizi metotlari dogrudan kullanilamaz.
//? Spread ve Array.from() ile kullanilabilri hale gelir.
//?Array.from()
const myListArray = Array.from(myList);
myListArray.forEach((item) => console.log(item.innerText));

//?Spread
[...myList].forEach((item) => console.log(item.innerText));
[...myList].forEach((item) => (item.style.color = "red"));
