import * as React from 'react'
import {Button, Container, Panel} from "rivet-react";
import {useState} from "react";
import {STATUS} from "./util";
import {quizQuestions} from "./data/data";
import {Score} from "./Score";
import {Question} from "./Question";
import {StartAssessment} from "./StartAssessment";

const Assessment = ({}) => {
  const [status, setStatus] = useState(STATUS.PRISTINE)
  const [questions, recordResponse] = useState(quizQuestions)

  return (
    <div>
      <Container typescale={26} padding={"xxl"}>
        <div className={"rvt-m-bottom-sm"}>
          <h1 className="rvt-ts-29 rvt-lh-title">Multiple Choice Assessment</h1>
        </div>
        <Container typescale={18} className={"rvt-p-all-remove"}>
          {
            status === STATUS.PRISTINE &&
            <StartAssessment setStatus={setStatus}/>
          }
          {
            status === STATUS.IN_PROGRESS &&
            <Question
              questions={questions}
              recordResponse={recordResponse}
              setStatus={setStatus}
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

export default Assessment;
