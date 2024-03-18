let rateButton = document.querySelectorAll(".rateButton");

let rateChosen;


for (let i = 0; i < rateButton.length; i++) {
  rateButton[i].addEventListener("click", function () {
    for (let j = 0; j < rateButton.length; j++) {
      rateButton[j].classList.remove("active");
    }

    this.classList.add("active");
  });
}
