import {Question} from "./Question";
import {useState} from "react";
import {Button, Col, Row} from "rivet-react";
import * as React from "react";

export const QuestionSet = ({questions}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const currentQuestion = questions[currentQuestionIndex]
  const isAtFirstQuestion = currentQuestionIndex === 0

  return <>
    <Question question={currentQuestion} questionIndex={currentQuestionIndex}/>
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
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>
          {
            currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"
          }
        </Button>
      </Col>
    </Row>
  </>
}
