import { useContext, useState } from 'react';
import './App.css';
import Start from './components/quizStart';
import { Test } from './components/quizTest';
import { End } from './components/quizEnd';
import { QuestionContext } from './questionContext';

function App() {
  const [quizState, setQuizState] = useState("pending");
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(0);

  const questions = useContext(QuestionContext);

  switch (quizState) {
    case "pending":
      return(
        <div className="app">
          <h1 className="app-header">JavaScript Quiz Test</h1>
          <Start 
            start={() => setQuizState("start")} 
            setTime={setTime}
          />
        </div>
      );
    case "start":
      return(
        <div className="app">
          <h1 className="app-header">JavaScript Quiz Test</h1>
          <QuestionContext.Provider value={questions}>
            <Test
              answers={answers}
              updateAnswers={setAnswers}
              finish={() => setQuizState("finish")} 
            />
          </QuestionContext.Provider>
        </div>
      );
    case "finish":
      return(
        <div className="app">
          <h1 className="app-header">JavaScript Quiz Test</h1>
          <End 
            answers={answers}
            resetAnswers={() => setAnswers([])}
            startTime={time}
            start={() => setQuizState("start")}
          />
        </div>
      );
  }
}

export default App;