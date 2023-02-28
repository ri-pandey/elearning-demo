import * as React from 'react'
import {Alert, Button, Checkbox, Col, Container, DismissibleAlert, List, Panel, Row, Section} from "rivet-react";
import {useState} from "react";
import {STATUS} from "./util";
import {quizQuestions} from "./data/data";
import {Score} from "./Score";
import {Question} from "./Question";

const App = ({}) => {
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
            <Panel>
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

export default App;
