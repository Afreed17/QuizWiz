import React , {useState} from 'react';
import EndScreen from './Components/EndScreen';
import Menu from './Components/Menu';
import Quiz from './Components/Quiz';
import { QuizContext } from './Helpers/Context';
import "./App.css"


function App() {

  const [gameState,setGameState] = useState("Menu");
  const [score,setScore] = useState(0);

  return(
    <div className='App'>
      <h1>QuizWiz</h1>
    <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
      {gameState === "Menu" && <Menu />}
      {gameState === "Quiz" && <Quiz />}
      {gameState === "EndScreen" && <EndScreen />}
    </QuizContext.Provider>

    </div>
  )
}

export default App;