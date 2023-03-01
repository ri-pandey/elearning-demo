import {Button, Panel} from "rivet-react";
import {STATUS} from "../util";
import * as React from "react";
import {connect} from "react-redux";
import {setStatus} from "../redux/actions";

const StartAssessment = ({setStatus}) => {
  return <Panel>
    <p className={"margin-top-none"}>Here is some description of this Multiple Choice Assessment. Here is some
      description of this Multiple Choice Assessment. Here is some description of this Multiple Choice
      Assessment. Here is some description of this Multiple Choice Assessment.</p>
    <Button
      type={"button"}
      onClick={() => {
        setStatus(STATUS.IN_PROGRESS)
      }}
    >Start Quiz
    </Button>
  </Panel>
}

const mapDispatchToProps = (dispatch) => {
  return {
    setStatus: (newStatus) => {
      dispatch(setStatus(newStatus))
    },
  }
}

export default connect(null, mapDispatchToProps)(StartAssessment)
