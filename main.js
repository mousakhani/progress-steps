let step = 1;
const nextButton = document.querySelector("#next");
const prevButton = document.getElementById("prev");
const progress = document.querySelector(".progress");
progress.style.width = "0px";

nextButton.addEventListener("click", nextHandler);
prevButton.addEventListener("click", prevHandler);

function nextHandler() {
  if (step < 4) {
    step++;
    prevButton.className = "next";
    document.getElementById("id" + step).className = "circle active";
    progress.style.width = parseInt(progress.style.width) + 120 + "px";
  }
  if (step === 4) {
    nextButton.className = "next disabled";
  }
}

function prevHandler() {
  if (step > 1) {
    nextButton.className = "next";
    document.getElementById("id" + step).className = "circle";
    progress.style.width = parseInt(progress.style.width) - 120 + "px";
    step--;
  }
  if (step === 1) {
    prevButton.className = "next disabled";
  }
}
