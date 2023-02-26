import {Question} from "./Question";
import {useState} from "react";
import {Button, Col, Row} from "rivet-react";
import * as React from "react";
import {submitResponse} from "./util";

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
          // onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
          onClick={() => {
            const questionsCloned = _.cloneDeep(questions)
            submitResponse(currentQuestion).then(() => {
              questionsCloned[currentQuestionIndex].isAnsweredCorrectly = true
              recordResponse(questionsCloned)
              console.log("submission is correct")
            }).catch(response => {
              questionsCloned[currentQuestionIndex].isAnsweredCorrectly = false
              questionsCloned[currentQuestionIndex].correctOptions = response
              recordResponse(questionsCloned)
              console.log("submission is not correct")
              console.log(response)
            })
          }}
        >
          Submit
        </Button>
      </Col>
    </Row>
  </>
}
