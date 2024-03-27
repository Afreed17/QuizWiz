import React, { useState,useContext } from "react";
import { QuizContext } from '../Helpers/Context';
import "../App.css"
import { questions } from "../Helpers/QuestionBank";

function Quiz(){
    const{score,setScore,gameState,setGameState}=useContext(QuizContext);

    const [currQuest,setCurrQuest]= useState(0);
    const [optChoosen,setOptChoosen]=useState("");
    const [selectedOption,setSelectedOption] = useState(null);



    const nextQuestion = () =>{
        if (questions[currQuest].answer == optChoosen){
            setScore(score+1);
        }
        setCurrQuest(currQuest+1);
        setSelectedOption(null);
    }

    const finshQuiz = () =>{
        setGameState("EndScreen");
    }
    
    
    return(
        <div className="Quiz">
        <h1>{questions[currQuest].prompt}</h1>
        <div className="options">
            <button onClick={()=>{setOptChoosen("A");setSelectedOption("A")}} style={{ backgroundColor: selectedOption === "A" ? '#5F374B' : '' }}>{questions[currQuest].optionA}</button>
            <button onClick={()=>{setOptChoosen("B");setSelectedOption("B")}} style={{ backgroundColor: selectedOption === "B" ? '#5F374B' : '' }}>{questions[currQuest].optionB}</button>
            <button onClick={()=>{setOptChoosen("C");setSelectedOption("C")}} style={{ backgroundColor: selectedOption === "C" ? '#5F374B' : '' }}>{questions[currQuest].optionC}</button>
            <button onClick={()=>{setOptChoosen("D");setSelectedOption("D")}} style={{ backgroundColor: selectedOption === "D" ? '#5F374B' : '' }}>{questions[currQuest].optionD}</button>
        </div>
        {currQuest == questions.length-1 ? 
        (<button className="next" onClick={finshQuiz}>Finish Quiz</button>):
        (<button  className="finish" onClick={nextQuestion}>Next Question</button>)}
        </div>
    )
}

export default Quiz;