import {Alert, Button, Checkbox, Col, Container, List, Panel, Row} from "rivet-react";
import * as React from "react";
import _ from "lodash"
import {STATUS} from "./util";
import {submitResponse} from "./data/api";

export const Question = ({questions, questionIndex, recordResponse, setCurrentQuestionIndex, setStatus}) => {
  const question = questions[questionIndex]
  const answerIsValidated = question.isAnsweredCorrectly || (question.correctOptions && question.correctOptions.length > 0)

  const isFirstQuestion = questionIndex === 0
  const isLastQuestion = questionIndex === questions.length - 1

  const displayCorrectOptions = () => {
    if (!question.correctOptions) {
      return;
    }
    const correctOptions = question.options.filter(e => question.correctOptions.includes(e.id))
    return correctOptions.map((e, i) => (
      <React.Fragment key={"correct-option-" + i}>
        <span className={"rvt-m-left-md"}>{"- " + e.text}</span>
        {i < correctOptions.length - 1 && <br/>}
      </React.Fragment>
      )
    )
  }

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
                disabled={answerIsValidated}
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
                <span className={"rvt-m-all-remove"}>Correct choices are:<br/></span>
                {displayCorrectOptions()}
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
          onClick={answerIsValidated ? gotoNextQuestion : validateResponse}
        >
          {
            answerIsValidated ? "Next" : "Submit"
          }
        </Button>
      </Col>
    </Row>
  </>
}
