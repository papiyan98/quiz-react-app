import React from "react";

export default function Start({ start, setTime }) {
  const handleClick = () => {
    setTime(Date.now());
    start();
  }

  return(
    <>
      <img className="app-logo" src="quiz-icon.png" alt="Quiz Icon"/>
      <p>Test your JavaScript skills right now!</p>
      <p>The test contains simply questions and there is no time limit.</p>
      <p>It's just a nice way to see how much you know, or don't know :)</p>
      <p>At the end, total spent time and your correct answers count will be displayed.</p>
      <button className='start-btn' onClick={handleClick}>Start Quiz</button>
    </>
  );
}