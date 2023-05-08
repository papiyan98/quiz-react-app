import React from "react";

export const End = function({ answers, startTime, start, resetAnswers }) {
  const rightAnswersCount = () => {
    let rightAnswers = 0;
    
    answers.forEach(answer => {
      if (answer) rightAnswers++;
    });

    return rightAnswers;
  }

  const calcSpentTime = () => {
    let minute = Math.floor((Date.now() - startTime) / 60000);
    let second = Math.floor(((Date.now() - startTime) % 60000) / 1000);

    if (second < 10) second = '0' + second;

    return `${minute}:${second}`
  };
 
  const handleClick = () => {
    resetAnswers();
    start();
  };

  return(
    <>
      <img className="app-logo" src="quiz-icon.png" alt="Quiz Icon"/>
      <p className="result">Result: {rightAnswersCount()} of {answers.length}</p>
      <p className="spentTime">Time Spent {calcSpentTime()}</p>
      <button onClick={handleClick} className="tryAgain-btn">Try Again</button>
    </>
  );
};