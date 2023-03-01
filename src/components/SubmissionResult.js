import {Alert} from "rivet-react";
import * as React from "react";

export const SubmissionResult = ({question}) => {
  const displayCorrectOptions = () => {
    if (!question.correctOptions) {
      return;
    }
    const correctOptions = question.options.filter(e => question.correctOptions.includes(e.id))
    return correctOptions.map((option, i) => (
        <React.Fragment key={"correct-option-" + i}>
          <span className={"rvt-m-left-md"}>{"- " + option.text}</span>
          {i < correctOptions.length - 1 && <br/>}
        </React.Fragment>
      )
    )
  }

  return <Alert
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
}
