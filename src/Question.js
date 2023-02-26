import {Button, Checkbox, Col, List, Panel, Row} from "rivet-react";
import * as React from "react";
import _ from "lodash"

export const Question = ({questions, questionIndex, recordResponse}) => {
  const question = questions[questionIndex]

  const displayCorrectOptions = question => {
    if (!question.correctOptions) {
      return;
    }
    const correctOptions = question.options.filter(e => question.correctOptions.includes(e.id))
    return correctOptions.map(e => e.text)
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
    <p>{question.isAnsweredCorrectly ? "Correct" : displayCorrectOptions(question)}</p>
  </Panel>
}
