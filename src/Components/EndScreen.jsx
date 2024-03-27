import React, { useState,useContext } from "react";
import { QuizContext } from '../Helpers/Context';
import { questions } from "../Helpers/QuestionBank";
import "../App.css";


function EndScreen(){
    const {score,setScore,setGameState}=useContext(QuizContext);

    const restart = () => {
        setScore(0);
        setGameState("Menu");
    }

    return(
        <div className="EndScreen">
            <h1>Quiz Finished</h1>
            <h2>{score} / {questions.length}</h2>
            <button onClick={restart}>Restart Quiz</button>
        </div>
    )
}

export default EndScreen;