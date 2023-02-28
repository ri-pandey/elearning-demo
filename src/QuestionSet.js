import {Question} from "./Question";
import {useState} from "react";
import * as React from "react";

export const QuestionSet = ({questions, recordResponse, setStatus}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  return <>
    <Question
      questions={questions}
      questionIndex={currentQuestionIndex}
      setCurrentQuestionIndex={setCurrentQuestionIndex}
      recordResponse={recordResponse}
      setStatus={setStatus}
    />
  </>
}
