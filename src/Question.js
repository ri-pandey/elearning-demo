import {Alert, Button, Checkbox, Col, List, Panel, Row} from "rivet-react";
import * as React from "react";
import _ from "lodash"

export const Question = ({questions, questionIndex, recordResponse}) => {
  const question = questions[questionIndex]
  const questionIsAnswered = question.isAnsweredCorrectly || (question.correctOptions && question.correctOptions.length > 0)

  const getCorrectOptionsListItems = () => {
    if (!question.correctOptions) {
      return;
    }
    const correctOptions = question.options.filter(e => question.correctOptions.includes(e.id))
    return correctOptions.map((e, i) => <li key={"correct-option-" + i}>{e.text}</li>)
  }

  return <Panel>
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
      questionIsAnswered &&
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
}
