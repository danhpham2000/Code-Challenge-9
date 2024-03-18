let rateButton = document.querySelectorAll(".rateButton");
let rateChosen;
for (let i = 0; i < rateButton.length; i++) {
  rateButton[i].addEventListener("click", function () {
    for (let j = 0; j < rateButton.length; j++) {
      rateButton[j].classList.remove("active");
    }

    this.classList.add("active");
    rateChosen = this;
  });
}

let submitButton = document.querySelector(".btn");
let thankCard = document.querySelector(".thank-you");
let rateDisplay = thankCard.querySelector("p .rateChosen");
let card = document.querySelector(".card");

submitButton.addEventListener("click", function () {
  card.style.display = "none";
  thankCard.style.display = "flex";
  rateDisplay.innerHTML = rateChosen.innerHTML;
});
