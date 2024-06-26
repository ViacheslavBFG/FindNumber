"use strict";
const musicGameOver = document.querySelector(".gameover");
const musicYouWin = document.querySelector(".youwin");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let numberScore = 7;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".restart").addEventListener("click", function () {
  numberScore = 7;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = numberScore;
  displayMessage("❓ Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#6b7280";

  document.querySelector(".header").textContent = "Crack The Code";
});

document.querySelector(".check").addEventListener("click", function () {
  let inputNumber = Number(document.querySelector(".guess").value);
  if (!inputNumber) {
    document.querySelector(".message").textContent = "⛔ Need a number !";
  } else if (inputNumber === secretNumber) {
    document.querySelector(".message").textContent = "🥇 Correct number !!!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".header").textContent = "👏👏👏 YOU WIN ";
    document.querySelector(".number").textContent = secretNumber;
    musicYouWin.play();
    if (numberScore > highScore) {
      highScore = numberScore;
      document.querySelector(".hightscore").textContent = highScore;
    }
  } else if (inputNumber !== secretNumber) {
    if (numberScore > 1) {
      document.querySelector(".message").textContent =
        inputNumber > secretNumber ? "😲 Too high" : "🤷‍♂️ Too low";
      numberScore--;
      document.querySelector(".score").textContent = numberScore;
    } else {
      document.querySelector(".message").textContent = "💀 GAME OVER +_+";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
      musicGameOver.play();
    }
  }
});
