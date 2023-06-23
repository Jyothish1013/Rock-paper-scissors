let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}

update();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "tie";
      console.log(result);
    } else if (computerMove === "paper") {
      result = "loss";
      console.log(result);
    } else if (computerMove === "scissors") {
      result = "win";
      console.log(result);
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "win";
      console.log(result);
    } else if (computerMove === "paper") {
      result = "tie";
      console.log(result);
    } else if (computerMove === "scissors") {
      result = "loss";
      console.log(result);
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "loss";
      console.log(result);
    } else if (computerMove === "paper") {
      result = "win";
      console.log(result);
    } else if (computerMove === "scissors") {
      result = "tie";
      console.log(result);
    }
  }
  if (result === "win") {
    score.wins += 1;
  } else if (result === "loss") {
    score.losses += 1;
  } else if (result === "tie") {
    score.ties += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".result").innerHTML = `You ${result}`;

  document.querySelector(
    ".move"
  ).innerHTML = `Your Picked <img src="${playerMove}-emoji.png" alt="rock" width="50px"> <img src="${computerMove}-emoji.png" alt="rock" width="50px"> computer Move`;

  update();
}

function pickComputerMove() {
  const randomNum = Math.random();
  let computerMove = "";
  if (randomNum > 0 && randomNum < 1 / 3) {
    computerMove = "rock";
  } else if (randomNum > 1 / 3 && randomNum < 2 / 3) {
    computerMove = "paper";
  } else if (randomNum > 2 / 3 && randomNum < 1) {
    computerMove = "scissors";
  }
  console.log(computerMove);

  return computerMove;
}

function reset() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  update();
}

function update() {
  document.querySelector(
    ".count"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
