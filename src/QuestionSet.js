import {Question} from "./Question";
import {useState} from "react";
import {Button, Col, Row} from "rivet-react";
import * as React from "react";

export const QuestionSet = ({questions, recordResponse}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const currentQuestion = questions[currentQuestionIndex]
  const isAtFirstQuestion = currentQuestionIndex === 0
  const isAtLastQuestion = currentQuestionIndex === questions.length - 1

  return <>
    <Question
      questions={questions}
      questionIndex={currentQuestionIndex}
      recordResponse={recordResponse}
    />
    <Row padding={{top: "md"}}>
      {
        !isAtFirstQuestion &&
        <Col md={6}>
        <Button
          type={"button"}
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
        >
          Previous
        </Button>
        </Col>
      }
      <Col md={isAtFirstQuestion ? 12 : 6} className={"align-content-right"}>
        <Button
          type={"button"}
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
          // onClick={() => submitResponse(selectedOptions)}
        >
          Submit
        </Button>
      </Col>
    </Row>
  </>
}
