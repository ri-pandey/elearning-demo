import { Alert, Badge } from "rivet-react";
import * as React from "react";

const CorrectOptions = ({ question }) => {
  const correctOptions = question.correctOptions;
  if (!correctOptions) {
    return;
  }
  return correctOptions.map((option, i) => (
    <React.Fragment key={"correct-option-" + i}>
      <span className={"rvt-m-left-md"}>{"- " + option.text}</span>
      {i < correctOptions.length - 1 && <br />}
    </React.Fragment>
  ));
};

export const ValidationResult = ({ question }) => {
  return (
    <>
      <Badge variant={question.isAnsweredCorrectly ? "success" : "danger"}>
        {question.isAnsweredCorrectly ? "Correct" : "Incorrect"}
      </Badge>
      {!question.isAnsweredCorrectly && (
        <div className={"rvt-m-top-xs"}>
          <Alert variant={question.isAnsweredCorrectly ? "success" : "danger"}>
            <span className={"rvt-m-all-remove"}>
              Correct choices are:
              <br />
            </span>
            <CorrectOptions question={question} />
          </Alert>
        </div>
      )}
    </>
  );
};
