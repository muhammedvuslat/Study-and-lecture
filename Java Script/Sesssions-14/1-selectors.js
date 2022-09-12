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
button.style.backgroundColor = "brown";
button.style.color = "yellow";
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

//? 1- queryselector() etiket secebilir.

const myLi = document.querySelector("li");
console.log(myLi); //! dediimizde html yapısını gösterecek
console.log(myLi.innerText); //! dediğimizde sadece indisdeki yazıyı verecek
myLi.style.color = "green";

//? 2- queryselector() class secebilir.

const itemMlist = document.querySelector(".item-list");
itemMlist.style.backgroundColor = "grey";

//? 3- queryselector() id secebilir.

const input = document.querySelector("#input");
console.log(input.value);

document.querySelector("#btn").style.cursor = "pointer";

//? 4- queryselector() ile CSS deki gibi secim yapilabilir.

const itemH2 = document.querySelector(".item-list h2");
itemH2.style.color = "purple";

const myBtn = document.querySelector("input[type='button']"); //! property e göre seçim yapma yöntemi
console.log(myBtn);
