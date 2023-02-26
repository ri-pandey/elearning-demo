import {Button, Checkbox, Col, List, Panel, Row} from "rivet-react";
import * as React from "react";

export const Question = ({}) => {
  return <Panel>
    <div className="rvt-text-bold">
      <p className={"margin-top-none"}>
        Question 1
      </p>
    </div>
    <p>What is the capital of something</p>
    <Panel variant={"light"}>
      <fieldset>
        <legend className="rvt-sr-only">Options List</legend>
        <List variant="plain">
          <Checkbox name="option" label="Option One" />
          <Checkbox name="option" label="Option Two" defaultChecked />
          <Checkbox name="option" label="Option Three (Disabled)" disabled />
          <Checkbox name="option" label="Option Four (Checked, Disabled)" checked disabled />
        </List>
      </fieldset>
    </Panel>
    <Row padding={{top: "md"}}>
      <Col md={6}>
        <Button>Previous</Button>
      </Col>
      <Col md={6} className={"align-content-right"}>
        <Button>Next</Button>
      </Col>
    </Row>
  </Panel>
}
