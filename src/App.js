import * as React from 'react'
import {Alert, Button, Checkbox, Col, Container, DismissibleAlert, List, Panel, Row, Section} from "rivet-react";
import {Question} from "./Question";

function App() {
  return (
    <div>
      <Container typescale={26} padding={"xxl"}>
        <div className={"rvt-m-bottom-sm"}>
          <h1 className="rvt-ts-29 rvt-lh-title">Multiple Choice Assessment</h1>
        </div>
        <Container typescale={18} className={"rvt-p-all-remove"}>
          <Question/>
        </Container>
      </Container>
    </div>
  );
}

export default App;
