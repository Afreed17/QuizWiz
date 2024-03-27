import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "../App.css"

function Menu(){
    const {gameState,setGameState} = useContext(QuizContext) 
    return(
        <div className="Menu">
            <button onClick={()=>{setGameState("Quiz")}}>Start Quiz</button>
        </div>
    )
}

export default Menu;