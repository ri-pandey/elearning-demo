import * as React from "react";
import { Alert, Panel } from "rivet-react";
import { connect } from "react-redux";

const Score = ({ score }) => {
  return (
    <Panel>
      <Alert variant={"info"} title={"Assessment Complete"}>
        You scored {score} in this assessment
      </Alert>
    </Panel>
  );
};

const mapStateToProps = (state) => {
  const questions = state.assessment.questions;
  const maxScore = questions.length;
  const calculatedScore = questions.filter((e) => e.isAnsweredCorrectly).length;

  return {
    score: calculatedScore + "/" + maxScore,
  };
};

export default connect(mapStateToProps)(Score);
