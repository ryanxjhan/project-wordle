import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessSlots from "../GuessSlots/GuessSlots";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState(
    Array(NUM_OF_GUESSES_ALLOWED).fill(".....")
  );
  const [numGuesses, setNumGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState("");
  function addGuess(guess) {
    let nextGuesses = [...guesses];
    if (numGuesses < NUM_OF_GUESSES_ALLOWED) {
      nextGuesses[numGuesses] = guess;
      let nextNumGuesses = numGuesses + 1;
      setNumGuesses(nextNumGuesses);
      setGuesses(nextGuesses);
      if (guess === answer) {
        setGameStatus("happy");
      } else if (nextNumGuesses === NUM_OF_GUESSES_ALLOWED) {
        setGameStatus("sad");
      }
    }
  }
  return (
    <>
      <GuessSlots guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} />
      {gameStatus === "happy" ? (
        <Banner status={gameStatus} numGuesses={numGuesses} />
      ) : undefined}
      {gameStatus === "sad" ? (
        <Banner status={gameStatus} answer={answer} />
      ) : undefined}
    </>
  );
}

export default Game;
