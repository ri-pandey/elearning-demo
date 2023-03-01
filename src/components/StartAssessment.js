import {Button, Panel} from "rivet-react";
import {STATUS} from "../util";
import * as React from "react";
import {connect} from "react-redux";
import {setQuestions, setStatus} from "../redux/actions";
import {fetchQuestions} from "../api/api";

const StartAssessment = ({beginAssessment}) => {
  return <Panel>
    <p className={"margin-top-none"}>Here is some description of this Multiple Choice Assessment. Here is some
      description of this Multiple Choice Assessment. Here is some description of this Multiple Choice
      Assessment. Here is some description of this Multiple Choice Assessment.</p>
    <Button
      type={"button"}
      onClick={beginAssessment}
    >Start Quiz
    </Button>
  </Panel>
}

const mapDispatchToProps = (dispatch) => {
  return {
    beginAssessment: () => {
      fetchQuestions().then(questions => {
        dispatch(setQuestions(questions))
        dispatch(setStatus(STATUS.IN_PROGRESS))
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(StartAssessment)
