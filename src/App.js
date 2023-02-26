import * as React from 'react'
import {Alert, Button, Checkbox, Col, Container, DismissibleAlert, List, Panel, Row, Section} from "rivet-react";
import {Question} from "./Question";
import {QuestionSet} from "./QuestionSet";

const questions = [{
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
  return (
    <div>
      <Container typescale={26} padding={"xxl"}>
        <div className={"rvt-m-bottom-sm"}>
          <h1 className="rvt-ts-29 rvt-lh-title">Multiple Choice Assessment</h1>
        </div>
        <Container typescale={18} className={"rvt-p-all-remove"}>
          <QuestionSet questions={questions}/>
        </Container>
      </Container>
    </div>
  );
}

export default App;
