import React, { useContext, useState } from "react";
import { QuestionContext } from "../questionContext";

export const Test = ({ answers, updateAnswers, finish }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);

  const questions = useContext(QuestionContext);

  const handleClick = () => {
    const answer = (selected && selected.lastElementChild.textContent === questions[current].answer) ? true : false;

    updateAnswers([
      ...answers, answer
    ]);

    if (current !== questions.length - 1) {
      if (selected) selected.classList.remove('selected');

      setCurrent(current + 1);
    } else {
      finish();
    }
  };

  const handleAnswer = (event) => {
    if (selected) selected.classList.remove('selected');

    event.currentTarget.classList.add('selected');
    setSelected(event.currentTarget);
  };
  
  return (
    <>
      <p className="question">{current + 1}. {questions[current].question}</p>
      <p className="answer" onClick={handleAnswer}><span>a) </span><span>{questions[current].a}</span></p>
      <p className="answer" onClick={handleAnswer}><span>b) </span><span>{questions[current].b}</span></p>
      <p className="answer" onClick={handleAnswer}><span>c) </span><span>{questions[current].c}</span></p>
      <p className="answer" onClick={handleAnswer}><span>d) </span><span>{questions[current].d}</span></p>
      <span className="total-questions">Question {current + 1} of {questions.length}</span>
      <button className="next-btn" onClick={handleClick}>{current === questions.length - 1 ? "Finish" : "Next"}</button>
    </>
  );
};