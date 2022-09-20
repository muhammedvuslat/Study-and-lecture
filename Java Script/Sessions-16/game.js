//! 0 - 100 arasında rasgele bir sayı tut
const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);
//! Variables
let score = 10;
let topScore = 0;

//! check buton ataması
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg"); //! kullanıcı numara girmediğinde hata vermesi için msg yazısının deişmesi için atama
  const body = document.querySelector("body"); //! body renk değişimi için body ataması

  //! input girilmedi ise kullanıcıya bilgi ver
  if (!guessInput) {
    msg.innerText = "Please enter a number";
  } else if (randomNumber === guessInput) {
    msg.innerHTML = `Congrats You Win <i class="fa-solid fa-face-grin-hearts fa-2x"></i>`; //! <i> yani html ögesi eklendiği için innerHTML girişi sağlandı
    // document.querySelector("body").style.background = "green"; //? normal tanımlama
    body.className = "bg-success";
    if (score > topScore) {
      topScore = score;
      document.querySelector(".top-score").textContent = topScore;
    }
    document.querySelector(".secret-number").textContent = randomNumber;
  } else {
    score -= 1; //! veya score--;

    guessInput > randomNumber
      ? (msg.innerText = "DECREASE")
      : (msg.innerText = "INCREASE");
  }
});
