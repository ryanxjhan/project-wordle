import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function GuessSlots({ guesses, answer }) {
  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((_, row) => {
          let status = undefined;
          if (guesses[row] !== ".....") {
            status = checkGuess(guesses[row], answer);
          }
          return (
            <p className="guess" key={row}>
              {range(0, 5).map((_, col) => (
                <span
                  className={`cell ${
                    status === undefined ? "" : status[col].status
                  }`}
                  key={col}
                >
                  {guesses[row][col] === "." ? "" : guesses[row][col]}
                </span>
              ))}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default GuessSlots;
