const form = document.querySelector("section.top-banner form");
const input = document.querySelector(".container input");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section .cities");

localStorage.setItem(
  "tokenKey",
  "APmZLfxtMtsZU2trsJj32PEnVbHzYqNQLpKk76K4PGiZ4xFV2VieIJjIg79JYHA4"
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getWeatherDataFromApi();
});

const getWeatherDataFromApi = async () => {
  //   alert("http request is gone!");
  const tokenKey = DecryptStringAES(localStorage.getItem("tokenKey"));
  //   alert(tokenKey);
  const inputValue = input.value;
  const units = "metric";
  const lang = "tr";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKey}&units=${units}&lang=${lang}`;
  const response = await fetch(url).then((response) => response.json());
  console.log(response);
  const { main, sys, weather, name } = response;
  const iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
  const cityNameSpans = list.querySelectorAll(".city span");
  const cityNameSpansArray = Array.from(cityNameSpans);
  if (cityNameSpansArray.length > 0) {
  }
  console.log(cityNameSpansArray);
  const createdLi = document.createElement("li");
  createdLi.classList.add("city");
  createdLi.innerHTML = `
  <h2 class="city-name" data-name="${name}, ${sys.country}">
                             <span>${name}</span>
                             <sup>${sys.country}</sup>
                        </h2>
                            <div class="city-temp">${Math.round(
                              main.temp
                            )}<sup>°C</sup></div>
                            <figure>
                                <img class="city-icon" src="${iconUrl}">
                                <figcaption>${
                                  weather[0].description
                                }</figcaption>
                            </figure>`;
  //! append vs prepend
  list.prepend(createdLi);
  form.reset();
};
