import {Button, Col, Row} from "rivet-react";
import * as React from "react";
import _ from "lodash";
import {submitResponse} from "../api/api";
import {STATUS} from "../util";

export const Buttons = ({questions, questionIndex, answerIsValidated, gotoNextQuestion,
                          gotoPreviousQuestion, recordResponse, setStatus}) => {
  const question = questions[questionIndex]
  const isLastQuestion = questionIndex === questions.length - 1

  const validateResponse = () => {
    const questionsCloned = _.cloneDeep(questions)
    submitResponse(question).then(() => {
      questionsCloned[questionIndex].isAnsweredCorrectly = true
    }).catch(response => {
      questionsCloned[questionIndex].isAnsweredCorrectly = false
      questionsCloned[questionIndex].correctOptions = response
    }).finally(() => {
      recordResponse(questionsCloned)
      if (isLastQuestion) {
        setStatus(STATUS.FINISHED)
      }
    })
  }

  const isFirstQuestion = questionIndex === 0

  return <Row padding={{top: "md"}}>
    {
      !isFirstQuestion &&
      <Col md={6}>
        <Button
          type={"button"}
          onClick={gotoPreviousQuestion}
        >
          Previous
        </Button>
      </Col>
    }
    <Col md={isFirstQuestion ? 12 : 6} className={"align-content-right"}>
      <Button
        type={"button"}
        onClick={answerIsValidated ? gotoNextQuestion : validateResponse}
      >
        {
          answerIsValidated ? "Next" : "Submit"
        }
      </Button>
    </Col>
  </Row>
}
