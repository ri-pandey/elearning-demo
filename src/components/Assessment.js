import * as React from 'react'
import {Button, Container} from "rivet-react";
import {useState} from "react";
import {STATUS} from "../util";
import {quizQuestions} from "../api/data";
import {Score} from "./Score";
import {Question} from "./Question";
import StartAssessment from "./StartAssessment";
import {connect} from "react-redux";
import {setStatus} from "../redux/actions";

const Assessment = ({status, questionsLength, setCurrentStatus}) => {
  const [questions, recordResponse] = useState(quizQuestions)

  return (
    <div>
      <Container typescale={26} padding={"xxl"}>

        {/*<div className={"rvt-m-bottom-sm"}>*/}
        {/*  <h1 className="rvt-ts-29 rvt-lh-title">{status}</h1>*/}
        {/*</div>*/}

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
            <Question
              questions={questions}
              recordResponse={recordResponse}
            />
          }
          {
            status === STATUS.FINISHED &&
            <Score questions={questions}></Score>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setCurrentStatus: (status) => {
//       dispatch(setStatus("ho ho ho"))
//     }
//   }
// }

export default connect(mapStateToProps, null)(Assessment);
