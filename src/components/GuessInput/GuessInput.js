import React, { useState } from "react";

function GuessInput({ addGuess }) {
  function handleSubmit(event) {
    event.preventDefault();
    const nextGuess = guess.toUpperCase();
    addGuess(nextGuess);
    setGuess("");
  }
  const [guess, setGuess] = useState("");
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          pattern="^[a-zA-Z0-9]{5}$"
          onChange={(event) => setGuess(event.target.value)}
        />
      </form>
    </>
  );
}

export default GuessInput;
