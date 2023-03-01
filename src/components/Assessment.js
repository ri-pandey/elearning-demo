import * as React from 'react'
import {Button, Container} from "rivet-react";
import {useState} from "react";
import {STATUS} from "../util";
import {quizQuestions} from "../api/data";
import Score from "./Score";
import Question from "./Question";
import StartAssessment from "./StartAssessment";
import {connect} from "react-redux";
import {setStatus} from "../redux/actions";

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
            <Question />
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
export default connect(mapStateToProps, null)(Assessment);
