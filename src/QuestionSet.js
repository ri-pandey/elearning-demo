import {Question} from "./Question";
import {useState} from "react";
import {Button, Col, Row} from "rivet-react";
import * as React from "react";

export const QuestionSet = ({questions}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const currentQuestion = questions[currentQuestionIndex]

  return <>
    <Question question={currentQuestion} questionIndex={currentQuestionIndex}/>
    <Row padding={{top: "md"}}>
      <Col md={6}>
        <Button
          disabled={currentQuestionIndex === 0}
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
        >
          Previous
        </Button>
      </Col>
      <Col md={6} className={"align-content-right"}>
        <Button
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>
          {
            currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"
          }
        </Button>
      </Col>
    </Row>
  </>
}
