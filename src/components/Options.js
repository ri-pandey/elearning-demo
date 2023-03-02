import { Checkbox, List } from "rivet-react";
import * as React from "react";
import { setOptionSelection } from "../redux/actions";
import { connect } from "react-redux";

const Options = ({
  question,
  answerIsValidated,
  setOptionSelection,
  setNoOptionsSelectedAlertVisible,
}) => {
  const onSelectionChange = (e, optionId) => {
    setOptionSelection(question.id, optionId, e.target.checked);
    setNoOptionsSelectedAlertVisible(false);
  };

  return (
    <fieldset>
      <legend className="rvt-sr-only">Options List</legend>
      <List variant="plain">
        {question.options.map((option, i) => (
          <Checkbox
            key={"option-" + i}
            name="option"
            label={option.text}
            checked={!!question.options[i].selected}
            onChange={(e) => onSelectionChange(e, option.id)}
            disabled={answerIsValidated}
          />
        ))}
      </List>
    </fieldset>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOptionSelection: (questionId, optionId, selected) => {
      dispatch(setOptionSelection(questionId, optionId, selected));
    },
  };
};

export default connect(null, mapDispatchToProps)(Options);
