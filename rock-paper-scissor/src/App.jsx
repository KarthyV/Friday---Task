import React, { useState } from "react";
import "./App.css";
import logo from "./images/logo.svg";
import paper from "./images/Paper.png";
import rock from "./images/Rock.png";
import scissor from "./images/Scissors.png";

function App() {
  const [user, setUser] = useState("");
  const [comp, setComp] = useState("");
  const [userChose, setUserChose] = useState(false);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  const handSigns = {
    rock: rock,
    paper: paper,
    scissor: scissor,
  };
  let hands = ["rock", "paper", "scissor"];

  function userPlayed(userChoice) {
    setUser(userChoice);
    let computerChoice = hands[Math.floor(Math.random() * hands.length)];
    setComp(computerChoice);

    setUserChose(true);
    decide(userChoice, computerChoice);
  }

  const decide = (userChoice, computerChoice) => {
    // User winning Probability
    console.log(user, comp);
    if (
      (userChoice == "paper" && computerChoice == "rock") ||
      (userChoice == "scissor" && computerChoice == "paper") ||
      (userChoice == "rock" && computerChoice == "scissor")
    ) {
      setResult("YOU WIN");
      setScore(score + 1);
    }
    // Computer winning Probability
    if (
      (userChoice == "paper" && computerChoice == "scissor") ||
      (userChoice == "rock" && computerChoice == "paper") ||
      (userChoice == "scissor" && computerChoice == "rock")
    ) {
      setResult("YOU LOSE");
    }
    // Draw
    if (
      (userChoice == "paper" && computerChoice == "paper") ||
      (userChoice == "scissor" && computerChoice == "scissor") ||
      (userChoice == "rock" && computerChoice == "rock")
    ) {
      setResult("It's a Tie");
    }
    console.log(result);
  };

  function handlePlayAgain() {
    console.log(user, comp);
    setUserChose(false);
    setUser("");
    setComp("");
  }

  return (
    <div className="App">
      <div className="gameHeader">
        <div className="gameTitles">
          <img src={logo} alt="logo" />
        </div>
        <div className="game_scoreCard">
          <span className="scoreCard_title">SCORE</span>
          <h3 className="scoreCard_score">{score}</h3>
        </div>
      </div>
      {!userChose && (
        <div className="game_ground">
          <div onClick={() => userPlayed("paper")} className="handSign paper">
            <img src={paper} alt="paper" />
          </div>
          <div onClick={() => userPlayed("rock")} className="handSign rock">
            <img src={rock} alt="rock" />
          </div>
          <div
            onClick={() => userPlayed("scissor")}
            className="handSign scissor"
          >
            <img src={scissor} alt="scissor" />
          </div>
        </div>
      )}
      {userChose && (
        <div className="game_result">
          <div className="playerChoice">
            <div>
              <h3>YOU PICKED</h3>
            </div>
            <div className="result_handSign">
              <img src={handSigns[user]} />
            </div>
          </div>
          <div className="match_summary">
            <div>
              <h1>{result}</h1>
            </div>
            <button onClick={handlePlayAgain}>PLAY AGAIN</button>
          </div>
          <div className="compChoice">
            <div>
              <h3>COMPUTER PICKED</h3>
            </div>
            <div className="result_handSign">
              <img src={handSigns[comp]} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
