import * as React from 'react'
import {Alert, Button, Checkbox, Col, Container, DismissibleAlert, List, Panel, Row, Section} from "rivet-react";
import {Question} from "./Question";
import {QuestionSet} from "./QuestionSet";
import {useState} from "react";

const quizQuestions = [{
  text: "Here is the text of Question 1",
  options: [{
    label: "Text for Answer 1.1"
  }, {
    label: "Text for Answer 1.2"
  }, {
    label: "Text for Answer 1.3"
  }, {
    label: "Text for Answer 1.4"
  }]
}, {
  text: "Here is the text of Question 2",
  options: [{
    label: "Text for Answer 2.1"
  }, {
    label: "Text for Answer 2.2"
  }, {
    label: "Text for Answer 2.3"
  }, {
    label: "Text for Answer 2.4"
  }]
}]

function App() {
  const [hasStarted, setHasStarted] = useState(false)
  const [questions, recordResponse] = useState(quizQuestions)

  return (
    <div>
      <Container typescale={26} padding={"xxl"}>
        <div className={"rvt-m-bottom-sm"}>
          <h1 className="rvt-ts-29 rvt-lh-title">Multiple Choice Assessment</h1>
        </div>
        <Container typescale={18} className={"rvt-p-all-remove"}>
        {
          !hasStarted ?
              <Panel>
                <p className={"margin-top-none"}>Here is some description of this Multiple Choice Assessment. Here is some description of this Multiple Choice Assessment. Here is some description of this Multiple Choice Assessment. Here is some description of this Multiple Choice Assessment.</p>
                <Button
                  type={"button"}
                  onClick={() => {setHasStarted(true)}}
                >Start Quiz
                </Button>
              </Panel>
            :
            <QuestionSet
              questions={questions}
              recordResponse={recordResponse}
            />
        }
        </Container>
      </Container>
    </div>
  );
}

export default App;
