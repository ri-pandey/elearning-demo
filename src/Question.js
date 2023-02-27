import {Alert, Button, Checkbox, Col, List, Panel, Row} from "rivet-react";
import * as React from "react";
import _ from "lodash"
import {submitResponse} from "./util";

export const Question = ({questions, questionIndex, recordResponse, setCurrentQuestionIndex}) => {
  const question = questions[questionIndex]
  const answerIsValidated = question.isAnsweredCorrectly || (question.correctOptions && question.correctOptions.length > 0)

  const isFirstQuestion = questionIndex === 0

  const getCorrectOptionsListItems = () => {
    if (!question.correctOptions) {
      return;
    }
    const correctOptions = question.options.filter(e => question.correctOptions.includes(e.id))
    return correctOptions.map((e, i) => <li key={"correct-option-" + i}>{e.text}</li>)
  }

  const submitAndValidate = () => {
    const questionsCloned = _.cloneDeep(questions)
    submitResponse(question).then(() => {
      questionsCloned[questionIndex].isAnsweredCorrectly = true
      recordResponse(questionsCloned)
    }).catch(response => {
      questionsCloned[questionIndex].isAnsweredCorrectly = false
      questionsCloned[questionIndex].correctOptions = response
      recordResponse(questionsCloned)
    })
  }

  const gotoNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setCurrentQuestionIndex(questionIndex + 1)
    }
  }

  return <>
    <Panel>
      <div className="rvt-text-bold">
        <p className={"margin-top-none"}>
          Question {questionIndex + 1}
        </p>
      </div>
      <p>{question.text}</p>
      <Panel variant={"light"}>
        <fieldset>
          <legend className="rvt-sr-only">Options List</legend>
          <List variant="plain">
            {
              question.options.map((e, i) => <Checkbox
                key={"option-" + i}
                name="option" label={e.text}
                checked={!!question.options[i].selected}
                onChange={e => {
                  let questionsCloned = _.cloneDeep(questions)
                  let questionCloned = questionsCloned[questionIndex]
                  questionCloned.options[i]["selected"] = e.target.checked
                  recordResponse(questionsCloned)
                }}
              />)
            }
          </List>
        </fieldset>
      </Panel>
      {
        answerIsValidated &&
        <div className={"rvt-m-top-lg"}>
          <Alert
              variant={question.isAnsweredCorrectly ? "success" : "danger"}
              title={question.isAnsweredCorrectly ? "Correct" : "Incorrect"}
            >
            {
              !question.isAnsweredCorrectly &&
              <>
                <p className={"rvt-m-all-remove"}>Correct choices are:</p>
                <List>
                  {getCorrectOptionsListItems()}
                </List>
              </>
            }
          </Alert>
        </div>
      }
    </Panel>
    <Row padding={{top: "md"}}>
      {
        !isFirstQuestion &&
        <Col md={6}>
          <Button
            type={"button"}
            onClick={() => setCurrentQuestionIndex(questionIndex - 1)}
          >
            Previous
          </Button>
        </Col>
      }
      <Col md={isFirstQuestion ? 12 : 6} className={"align-content-right"}>
        <Button
          type={"button"}
          onClick={answerIsValidated ? gotoNextQuestion : submitAndValidate}
        >
          {
            answerIsValidated ? "Next" : "Submit"
          }
        </Button>
      </Col>
    </Row>
  </>
}
