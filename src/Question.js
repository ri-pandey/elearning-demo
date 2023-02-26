import {Button, Checkbox, Col, List, Panel, Row} from "rivet-react";
import * as React from "react";

export const Question = ({question, questionIndex}) => {
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
            question.options.map((e, i) => <Checkbox key={"option-" + i} name="option" label={e.label}/>)
          }
        </List>
      </fieldset>
    </Panel>
  </Panel>
}
