import { useEffect, useMemo, useState } from 'react';
import './app.css'
import Quiz from './components/Quiz';
import data from './data'
import Timer from './components/Timer';
import User from './components/User';

function App() {
  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 400" },
      { id: 5, amount: "$ 500" },
      { id: 6, amount: "$ 1000" },
      { id: 7, amount: "$ 2000" },
      { id: 8, amount: "$ 4000" },
      { id: 9, amount: "$ 8000" },
      { id: 10, amount: "$ 16000" },
      { id: 11, amount: "$ 32000" },
      { id: 12, amount: "$ 64000" },
      { id: 13, amount: "$ 125000" },
      { id: 14, amount: "$ 250000" },
      { id: 15, amount: "$ 500000" },
      { id: 16, amount: "$ 1000000" }
    ].reverse(),
    []);

  const [user, setUser] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [finished, setFinished] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount)
  }, [moneyPyramid, questionNumber])



  const newQuestion =
    <>
      <div className="top">
        <div className="timer"><Timer setFinished={setFinished} questionNumber={questionNumber}></Timer></div>
      </div>
      <div className="bottom">\
        <Quiz
          data={data}
          questionNumber={questionNumber}
          setFinished={setFinished}
          setQuestionNumber={setQuestionNumber}
        ></Quiz>
      </div>
    </>

  return (
    <div className="app">
      {user ? <>
        <div className="main">
          {finished ? <h1 className='finishedText'>You earned: {earned}</h1> : (newQuestion)}

        </div>
        <div className="pyramid">
          <ul className="moneyList">
            {
              moneyPyramid.map((m) => (
                <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </> : <User setUser={setUser}></User>}
    </div>
  );
}

export default App;
