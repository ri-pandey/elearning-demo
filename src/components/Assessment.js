import * as React from 'react'
import {Container} from "rivet-react";
import {STATUS} from "../util";
import Score from "./Score";
import Questions from "./Questions";
import StartAssessment from "./StartAssessment";
import {connect} from "react-redux";

const Assessment = ({status}) => {
  return (
    <div>
      <Container typescale={26} padding={"xxl"}>
        <div className={"rvt-m-bottom-sm"}>
          <h1 className="rvt-ts-29 rvt-lh-title">Multiple Choice Assessment</h1>
        </div>
        <Container typescale={18} className={"rvt-p-all-remove"}>
          {
            status === STATUS.PRISTINE &&
            <StartAssessment />
          }
          {
            status === STATUS.IN_PROGRESS &&
            <Questions />
          }
          {
            status === STATUS.FINISHED &&
            <Score />
          }
        </Container>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    status: state.assessment.status
  }
}
export default connect(mapStateToProps)(Assessment);
