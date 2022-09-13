console.log("**** TRAVERSING DOM ****");

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//*----------------------------------------------
//* 1- Yukari Yonde traverse
//*----------------------------------------------
//! parentElement, parentNode
const list = document.querySelector(".list");
const ul = list.parentNode;
ul.style.border = "2px solid red";
console.log(list.parentNode.parentNode.parentNode.parentNode.parentNode); //? document e ulaşır

console.log(list.parentElement);

//! Yöntem 2 closest(): belirtilen elementin parent'larin ilk uygun parent'i secer

const itemListSec = list.closest("section");
itemListSec.style.backgroundColor = "grey";

//*2- Asagi Yonde traverse
//*----------------------------------------------
const addItem = document.querySelector(".add-item");
console.log(addItem.children);
const h2 = addItem.children[0];
h2.style.color = "coral";

console.log(addItem.parentNode.parentNode.children[0]); //? header ı verir

//*3- Yatay Yonde traverse
//*----------------------------------------------

//! nextElementSibling ,previousElementSibling

const myList = ul.children;
console.log(myList);

const javascript = myList[2];

const css = javascript.previousElementSibling;
console.log(css.innerText);
const react = javascript.nextElementSibling;
console.log(react.innerText);
console.log(javascript.previousElementSibling.previousElementSibling.innerText);
console.log(ul.firstElementChild.innerText);
console.log(ul.lastElementChild.innerText);
