//*=================================================
//*               ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durudurulmasini saglar. Yapilan istek yerine getirilip sonuc
//* degerlerinin dondurulmesine ile kodun calismasi devam eder.

let isError = false;
const getNews = async function () {
  const API_KEY = "93037a64725447a1a8375d55484710e9"; //! 9
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      isError = true;
      // throw new Error(`Something went wrong: ${res.status}`);
    }
    const data = await res.json(); //! json formatı ile içerisine erişim
    // console.log(data.articles); //! articles içierisini görmek için data.articles
    renderNews(data.articles);
  } catch (error) {
    console.log(error);
  }
};
const renderNews = (news) => {
  const newsList = document.getElementById("news-list");
  if (isError) {
    newsList.innerHTML += `
    <h2>News can not be fetched </h2>
    <img src="./img/404.png" alt="">
    `;
    return;
  }
  news.forEach((item) => {
    const { title, description, urlToImage, url } = item; //! Destructuring yapı
    newsList.innerHTML += `
    <div class="col-md-6 col-lg-4 col-xl-3"><div class="card" ;">
    <img class="card-img-top" src="${urlToImage}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
    <a href="${url}" target="_blank" class="btn btn-warning">Details</a>
    </div>
    </div></div>
         
    `;
  });
};
window.addEventListener("load", getNews); //! sayfa yüklendikten sonra getNews çağrılıt clg(getNews) yerine
