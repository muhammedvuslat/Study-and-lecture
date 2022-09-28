//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------
// const wait = (waitingTime) => {
//   const startTime = new Date().getTime();
//   while (new Date().getTime() < startTime + waitingTime);
// };
// console.log("hello");
// console.time("timer");
// wait(3000); //! Blocking code 3000 ms bekletir ↓
// console.timeEnd("timer");
// console.log("Full-Stack");

//* Asenkron (setTimeout)
//*----------------------------------------------------
//!↓Aşağıdaki kod sıralamasına göre değil zaman sıralamasına göre gelecektir setTimeout 2000 ms tamamlandıktan sonra yani son satırda çıktılanır↓
console.log("T1");
setTimeout(() => {
  //! non-blocking (Engellenemez) code
  console.log("Hello");
}, 2000); //? süre 0 dahi olsa microTask ve makroTask sıralamasına göre T1→T2→Hello şeklinde olacaktır
console.log("T2");

//* Asenkron (setInterval, clearInterval)
//*----------------------------------------------------
console.log("Timer Started");
let counter = 0;
const intervalId = setInterval(() => {
  console.log(++counter);
  if (counter > 4) {
    clearInterval(intervalId);
  }
}, 1000); //? Her 1000 ms üzerinden counter yani sayaç yaparak yazdıracak
console.log("Timer Stoped"); //! micro task olduğu için clg önce glip macrotask olan Interval timerı tamamlayıp gelecek

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
  console.log("john:Hi");
  setTimeout(() => {
    console.log("Sarah: Hello");
    setTimeout(() => {
      console.log("John: How Are you?");
      setTimeout(() => {
        console.log("Sarah:Fine and you?");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//? COZUMLER:
//?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)
