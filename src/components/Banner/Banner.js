import React from "react";

function Banner({ status, numGuesses, answer }) {
  return (
    <>
      <div className={`${status} banner`}>
        {status === "happy" ? (
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{numGuesses} guesses</strong>.
          </p>
        ) : undefined}
        {status === "sad" ? (
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        ) : undefined}
      </div>
    </>
  );
}

export default Banner;
