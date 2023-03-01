import {Checkbox, List} from "rivet-react";
import * as React from "react";
import _ from "lodash";

export const Options = ({questions, questionIndex, answerIsValidated, recordResponse}) => {
  const question = questions[questionIndex]

  const onSelectionChange = (e, optionIndex) => {
    let questionsCloned = _.cloneDeep(questions)
    let questionCloned = questionsCloned[questionIndex]
    questionCloned.options[optionIndex]["selected"] = e.target.checked
    recordResponse(questionsCloned)
  }

  return <fieldset>
    <legend className="rvt-sr-only">Options List</legend>
    <List variant="plain">
      {
        question.options.map((e, i) => <Checkbox
          key={"option-" + i}
          name="option" label={e.text}
          checked={!!question.options[i].selected}
          onChange={e => onSelectionChange(e, i)}
          disabled={answerIsValidated}
        />)
      }
    </List>
  </fieldset>
}
