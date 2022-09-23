const body = document.querySelector("body");
const car = document.querySelector(".car");
const ground = document.querySelector(".ground");

body.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    if (!ground.classList.contains("right")) {
      ground.classList.add("right");
      car.classList.add("pop-up");
    } else {
      ground.classList.remove("right");
      car.classList.remove("pop-up");
    }
  }
});
